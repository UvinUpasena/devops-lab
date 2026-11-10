# 1. Base image with Python pre-installed
FROM python:3.11-slim

# 2. Prevent Python from writing .pyc files & enable unbuffered logging for stdout/stderr
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 3. Set working directory inside the container
WORKDIR /app

# 4. Copy requirements and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy the rest of your project files
COPY . /app/

# 6. Expose Django's default port
EXPOSE 8000

# 7. Run database migrations and start the development server
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]