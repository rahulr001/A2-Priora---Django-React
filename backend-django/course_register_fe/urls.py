from django.urls import path
from .views import (CourseRegisterView, CourseMenuView,
                    UserSelectedCourseView, CourseInvoiceView)

urlpatterns = [
    path('course_menu', CourseMenuView.as_view()),
    path('register', CourseRegisterView.as_view()),
    path('selected_course/<int:passport_no>',
         UserSelectedCourseView.as_view()),
    path('selected_course/<int:passport_no>/delete',
         UserSelectedCourseView.as_view()),
    path('invoice/<int:passport_no>', CourseInvoiceView.as_view())
]
