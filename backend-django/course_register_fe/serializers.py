from rest_framework import serializers
from . models import CourseRegister

class CourseRegisterSerializer(serializers.ModelSerializer):
    class Meta :
        model = CourseRegister
        fields = [
                    'register_id', 'selected_course', 'sponsorship_type', 'applicant_name',
                    'contact_no','email', 'alternative_email', 'address','postal_code',
                    'company_name', 'membership_type', 'membership_no', 'payment', 'FIN_NRIC_Passport_no'
                ]

 