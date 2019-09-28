from django.contrib import admin
from django.urls import path, include
import chat.views

urlpatterns = [
    path('', chat.views.home, name='home'),
    path('chat/', include('chat.urls')),
    path('admin/', admin.site.urls),
]
