# 🚀 PlatformOps-Lab

A production-inspired **Cloud & DevOps engineering platform** demonstrating modern infrastructure automation, container orchestration, CI/CD pipelines, and observability practices.

PlatformOps-Lab simulates how engineering teams build, deploy, monitor, and operate cloud-native applications using industry-standard DevOps tools and workflows.

---

## 🏗️ Architecture Overview

PlatformOps-Lab follows a modern DevOps lifecycle:

```
Developer
    |
    v
GitHub Repository
    |
    v
GitHub Actions CI/CD
    |
    v
Docker Container Images
    |
    v
Kubernetes Cluster
    |
    v
Application Runtime
    |
    +----------------+
    |                |
    v                v
Prometheus       Loki
    |                |
    v                v
Grafana Observability Dashboard
```

---

# 🎯 Project Objectives

This project demonstrates practical skills in:

* Infrastructure as Code (Terraform)
* Configuration Management (Ansible)
* Containerization (Docker)
* Kubernetes Deployment & Networking
* CI/CD Automation (GitHub Actions)
* Application Packaging
* Monitoring and Logging
* Cloud-native operational practices

---

# 🧰 Technology Stack

## Infrastructure

| Tool       | Purpose                             |
| ---------- | ----------------------------------- |
| Terraform  | Infrastructure provisioning         |
| Ansible    | Configuration automation            |
| Kubernetes | Container orchestration             |
| Kustomize  | Kubernetes configuration management |

---

## Application

| Component         | Technology        |
| ----------------- | ----------------- |
| Backend API       | Node.js / Express |
| Frontend          | HTML + JavaScript |
| Reverse Proxy     | Nginx             |
| Container Runtime | Docker            |

---

## CI/CD

| Tool           | Purpose                                 |
| -------------- | --------------------------------------- |
| GitHub Actions | Automated build and validation pipeline |
| Docker         | Image creation and packaging            |

---

## Observability

| Tool       | Purpose                  |
| ---------- | ------------------------ |
| Prometheus | Metrics collection       |
| Grafana    | Visualization dashboards |
| Loki       | Centralized logging      |

---

# 📂 Repository Structure

```
PlatformOps-Lab/
│
├── ansible/
│   └── playbooks/
│       └── setup.yml
│
├── app/
│   ├── backend/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── server.js
│   │
│   ├── frontend/
│   │   ├── Dockerfile
│   │   ├── app.js
│   │   └── index.html
│   │
│   └── nginx/
│       └── default.conf
│
├── docker-compose.yml
│
├── terraform/
│   ├── main.tf
│   ├── providers.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── .terraform.lock.hcl
│
├── kubernetes/
│   ├── base/
│   │   ├── api-deployment.yaml
│   │   ├── frontend-deployment.yaml
│   │   ├── services.yaml
│   │   ├── namespace.yaml
│   │   └── kustomization.yaml
│   │
│   └── README.md
│
├── monitoring/
│   ├── prometheus/
│   │   └── prometheus.yml
│   │
│   ├── grafana/
│   │   └── datasources/
│   │       └── datasource.yml
│   │
│   └── loki/
│       └── loki-config.yml
│
├── github/
│   └── workflows/
│       └── ci.yml
│
├── scripts/
│   ├── start.ps1
│   └── stop.ps1
│
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Install:

* Docker
* Docker Compose
* Terraform
* Ansible
* Kubernetes CLI (`kubectl`)
* Kind or Minikube
* Git

Verify:

```bash
docker --version
terraform --version
kubectl version --client
ansible --version
```

---

# 🐳 Run Application Locally with Docker Compose

Start the complete application stack:

```bash
docker compose up --build
```

Services:

| Service     | Description     |
| ----------- | --------------- |
| Frontend    | User interface  |
| Backend API | Application API |
| Nginx       | Reverse proxy   |

Stop services:

```bash
docker compose down
```

---

# ☸️ Kubernetes Deployment

Create Kubernetes cluster:

```bash
kind create cluster --name platformops-lab
```

Apply namespace:

```bash
kubectl apply -f kubernetes/base/namespace.yaml
```

Deploy application:

```bash
kubectl apply -k kubernetes/base/
```

Check resources:

```bash
kubectl get pods -n platformops
```

Check services:

```bash
kubectl get services -n platformops
```

---

# 🏗️ Terraform Infrastructure

Initialize Terraform:

```bash
cd terraform

terraform init
```

Validate configuration:

```bash
terraform validate
```

Preview changes:

```bash
terraform plan
```

Apply infrastructure:

```bash
terraform apply
```

Destroy resources:

```bash
terraform destroy
```

---

# ⚙️ Ansible Automation

Run configuration automation:

```bash
ansible-playbook ansible/playbooks/setup.yml
```

---

# 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Checks out source code
2. Validates project files
3. Builds Docker images
4. Runs automated checks

Workflow:

```
Git Push
   |
   v
GitHub Actions
   |
   v
Docker Build
   |
   v
Validation
```

Pipeline configuration:

```
.github/workflows/ci.yml
```

---

# 📊 Monitoring & Observability

## Prometheus

Collects application and infrastructure metrics.

Configuration:

```
monitoring/prometheus/prometheus.yml
```

---

## Grafana

Provides dashboards for monitoring system health.

Datasource:

```
monitoring/grafana/datasources/datasource.yml
```

---

## Loki

Centralized log aggregation.

Configuration:

```
monitoring/loki/loki-config.yml
```

---

# 🔐 Security Practices Implemented

* Infrastructure managed as code
* Secrets excluded through `.gitignore`
* Containerized application delivery
* Kubernetes namespace isolation
* Version-controlled infrastructure
* Automated validation pipeline

---

# 🧪 DevOps Skills Demonstrated

✅ Linux administration
✅ Git workflow management
✅ Docker image creation
✅ Docker Compose orchestration
✅ Kubernetes deployments
✅ Terraform IaC
✅ Ansible automation
✅ CI/CD pipelines
✅ Monitoring & logging
✅ Cloud-native architecture

---

# 📈 Future Improvements

Possible production enhancements:

* Add Kubernetes Ingress controller
* Add TLS certificates with cert-manager
* Implement Terraform remote backend
* Add container vulnerability scanning
* Add Helm charts
* Add GitOps deployment with ArgoCD
* Deploy to AWS ECS/EKS
* Add automated testing pipeline

---

# 👨‍💻 Author

**Franklin Chinonso Osuji**
Cloud & DevOps Engineer

Focus areas:

* AWS Cloud Architecture
* Kubernetes
* Terraform
* Docker
* CI/CD Automation
* Infrastructure Reliability

---

⭐ If this project helped you understand modern DevOps practices, consider starring the repository.
