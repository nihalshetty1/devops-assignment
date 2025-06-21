
# 🚀 QuickSend DevOps Deployment 

This project demonstrates the complete process of Dockerizing and deploying the **QuickSend** web application on an **AWS EC2** instance using **Docker**.
https://github.com/nihalshetty1/devops-assignment.git
---

## 📁 Project Overview

- 🔧 Built a production-ready container for a Next.js app using Docker  
- ☁️ Deployed it on a free-tier AWS EC2 Ubuntu instance  
- 🌐 Hosted the app and made it accessible via public IP  
- ✅ Documented each step with screenshots

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
```

### 🔹 Run the Container
```bash
docker run -p 3000:3000 quicksend
```

### 🔹 Access the App
Open your browser and visit:
```
http://localhost:3000
```

---

## ☁️ EC2 Deployment (AWS)

### 🔹 Step 1: Launch EC2 Instance

- OS: Ubuntu 22.04 LTS  
- Instance Type: `t2.micro` (Free Tier)  
- Key Pair: `quicksend-key.pem`  
- Inbound Rules:
  - SSH (22) — My IP  
  - Custom TCP (3000) — 0.0.0.0/0 (Anywhere)

### 🔹 Step 2: Connect via SSH
```bash
ssh -i "quicksend-key.pem" ubuntu@<your-ec2-public-ip>
```

### 🔹 Step 3: Install Docker
```bash
sudo apt update
sudo apt install -y docker.io
sudo usermod -aG docker ubuntu
newgrp docker
docker --version
```

### 🔹 Step 4: Clone the GitHub Repo
```bash
git clone https://github.com/nihalshetty1/devops-assignment.git
cd devops-assignment
```

### 🔹 Step 5: Build & Run the App
```bash
docker build -t quicksend .
docker run -d -p 3000:3000 quicksend
```

### 🔹 Step 6: Access the App via Public IP

Open in your browser:
```
http://<your-ec2-public-ip>:3000
```

✅ The QuickSend app should now be live and accessible online.

---

## 📸 Screenshots

Screenshots:  

### Screenshot contents:
- Docker build & run (local)
![Screenshot (6)](https://github.com/user-attachments/assets/e97eb6a4-fada-47ce-a794-d04b30fcf6a1)
![Screenshot (8)](https://github.com/user-attachments/assets/7d2346bf-fa10-4f26-9ec4-7723a6a8c307)
![Screenshot (5)](https://github.com/user-attachments/assets/fafabd08-08f7-4344-b177-b13c426cb981)

- App running at `localhost:3000`
![Screenshot (10)](https://github.com/user-attachments/assets/e00173a5-a47e-4f6a-8e18-b15740d21a65)

- EC2 instance dashboard
![Screenshot (15)](https://github.com/user-attachments/assets/d3d4bd5b-ee85-46e3-bf6e-8535930b0e8f)

- SSH terminal session
![Screenshot (16)](https://github.com/user-attachments/assets/e46b7e0d-7e57-48ea-8ce2-6ccda1d88c1e)
![Screenshot (17)](https://github.com/user-attachments/assets/215b88d5-7460-48c8-8bb1-9cc01aed3b4b)
![Screenshot (18)](https://github.com/user-attachments/assets/b157222a-863c-464e-8c04-25da41163466)
![Screenshot (19)](https://github.com/user-attachments/assets/2d5b1235-ad6c-45c6-ba75-fcbab5100115)

- `docker ps` output on EC2
![Screenshot (20)](https://github.com/user-attachments/assets/dbe2c478-a396-469b-b3d2-cf23cdfcff16)

- App live via EC2 IP
![Screenshot (21)](https://github.com/user-attachments/assets/812418ad-7be0-4311-bcb8-46c19275f197)

---

## 🔐 Notes

- Backup your `.pem` key file — without it, SSH access is lost.
- Use `docker ps` to check running containers.
- To stop the app:  
  ```bash
  docker stop <container_id>
  ```

---

## ✅ Author

**Nihal Shetty**  
B.Tech (CSE) | DevOps & Cloud Enthusiast

