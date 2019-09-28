from django.contrib import admin
from django.conf.urls import url
from chat.views import ChatterBotApiView, ChatterBotAppView
urlpatterns = [
    url(r'^$', ChatterBotAppView.as_view(), name='main'),
    url(r'^api/chatterbot/', ChatterBotApiView.as_view(), name='chatterbot'),
]
