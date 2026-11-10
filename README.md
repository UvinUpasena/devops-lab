1. ceate a web front end using python
2.create a back end using python
3. create the db using mysql
here need to show the DB data in front end/web browser 

forlder stucture 

employee-management/
│
├── config/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── employees/
│   ├── migrations/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── templates/
│   ├── base.html
│   ├── dashboard.html
│   └── employees/
│       ├── employee_list.html
│       └── employee_form.html
│
├── static/
│   └── css/
│       └── style.css
│
├── manage.py
├── requirements.txt
└── .env

DevOps
devops-lab/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions pipeline (Lint, Build, Test)
├── docker/
│   ├── Dockerfile             # Multi-stage Django container build
│   └── docker-compose.yml     # Local orchestration (App + Database + Prometheus)
├── terraform/
│   ├── main.tf                # AWS provider, EC2 instance, Security Groups
│   ├── variables.tf           # Environment variables
│   └── outputs.tf             # Public IP & endpoint outputs
├── app/
│   ├── manage.py
│   ├── config/                # Django settings & URL routing
│   └── employee-management/   # Core app logic
├── monitoring/
│   └── prometheus.yml         # Metric scraping configuration
├── README.md                  # Professional architecture documentation & setup guide
└── requirements.txt