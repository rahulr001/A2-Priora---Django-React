from django.db import models
from payment.models import Payment
from courses_be.models import Course

membership_type = (
    ('Self', 'Self'),
    ('Company', 'Company')
)

sponsership_type = (
    ('PE', 'PE'),
    ('RE', 'RE'),
    ('RTO', 'RTO'),
    ('WSHO', 'WSHO'),
    ('Not Applicable', 'Not Applicable')
)


class CourseRegister(models.Model):
    register_id = models.AutoField(
        db_column='register_id', primary_key=True, blank=False, null=False)
    selected_course = models.ForeignKey(
        Course, models.PROTECT, db_column='selected_course', blank=False, null=False)
    sponsorship_type = models.CharField(
        db_column='sponsorship_type', max_length=25, default='Not Applicable', choices=sponsership_type, blank=False, null=False)

    applicant_name = models.CharField(
        db_column='applicant_name', max_length=20, blank=False, null=False)
    contact_no = models.IntegerField(
        db_column='contact_no', blank=False, null=False)
    email = models.EmailField(db_column='email', blank=False, null=False)
    alternative_email = models.EmailField(
        db_column='alternative_email', blank=True)
    address = models.CharField(
        db_column='address', max_length=50, blank=False, null=False)
    postal_code = models.IntegerField(
        db_column='postal_code', blank=False, null=False)
    FIN_NRIC_Passport_no = models.IntegerField(
        db_column='FIN_NRIC_Passport_no', blank=False, null=False)
    company_name = models.CharField(
        db_column='company_name', max_length=30, blank=False, null=False)
    membership_type = models.CharField(
        db_column='membership_type', max_length=20, default='Self', choices=membership_type, blank=False, null=False)
    membership_no = models.IntegerField(
        db_column='membership_no',   blank=False, null=False)
    payment = models.ForeignKey(
        Payment, models.PROTECT, db_column='payment', blank=False, null=False)

    class Meta:
        db_table = 'course_register'
