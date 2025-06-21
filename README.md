# 🚀 QuickSend DevOps Deployment

This project demonstrates the complete process of Dockerizing and deploying the **QuickSend** web application on an **AWS EC2** instance using **Docker**.

---

## 📁 Project Overview

- 🔧 Built a production-ready container for a Next.js app using Docker
- ☁️ Deployed it on a free-tier AWS EC2 Ubuntu instance
- 🌐 Hosted the app and made it accessible via public IP
- ✅ Documented each step, with screenshots

---

## ⚙️ Tech Stack

- AWS EC2 (Ubuntu 22.04)
- Docker
- Node.js / Next.js
- Git + GitHub

---

## 🐳 Local Docker Setup

### 🔹 Build Docker Image

```bash
docker build -t quicksend .

🔹 Run the Container
docker run -p 3000:3000 quicksend

🔹 Access the App
Open your browser and go to:
http://localhost:3000

☁️ EC2 Deployment (AWS)
🔹 Step 1: Launch EC2 Instance
OS: Ubuntu 22.04 LTS
Instance Type: t2.micro (Free Tier)
Key Pair: quick-key.pem
Open ports in Security Group:
22 (SSH) – My IP
3000 (Custom TCP) – Anywhere (0.0.0.0/0)

🔹 Step 2: Connect via SSH
ssh -i "quicksend-key.pem" ubuntu@<your-ec2-public-ip>

🔹 Step 3: Install Docker
sudo apt update
sudo apt install -y docker.io
sudo usermod -aG docker ubuntu
newgrp docker
docker --version

🔹 Step 4: Clone the GitHub Repo
git clone https://github.com/nihalshetty1/devops-assignment.git
cd devops-assignment

🔹 Step 5: Build & Run the App
docker build -t quicksend .
docker run -d -p 3000:3000 quicksend

🔹Step 6: Access the App via Public IP
Open in your browser:
http://<your-ec2-public-ip>:3000
✅ App should be visible live on the web!

📸 Screenshots
All screenshots are available in the shared Google Drive folder:
👉 https://drive.google.com/drive/folders/18IXz405KrANAwjQrxWnRCEUn_zPRd0lt?usp=sharing
Contents:
Docker build & run (locally)
App running at localhost:3000
EC2 instance dashboard
SSH session
Docker run & docker ps on EC2
Live app at EC2 IP in browser

🔐 Notes
Backup .pem files securely; you cannot SSH without them.
Use docker ps to view running containers.
Stop app: docker stop <container_id>

✅ Author
Nihal Shetty
B.Tech (CSE) | DevOps & Cloud Enthusiast
