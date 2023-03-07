from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ScheduleCourseSerializer
from .models import ScheduleCourse
from rest_framework.views import APIView


# Create your views here.

class ScheduleCourseView(APIView):
    serializer_class = ScheduleCourseSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = ScheduleCourseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Course is successfully registered.", "data": serializer.data})

    def get(self, request, *args, **kwargs):
       
        datas = ScheduleCourse.objects.all()
        data = [{
                "date": i.start_date,
                "course_title": i.select_course.course_title,
                "seats": i.max_seats,
                "booked": "",
                }
                for i in datas]
        return Response(data)



   
