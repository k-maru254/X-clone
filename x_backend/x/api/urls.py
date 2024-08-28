from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (trial_view, UsersView, UserRegister, UserUpdateReadDelete, FollowersView, FollowUserView,
                     PostViewSet, RepliesViewSet, QuotesViewSet, QuotesViewSet, 
                     LikesRepostsViewSet, MessagesViewSet, api_root, UserValidEmail)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r"posts", PostViewSet, basename="post")
router.register("quotes", QuotesViewSet, basename="quote")
router.register("replies", RepliesViewSet, basename="reply")
router.register("likes", LikesRepostsViewSet, basename="like")
router.register("reposts", LikesRepostsViewSet, basename="repost")
router.register("messages", MessagesViewSet, basename="message")


urlpatterns = [
    path("", api_root, name="api-view"),
    path("trial/", trial_view, name="trial-view"),
    path("users/", UsersView.as_view(), name="user-list"),
    path("register/", UserRegister.as_view(), name="register-user"),
    path("users/<str:pk>/", UserUpdateReadDelete.as_view(), name="user-detail"),
    path("users/<str:pk>/followers/", FollowersView.as_view(), name="followers-detail"),
    path("users/<str:pk>/follow/", FollowUserView.as_view(), name="add-follower"),
    path("confirm-email/", UserValidEmail.as_view(), name="check-email"),

    # Add the simple JWT objects for athentication 
    path("login/", TokenObtainPairView.as_view(), name="login_pair_token"),
    path("login/refresh", TokenRefreshView.as_view(), name="login_refresh_token"),

    # Include the urls registered using the drf's DefaultRouter object named router
    path("", include(router.urls)),
]