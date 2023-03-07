from django.shortcuts import render
from rest_framework.response import Response
from .serializers import CourseRegisterSerializer
from .models import CourseRegister
from courses_be.models import Course
from rest_framework.views import APIView


class CourseMenuView(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, *args, **kwargs):
        datas = Course.objects.all()
        data = [{
                "course_name": i.course_title,
                "date": i.course_addded_date,
                "time": i.duration,
                "run": i.run,
                "PDU": i.PDU,
                "CET": i.CET,
                "STU": i.STU,
                "fee": i.fee,
                }
                for i in datas]
        return Response(data)


class CourseRegisterView(APIView):
    serializer_class = CourseRegisterSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = CourseRegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Course is successfully registered.", "data": serializer.data})


class UserSelectedCourseView(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, passport_no=None, *args, **kwargs):
        
        datas = CourseRegister.objects.filter(
            FIN_NRIC_Passport_no=passport_no)
        data = [{
                "name": i.applicant_name,
                "FIN_NRIC_Passport_no": i.FIN_NRIC_Passport_no,
                "selected_course": i.selected_course.course_title,
                }
                for i in datas]
        return Response(data)

    def delete(self, request,  passport_no=None, *args, **kwargs):
        OrderData = CourseRegister.objects.filter(
            FIN_NRIC_Passport_no=passport_no)
        OrderData.delete()
        return Response({"Response": "Registered course is Successfully Deleted"})


class CourseInvoiceView(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request,  passport_no=None, *args, **kwargs):
      
        datas = CourseRegister.objects.filter(
            FIN_NRIC_Passport_no=passport_no)
        data = [{
                "course_title": i.selected_course.course_title,
                "fee": i.selected_course.fee,
                "payment_mode": i.payment.payment_mode,
                }
                for i in datas]
        return Response(data)
