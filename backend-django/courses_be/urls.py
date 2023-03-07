from django.urls import path
from .views import (ListOfCourseView, AddNewCourseView, CertificateStatus,
                    ParticipantDetailsView, PaymentView, PaymentReceiptView)


urlpatterns = [
    path('course_list', ListOfCourseView.as_view()),
    path('add_course', AddNewCourseView.as_view()),
    path('certificate_list', CertificateStatus.as_view()),
    path('certificate/<int:id>/update', CertificateStatus.as_view()),
    path('payment_list', PaymentView.as_view()),
    path('payment/<int:id>/update', PaymentView.as_view()),
    path('payment_receipts', PaymentReceiptView.as_view()),
    path('payment_receipts/<int:id>/update', PaymentReceiptView.as_view()),
    path('participant_details', ParticipantDetailsView.as_view()),
    path('participant_details/<int:id>/update',
         ParticipantDetailsView.as_view()),
]
