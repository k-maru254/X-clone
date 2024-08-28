from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView,RetrieveAPIView, ListCreateAPIView
from .models import User, Post, Reply, Quote, Like, Repost, Message
from .serializers import (UsersSerializer, CreateUsersSerializer, FollowersFollowingSerializer, PostsSerializer, 
                          RepliesSerializer, QuotesSerializer, LikesSerializer, RepostsSerializer, MessagesSerializer)
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets
from rest_framework.reverse import reverse
from rest_framework.exceptions import MethodNotAllowed


def add_reduce_post_count(user_id, type=None):
    post_instance = User.objects.get(id=user_id)
    if type == "add":
        post_instance.posts_count += 1
    else:
        post_instance.posts_count -= 1

    post_instance.save()


@api_view(["GET"])
def trial_view(req, format=None):
    if req.method == "GET":
        return Response([{"name": "Denis"}])
    return Response([{"response": "This is not a good response"}])

@api_view(["GET"])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        "posts": reverse("post-list", request=request, format=format),
        "reposts": reverse("repost-list", request=request, format=format),
        "quotes": reverse("quote-list", request=request, format=format),
        "replies": reverse("reply-list", request=request, format=format),
        "likes": reverse("like-list", request=request, format=format),
        "messages": reverse("message-list", request=request, format=format),
    })

def is_following(account_user_id, another_user_id):
    following = User.objects.filter(id=account_user_id, following__id=another_user_id).exists()
    return following

def get_post_instance(reply_instance):
    if reply_instance.post:
        return reply_instance.post
    elif reply_instance.reply:
        return reply_instance.reply
    elif reply_instance.quote:
        return reply_instance.quote
    else:
        return None

class UsersView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer 

class UserByUsername(APIView):
    def get(self, request, format=None):
        print(request.data)
        return Response(data={"details": "Success", "response": request.data}, status=status.HTTP_200_OK)


class UserRegister(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUsersSerializer

class UserUpdateReadDelete(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer

    def get_serializer(self, *args, **kwargs):
        serializer = super().get_serializer(*args, **kwargs)

        # Remove the password, account status and the email from being updated
        if self.request.method == "PUT":
            del serializer.fields["password"]
            del serializer.fields["acount_status"]
            del serializer.fields["email"]

        return serializer
    
class UserValidEmail(APIView):    
    def post(self, request, format=None):
        data = request.data
        is_email = None
        email = None
        if "email" in data:
            email = data.get("email")
            is_email = "@" in email
        else:
            return Response(data={"details": "Make sure to add an Email"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            # Validate email and confirm that variable passed through the post method is an email
            
            email_exists = User.objects.filter(email=email).exists() if is_email else User.objects.filter(username=email).exists()
            return Response(data={"details": "Email check successful", "exists":email_exists}, status=status.HTTP_200_OK)
        except:
            return Response({"details": "Unable to verify email."}, status=status.HTTP_400_BAD_REQUEST)   
    
class FollowersView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = FollowersFollowingSerializer

class FollowUserView(APIView):
    def put(self, req, pk, format=None):

        # I am not logging in yet, therefore using the post value. Afrer logging in use the user value from the req
        user_id = id=req.data["follow_id"]
        print(user_id)
        following_id = pk
        try:
            following_instance = User.objects.get(id=following_id) # This represents user to be followed
            follower_instance =  User.objects.get(id=user_id)  # This represents the user following another user

            # Check if logged in user is following the user
            following_user = is_following(user_id, following_id)

            if follower_instance == following_instance:
                return Response({"details": "A user cannot follow own account"}, status=status.HTTP_400_BAD_REQUEST)
            if following_instance:
                if not following_user:
                    following_instance.followers.add(follower_instance) # Adding a new follower to the database  
                    follower_instance.followers_count += 1
                    following_instance.following_count += 1  # Incrimenting the number of followers 
                    follower_instance.save()
                    following_instance.save()  # Saving the incremented number of users
                    return Response({"details": "User followed successfully"}, status=status.HTTP_200_OK) 

                else:
                    following_instance.followers.remove(follower_instance) # removing a new follower to the database  
                    follower_instance.followers_count -= 1
                    following_instance.following_count -= 1  # Decrementing the number of followers ~
                    follower_instance.save()
                    following_instance.save()  # Saving the incremented number of users
                    return Response({"details": "User unfollowed successfully"}, status=status.HTTP_200_OK) 
            else:
                return Response({"details": "The user you are trying to follow does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        except :
            return Response({"details": "Could not follow the user, an error occured"}, status=status.HTTP_400_BAD_REQUEST)

    
# Create views related to the post model. Here user the Viewsets uplike the above where API views were used.
    
class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Post.objects.all()
    serializer_class = PostsSerializer

    # Deny this view to show post details, i.e., show all posts only
    def detail(self, request, *args, **kwargs):
        return


    @action(detail=False, methods=["post"])
    def create_post(self, req, format=None):
        data = req.data
        print(data)
        serialized_data = self.get_serializer(data=data)
        if serialized_data.is_valid():

            # if self.request.user == :
            add_reduce_post_count(self.request.user.id, "add")
            serialized_data.save()
            return Response({"details": "Post created successfully", "data":serialized_data.data}, status=status.HTTP_201_CREATED)
        return Response({"details":"Input data not valid", "data":serialized_data.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=["delete"])
    def delete(self, req, pk=None):
        post_instance = self.get_object()
        post_instance.delete()
        return Response({"details": "Post deleted successfully"}, status=status.HTTP_202_ACCEPTED)
    
    # Show whether a user liked a post
    def list(self, request, *args, **kwargs):
        user = request.user
        queryset = self.filter_queryset(self.get_queryset())

        queryset = queryset.prefetch_related("likes", "reposts")
        all_posts = []
        for post in queryset:
            user_liked_post = any(user == like.owner for like in post.likes.all())
            user_reposted_post = any(user == repost.owner for repost in post.reposts.all())

            post_data = self.get_serializer(post).data
            # add data to the data obtained from the database
            post_data["user_liked_post"] = user_liked_post
            post_data["user_reposted_post"] = user_reposted_post
            
            # Add all the data to a single list
            all_posts.append(post_data)
        
        return Response(data={"details": "Successfully fetched data", "results": all_posts}, status=status.HTTP_200_OK)
    
# Create a replies view
    # The replies view can only create and delete a reply, no reading or editing.
    # Reading can only be accessed via the user or the post, quote or message that owns the reply
    # The best aproach is to use a class based apiview
class RepliesViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Reply.objects.all()
    serializer_class = RepliesSerializer

    @action(detail=False, methods=["post"])
    def reply(self, request, format=None):

        data = request.data

        contains_post_id = "post" in data
        contains_reply_id = "reply" in data
        contains_quote_id = "quote" in data

        if not contains_post_id and not contains_reply_id and not contains_quote_id:
            return Response(data={"details": "A reply must be attached to a post, reply, or a quote"}, status=status.HTTP_400_BAD_REQUEST)
        
        serialized_data = self.get_serializer(data = data)
        post_instance = None


        if serialized_data.is_valid():
            reply_instance = serialized_data.save()              

            # Get a post instance depending on the type of post replied to 
            post_instance = get_post_instance(reply_instance)
                        
            # Increment replies count here
            post_instance.replies_count += 1
            post_instance.save()

            return Response(data={"details": "Reply made", "data": serialized_data.data}, status=status.HTTP_201_CREATED)  
        return Response(data={"details": "Reply not created", "data": serialized_data.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=["delete"])
    def delete(self, request, pk=None):
        reply_instance = self.get_object()
        
        # Get a post instance depending on the type of post replied to 
        post_instance = get_post_instance(reply_instance)
        
        # Decrement replies count here
        post_instance.replies_count -= 1
        post_instance.save()
        
        reply_instance.delete()
        
        return Response(data={"details": "Reply deleted"}, status=status.HTTP_204_NO_CONTENT)
    

class QuotesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuotesSerializer

    @action(detail=False, methods=["post"])
    def quote(self, request):
        data = request.data
        serialized_data = self.get_serializer(data=data)
        if serialized_data.is_valid():
            quote_instance = serialized_data.save()

            # Get the post instace that created the request
            quoted_post_instance = get_post_instance(quote_instance) 
            # Increment repost count
            quoted_post_instance.reposts_count += 1
            quoted_post_instance.save()
            
            return Response(data={"details": "Quote made", "data": serialized_data.data}, status=status.HTTP_201_CREATED)  
        return Response(data={"details": "Quote not created", "data": serialized_data.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=["delete"])
    def delete(self, request, pk=None):
        quote_instance = self.get_object()
        quote_instance.delete()

        # Get the post instace that created the request
        quoted_post_instance = get_post_instance(quote_instance) 
        # decrement repost count
        quoted_post_instance -= 1
        quoted_post_instance.save()
         
        # Decrement quote counte
        return Response(data={"details": "Quote deleted"}, status=status.HTTP_204_NO_CONTENT)

# Create a likers viewset
    # This should be able to create and destroy likes depending on a user already like or not like the post
    # It should be able to increments and decrement likes count
class LikesRepostsViewSet(viewsets.ReadOnlyModelViewSet):

    def get_queryset(self):
        if self.request.path.split("/")[2] == "likes":
            return Like.objects.all()
        else:
            return Repost.objects.all()

    def get_serializer_class(self):
        if self.request.path.split("/")[2] == "likes":
            return LikesSerializer
        else:
            return RepostsSerializer

    @action(detail=False, methods=["post"])
    def do_undo(self, request, format=None):
        data = request.data
        try:
            user = User.objects.get(id=data["owner"])  # use the authorized user
        except User.DoesNotExist:
            return Response({"detail": "This is not a valid user"}, status=status.HTTP_401_UNAUTHORIZED)

        action_type = request.path.split("/")[2]
        is_like = action_type == "likes"  # Checking if the path is for likes or repost
        like_repost_queryset = None
        serializer = self.get_serializer(data=data) 
        
        # Use the get_post_instance method to avoid DRY code
        if is_like:            
            # Check if the post is a reply, post, or repost and check its presence in the database before getting the like instance
            if data["post"]:
                like_repost_queryset = user.likes.filter(post=data["post"])
            elif data["reply"]:
                like_repost_queryset = user.likes.filter(reply=data["reply"])
            elif data["repost"]:
                like_repost_queryset = user.likes.filter(quote=data["quote"])
            else:
                return Response(data={"detail": "A like must be attached to a post, reply or a repost"}, status=status.HTTP_400_BAD_REQUEST)

        else:

            if data["post"]:
                like_repost_queryset = user.reposts.filter(post=data["post"])
            elif data["reply"]:
                like_repost_queryset = user.reposts.filter(reply=data["reply"])
            elif data["quote"]:
                like_repost_queryset = user.reposts.filter(quote=data["quote"])
            else:
                return Response(data={"detail": f"A {action_type.capitalize()} must be attached to a post, reply or a quote"}, status=status.HTTP_400_BAD_REQUEST)
            

        is_like_repost = like_repost_queryset.exists()
        
        if not is_like_repost:
            if serializer.is_valid():
                like_repost_instance = serializer.save()

                # Increment Like count
                if is_like:
                    post_instance = like_repost_instance.post
                    post_instance.like_count += 1
                    post_instance.save()
                else:
                # Increment the repost count
                    post_instance = like_repost_instance.post
                    post_instance.reposts_count += 1
                    post_instance.save()

                return Response(data={"details": f"Post {action_type.capitalize()}", "data": serializer.data}, status=status.HTTP_201_CREATED)
            return Response(data={"details": f"Failed to {action_type.capitalize()} post"}, status=status.HTTP_400_BAD_REQUEST)
        else:

            # Convert like queryset to am instance
            like_repost_instance = like_repost_queryset.get()
            post_instance = like_repost_instance.post

            # Decrement the like count
            if is_like:
                post_instance.like_count -= 1
                post_instance.save()
                like_repost_queryset.delete()

            # Decrement the post count
            else:                
                post_instance.reposts_count -= 1
                post_instance.save()
                like_repost_queryset.delete()

            return Response(data={"details": f"{action_type.capitalize()} Unliked"}, status=status.HTTP_204_NO_CONTENT)

# Create a message viewset
class MessagesViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessagesSerializer

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed(["PUT"])