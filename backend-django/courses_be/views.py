from django.shortcuts import render
from rest_framework.response import Response
from .serializers import CourseSerializer

from course_register_fe.models import CourseRegister
from course_register_fe.serializers import CourseRegisterSerializer
from .models import Course
from payment.models import Payment
from rest_framework.views import APIView


class ListOfCourseView(APIView):
    serializer_class = CourseSerializer

    def get(self, request, *args, **kwargs):

        datas = CourseRegister.objects.all()
        data = [{
                "date": i.selected_course.course_addded_date,
                "course_title": i.selected_course.course_title,
                "total_no_of_participants": "",
                "run": i.selected_course.run,
                "scheduled_status": "",
                "view_status": i.selected_course.visibility,
                }
                for i in datas]
        return Response(data)


class AddNewCourseView(APIView):
    serializer_class = CourseSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = CourseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Course is successfully registered.", "data": serializer.data})


class CertificateStatus(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, *args, **kwargs):

        datas = CourseRegister.objects.all()
        data = [{
                "course_title": i.selected_course.course_title,
                "run": i.selected_course.run,
                "date": i.selected_course.course_addded_date,
                "reg_date": "",
                "name": i.applicant_name,
                "FIN_no": i.FIN_NRIC_Passport_no,
                "contact_no": i.contact_no,
                "email": i.email,
                "payment_method": i.payment.payment_mode,
                "cert_status": i.payment.payment_status,
                }
                for i in datas]
        return Response(data)

    def put(self, request, id, *args, **kwargs):
        data = request.data
        UpdateCourse = CourseRegister.objects.get(register_id=id)
        serializer = CourseRegisterSerializer(instance=UpdateCourse, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Course is Successfully Updated", "data": serializer.data})


class PaymentView(APIView):
    serializer_class = CourseSerializer

    def get(self, request, *args, **kwargs):

        datas = CourseRegister.objects.all()
        data = [{
                "date": i.selected_course.course_addded_date,
                "course": i.selected_course.course_title,
                "name": i.applicant_name,
                "FIN_no": i.FIN_NRIC_Passport_no,
                "email": i.email,
                "payment_method": i.payment.payment_mode,
                "pay_status": i.payment.payment_status,
                "sent_status": i.payment.payment_status,
                }
                for i in datas]
        return Response(data)

    def put(self, request, id, *args, **kwargs):
        data = request.data
        UpdatePayment = CourseRegister.objects.get(register_id=id)
        serializer = CourseRegisterSerializer(
            instance=UpdatePayment, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Payment is Successfully Updated", "data": serializer.data})


class PaymentReceiptView(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, *args, **kwargs):

        datas = CourseRegister.objects.all()
        data = [{
                "course_title": i.selected_course.course_title,
                "run": i.selected_course.run,
                "date": i.selected_course.course_addded_date,
                "reg_date": "",
                "name": i.applicant_name,
                "FIN_no": i.FIN_NRIC_Passport_no,
                "contact_no": i.contact_no,
                "email": i.email,
                "payment_mode": i.payment.payment_mode,
                "status": i.payment.payment_status,
                "invoice": i.payment.payment_receipt,
                "receipt": i.payment.payment_receipt,
                }
                for i in datas]
        return Response(data)

    def put(self, request, id, *args, **kwargs):
        data = request.data
        UpdateInvoice = CourseRegister.objects.get(register_id=id)
        serializer = CourseRegisterSerializer(
            instance=UpdateInvoice, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Receipt is Successfully Updated", "data": serializer.data})


class ParticipantDetailsView(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, *args, **kwargs):

        datas = CourseRegister.objects.all()
        data = [{
                "course_title": i.selected_course.course_title,
                "run": i.selected_course.run,
                "date": i.selected_course.course_addded_date,
                "reg_date": "",
                "name": i.applicant_name,
                "FIN_no": i.FIN_NRIC_Passport_no,
                "contact_no": i.contact_no,
                "email": i.email,
                "payment_method": i.payment.payment_mode,
                "payment_status": i.payment.payment_status,
                "certificate": i.selected_course.certificate_code,
                }
                for i in datas]
        return Response(data)

    def put(self, request, id, *args, **kwargs):
        data = request.data
        ParticipantDetails = CourseRegister.objects.get(register_id=id)
        serializer = CourseRegisterSerializer(
            instance=ParticipantDetails, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Participant Details are Successfully Updated", "data": serializer.data})
