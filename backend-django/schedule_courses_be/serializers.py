from rest_framework import serializers
from . models import ScheduleCourse


class ScheduleCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleCourse
        fields = [
                  'select_course', 'run', 'PDU', 'certificate_email',
                  'CET', 'STU', 'start_date', 'time', 'day_period',
                  'end_date', 'max_seats', 'fee', 'confirmation_email',
                  'visibility'
                ]   
