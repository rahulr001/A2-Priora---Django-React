from django.db import models
from courses_be.models import Course
confirmation_email = (
    ('1 day Before', '1 day Before'),
    ('2 day Before', '2 day Before'),
    ('3 day Before', '3 day Before')
)
certificate_email = (
    ('1 day After', '1 day After'),
    ('2 day After', '2 day After'),
    ('3 day After', '3 day After'),
    ('Immediate After Attendance', 'Immediate After Attendance')
)
visibility = (
    ('Hide', 'Hide'),
    ('Unhide', 'Unhide')
)

class ScheduleCourse(models.Model):
    select_course = models.ForeignKey(
    Course, models.PROTECT, db_column='select_course', blank=False, null=False)
    run = models.IntegerField(db_column='run', blank=False, null=False)
    PDU = models.IntegerField(db_column='PDU', blank=False, null=False)
    CET = models.IntegerField(db_column='CET', blank=False, null=False)
    STU = models.IntegerField(db_column='STU', blank=False, null=False)
    start_date = models.DateField(
        db_column='start_date', blank=False, null=False)
    time = models.CharField(
        db_column='time', max_length=20, blank=False, null=False)
    day_period = models.CharField(
        db_column='day_period', max_length=20, blank=False, null=False)
    end_date = models.DateField(db_column='end_date', blank=False, null=False)
    max_seats = models.IntegerField(
        db_column='max_seat', blank=False, null=False)
    fee = models.IntegerField(db_column='fee', blank=False, null=False)
    confirmation_email = models.CharField(
        db_column='confirmation_email', max_length=20, choices=confirmation_email, blank=False, null=False)
    certificate_email = models.CharField(
        db_column='certificate_email', max_length=30, choices=certificate_email, blank=False, null=False)
    visibility = models.CharField(
        db_column='visibility', max_length=10, choices=visibility, default="UnHide", blank=False, null=False)

    class Meta:
        db_table = 'schedule_course'
