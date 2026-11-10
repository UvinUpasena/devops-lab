from django.shortcuts import render, redirect
from .models import Employee

def dashboard(request):

    employees = Employee.objects.all().order_by('-id')

    total_employees = Employee.objects.count()

    return render(
        request,
        'dashboard.html',
        {
            'employees': employees,
            'total_employees': total_employees
        }
    )

def add_employee(request):

    if request.method == 'POST':

        name = request.POST.get('name')
        email = request.POST.get('email')
        department = request.POST.get('department')
        salary = request.POST.get('salary')

        Employee.objects.create(
            name=name,
            email=email,
            department=department,
            salary=salary
        )

        return redirect('dashboard')

    return render(request, 'employees/employee_form.html')
# Create your views here.
