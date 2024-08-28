from rest_framework import serializers
from .models import User, Post, Reply, Quote, Message, Like, Repost


# Create views related to the user model
class CreateUsersSerializer(serializers.HyperlinkedModelSerializer):
    password =  serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta():        
        model = User
        fields = ["username", "first_name", "last_name", "email", "dob", "gender", "password", "confirm_password"]
        extra_kwargs = {"id":{"read_only": True}}

    def validate(self, user_data):

        # Check if passwords match
        if user_data["password"] != user_data["confirm_password"]:
            raise serializers.ValidationError("Passwords don't match.")
        return user_data
    
        # Validate password, i.e., if it has the required characters
            # Atleats a unique character, a number, upper case and lowercase, and a minimum of 8 characters usign regex

    # Create a user with specific field; i.e., username, first_name, last_name, email, dob, gender, and password
    # This will make sure that a new user cannot add any new data while registering.
    def create(self, validated_values):
        
        user_instance = User(
            username=validated_values["username"],
            first_name = validated_values["first_name"],
            last_name = validated_values["last_name"],
            email = validated_values["email"],
            dob = validated_values["dob"],
            password = validated_values["password"]
        )
        user_instance.set_password(validated_values["password"])
        user_instance.save()
        return user_instance
    
class UsersSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.UUIDField(read_only=True)
    password = serializers.CharField(write_only=True)
    
    class Meta:
        # Add is following field. Exclude when user is fetching self.
        model = User
        exclude = ["date_joined", "groups", "is_active", "is_staff", "is_superuser", "user_permissions"]
        extra_kwargs =  {
            "id":{"read_only":True}, 
            "password": {"write_only": True}, 
            "verified":{"read_only": True}, 
            "followers_count": {"read_only": True}, 
            "following_count":{"read_only": True},
            "gender": {"required": True},
            "posts_count": {"read_only": True}
        }

class FollowersFollowingSerializer(serializers.HyperlinkedModelSerializer):
    followers = serializers.HyperlinkedRelatedField(view_name="user-detail", many=True, read_only=True)
    class Meta:
        model = User
        fields = ["url", "id", "followers", "following"]
        extra_kwargs = {"following": {"read_only":True}}


# Create the posts serializer(s)
class PostsSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.UUIDField(read_only=True)
    owner_first_name = serializers.CharField(source="owner.first_name", read_only=True)
    owner_last_name = serializers.CharField(source="owner.last_name", read_only=True)
    owner_avatar = serializers.ImageField(source="owner.avatar", read_only=True)
    owner_username = serializers.CharField(source="owner.username", read_only=True)
    owner_verified = serializers.BooleanField(source="owner.verified", read_only=True)
    class Meta:
        model = Post
        fields = "__all__"
        # exclude = ["replies", "quote"]
        extra_kwargs = {
            "like_count":{"read_only":True},
            "replies_count":{"read_only":True},
            "reposts_count":{"read_only":True},
        }

# Create a replies serializer
class RepliesSerializer(serializers.HyperlinkedModelSerializer):  # make this a hperlinked serializer
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = Reply
        fields = "__all__"
        extra_kwargs = {
            "replies_count": {"read_only" : True},
            "reposts_count": {"read_only": True},
            "like_count": {"read_only": True}
        }

# Create a quotes serializer
class QuotesSerializer(serializers.HyperlinkedModelSerializer):  # Make this a hperlinked serializer
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = Quote
        fields = "__all__"
        extra_kwargs = {
            "replies_count": {"read_only" : True},
            "reposts_count": {"read_only": True},
            "like_count": {"read_only": True}
        }
        
# Create a messages serializer
class MessagesSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = Message
        fields = "__all__"

# Create a repost serializer
class RepostsSerializer(serializers.ModelSerializer):    
    id = serializers.UUIDField(read_only=True) 
       
    class Meta:
        model = Repost
        fields = "__all__"

# Create a likes serializer
class LikesSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    class Meta:
        model = Like
        fields = "__all__"