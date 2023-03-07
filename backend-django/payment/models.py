from django.db import models
payment_status = (
    ('None', 'None'),
    ('Paid', 'Paid'),
    ('Not Yet', 'Not Yet'),
)
payment_receipt = (
    ('Sent', 'Sent'),
    ('Not Yet', 'Not Yet'),
)
payment_modes = (
    ('PayPal', 'PayPal'),
    ('Bank Transfer', 'Bank Transfer'),
    ('PayNow', 'PayNow'),
    ('Cash / Nets', 'Cash / Nets')
)


class Payment(models.Model):
    payment_mode = models.CharField(
        db_column='payment_mode', max_length=20, choices=payment_modes, blank=False, null=False)
    payment_status = models.CharField(
        db_column='payment_status', max_length=10, default='None', choices=payment_status, blank=False, null=False)
    payment_receipt = models.CharField(
        db_column='payment_receipt', max_length=10, default='Not Yet', choices=payment_receipt, blank=False, null=False)

    class Meta:
        db_table = 'payment'
    def __str__(self):
        return self.payment_mode