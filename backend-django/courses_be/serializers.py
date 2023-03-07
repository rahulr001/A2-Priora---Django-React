from rest_framework import serializers
from . models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta :
        model = Course

        fields =['course_title', 'course_addded_date', 'run', 'PDU', 'CET', 'STU', 'duration', 'day_period', 'certificate_code', 'fee', 'visibility' ]

