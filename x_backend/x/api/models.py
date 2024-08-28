from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# Create gender choices
GENDER_CHOICES = {
    "m": "Male",
    "f": "Female",
    "none": "None"
}
STATUS_CHOICES = {
    "active": "Active",
    "suspended": "Suspended",
    "banned": "Banned"
}

# Create the User model to store all user information
class User(AbstractUser):
    id = models.UUIDField(unique=True, primary_key=True, editable=False, default=uuid.uuid4 )
    username = models.CharField(unique=True, max_length=50 )
    first_name = models.CharField(max_length=50, null=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(unique=True)
    dob = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default="None")
    avatar = models.ImageField(upload_to="avatar/", default="defaults/user_avatar.jpg")
    cover_image = models.ImageField(upload_to="cover_images/", null=True, blank=True)
    acount_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="active")
    date_created = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    verified = models.BooleanField(default=False)
    bio = models.CharField(max_length=256, null=True, blank=True)
    following = models.ManyToManyField("self", symmetrical=False, related_name="followers", null=True, blank=True)
    followers_count = models.BigIntegerField(default=0)
    following_count = models.BigIntegerField(default=0)
    posts_count = models.BigIntegerField(default=0, null=True)
    password = models.CharField(max_length=100)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def get_full_name(self):
        return (f"{self.first_name} {self.last_name}")
    
    def get_short_name(self):
        return (f"{self.first_name}")

# Post, reply, and quote will have similar fields therefore create an abstract model    
class PostReplyQuoteTemplate(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, default=uuid.uuid4)
    text_content = models.TextField()
    media_1_url  = models.FileField(upload_to="post/", null=True, blank=True)
    media_2_url = models.FileField(upload_to="post/", null=True, blank=True)
    media_3_url = models.FileField(upload_to="post/", null=True, blank=True)
    media_4_url = models.FileField(upload_to="post/", null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    like_count = models.IntegerField(default=0)  # Change this to likes count
    replies_count = models.IntegerField(default=0)
    reposts_count = models.IntegerField(default=0)
    content_type = models.CharField(max_length=10, null=True, blank=False)

    class Meta:
        abstract = True
        
# Create the post method to store all posts and all about a post
class Post(PostReplyQuoteTemplate):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posted_content")   
    
# Create a reply model
    # This model must belong to a user and to a post
    # Users can reply, quote, repost and like a reply
    # Owner should be able to reply, quote, repost, and like their own replies
class Reply(PostReplyQuoteTemplate):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="replies")
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True, blank=True, related_name="replies")
    reply = models.ForeignKey("self", on_delete=models.SET_NULL, null=True, blank=True, related_name="replies")
    quote = models.ForeignKey("Quote", on_delete=models.SET_NULL, null=True, blank=True, related_name="replies")    

# Create a quote model
    # This models should have same characteristics as the reply model
class Quote(PostReplyQuoteTemplate):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quoted_contents")
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True, blank=True, related_name="quotes")
    reply = models.ForeignKey(Reply, on_delete=models.SET_NULL, null=True, blank=True, related_name="quotes")
    quote = models.ForeignKey("self", on_delete=models.SET_NULL, null=True, blank=True, related_name="quotes")
    
# Create a repost model
class Repost(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, unique=True, default=uuid.uuid4)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reposts")
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True, blank=True, related_name="reposts")
    reply = models.ForeignKey(Reply, on_delete=models.SET_NULL, null=True, blank=True, related_name="reposts")
    quote = models.ForeignKey(Quote, on_delete=models.SET_NULL, null=True, blank=True, related_name="reposts")
    date = models.DateTimeField(auto_now_add=True)

# Create a like model
class Like(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, default=uuid.uuid4)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="likes")
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True, blank=True, related_name="likes")
    reply = models.ForeignKey(Reply, on_delete=models.SET_NULL, null=True, blank=True, related_name="likes")
    quote = models.ForeignKey(Quote, on_delete= models.SET_NULL, null=True, blank=True, related_name="likes")
    date = models.DateTimeField(auto_now_add=True)

# Create a messages model
class Message(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, editable=False, default=uuid.uuid4)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="owner_messages")
    text_content = models.TextField()
    media_content_url = models.FileField(upload_to="messages/", null=True, blank=True)
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name="recipient_messages")
    typing = models.BooleanField()
    received = models.BooleanField()
    read = models.BooleanField()
    time = models.DateTimeField(auto_now_add=True)