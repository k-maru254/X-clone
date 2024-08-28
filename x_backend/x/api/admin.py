from django.contrib import admin
from api.models import User, Post, Repost, Reply, Like, Quote, Message

admin.site.register(User)
admin.site.register(Post)
admin.site.register(Repost)
admin.site.register(Reply)
admin.site.register(Like)
admin.site.register(Quote)
admin.site.register(Message)
