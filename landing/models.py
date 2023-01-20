from django.db import models

class Subscriber(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=128)
    numbers = models.CharField(max_length=13, blank=True, null=True, default=None)



    def __str__(self):
        return  "Subriber %s %s" % (self.name,self.email)

    class Meta:
        verbose_name = 'Subsriber'
        verbose_name_plural = 'A lot of subscribers'
