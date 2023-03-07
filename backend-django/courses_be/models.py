from django.db import models

visibility = (
    ('Hide', 'Hide'),
    ('Unhide', 'Unhide')
)
duration = (
    ('09: 00am – 05: 00pm ', '09: 00am – 05: 00pm'),
    ('09: 00am – 01: 00pm', '09: 00am – 01: 00pm')
)
day_period = (
    ('Full Day', 'Full Day'),
    ('Two Day', 'Two Day')
)


class Course(models.Model):
    course_id = models.AutoField(
        db_column='course_id', primary_key=True, blank=False, null=False)
    course_title = models.CharField(
        db_column='course_title', max_length=50, blank=False, null=False)
    course_addded_date = models.DateField(
        db_column='course_added_date', auto_now_add=True, blank=False, null=False)
    run = models.IntegerField(db_column='run',   blank=False, null=False)
    PDU = models.IntegerField(db_column='PDU', blank=False, null=False)
    CET = models.IntegerField(db_column='CET',   blank=False, null=False)
    STU = models.IntegerField(db_column='STU',   blank=False, null=False)
    duration = models.CharField(
        db_column='duration', max_length=20, choices=duration, blank=False, null=False)
    day_period = models.CharField(
        db_column='day_period', max_length=20, choices=day_period, blank=False, null=False)
    certificate_code = models.CharField(
        db_column='certificate_code', max_length=50, blank=False, null=False)
    fee = models.IntegerField(db_column='fee',
                              default="Full Day")
    visibility = models.CharField(
        db_column='visibility', max_length=10, default="Unhide", choices=visibility)

    class Meta:
        db_table = 'new_course'

  
