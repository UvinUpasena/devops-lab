# Cloud-Native Employee Management System (MERN + DevOps/SRE Stack)

A production-grade, containerized **Employee Management System** built on the **MERN stack (MongoDB, Express.js, React, Node.js)**. Engineered with **Site Reliability Engineering (SRE)** and **DevOps** best practices, the platform features automated cloud provisioning via **Terraform**, multi-container orchestration using **Docker & Docker Compose**, reverse-proxying with **NGINX**, automated testing and deployment through **GitHub Actions CI/CD**, serverless **AWS Lambda** maintenance workflows, and end-to-end observability via **Prometheus, Grafana, and AWS CloudWatch**.

---

## 📋 Table of Contents
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started (Local Development)](#-getting-started-local-development)
- [Infrastructure Provisioning (Terraform)](#-infrastructure-provisioning-terraform)
- [CI/CD Pipeline (GitHub Actions)](#-cicd-pipeline-github-actions)
- [Monitoring & Observability](#-monitoring--observability)
- [Serverless Automation (AWS Lambda)](#-serverless-automation-aws-lambda)

---

## ✨ Features

### Core Application (MERN)
- **Workforce Directory:** Create, view, update, and manage employee profiles, departments, and roles.
- **Role-Based Access Control (RBAC):** Secure JWT authentication separating Admin, HR, and Employee privileges.
- **Attendance & Leave Tracking:** Real-time logging and dashboard summaries for daily attendance and leave requests.

### Cloud, DevOps & SRE Capabilities
- **Infrastructure as Code (IaC):** Automated provisioning of AWS EC2, S3, Security Groups, and IAM roles using Terraform.
- **Containerized Microservices:** Isolated Docker containers for Frontend, Backend API, MongoDB, NGINX, Prometheus, and Grafana.
- **Reverse Proxy & Load Routing:** NGINX configured to serve static React builds, route `/api` requests, and manage headers.
- **Automated CI/CD & Smoke Testing:** GitHub Actions pipeline executing unit tests, Docker image builds, SSH deployments, and `curl`-based health verification.
- **Real-Time Observability:** Custom Node.js metrics scraped by Prometheus and visualized on Grafana dashboards alongside AWS CloudWatch logs.
- **Automated Serverless Backups:** Scheduled AWS Lambda function archiving MongoDB snapshots and audit logs directly to AWS S3.

---

## 🏗️ System Architecture

```text
                        [ Client Browser ]
                                │
                                ▼ (HTTP / HTTPS)
┌───────────────────────────────────────────────────────────────────┐
│                         AWS EC2 Instance                          │
│                                                                   │
│   ┌───────────────────────────────────────────────────────────┐   │
│   │                   NGINX (Reverse Proxy)                   │   │
│   └───────────────┬───────────────────────────┬───────────────┘   │
│                   │                           │                   │
│         (Static Assets)                 (/api/* routes)           │
│                   ▼                           ▼                   │
│       ┌───────────────────────┐   ┌───────────────────────┐       │
│       │   React Frontend      │   │  Node.js / Express    │       │
│       │   (Docker Container)  │   │  (Docker Container)   │       │
│       └───────────────────────┘   └───────┬───────┬───────┘       │
│                                           │       │               │
│                             (Mongoose)    │       │ (/metrics)    │
│                                   ▼       │       ▼               │
│                       ┌───────────────────┴─┐   ┌─────────────┐   │
│                       │      MongoDB        │   │ Prometheus  │   │
│                       │ (Docker Container)  │   └──────┬──────┘   │
│                       └─────────────────────┘          │          │
│                                                        ▼          │
│                                                 ┌─────────────┐   │
│                                                 │   Grafana   │   │
│                                                 └─────────────┘   │
└───────────────────────────────────┬───────────────────────────────┘
                                    │
                   ┌────────────────┴────────────────┐
                   ▼                                 ▼
         [ AWS CloudWatch ]                 [ AWS Lambda (Cron) ]
     (Centralized Container Logs)                    │
                                                     ▼
                                              [ AWS S3 Bucket ]
                                         (Automated DB Backups)