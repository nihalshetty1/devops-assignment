#  QuickSend DevOps Deployment 

###  Objective
To containerize the `QuickSend` web application using Docker and deploy it on a public-facing AWS EC2 instance, enabling easy access and scalable hosting with minimal setup.

---

##  Project Overview

-  Built a production-ready container for a Next.js app using Docker  
-  Deployed it on a free-tier AWS EC2 Ubuntu instance  
-  Hosted the app and made it accessible via public IP  
-  Documented each step with screenshots

---

##  Tech Stack

- **Next.js** for frontend app
- **Docker** for containerization
- **AWS EC2** for cloud deployment
- **GitHub** for source control

---

## Local Docker Setup

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

##  EC2 Deployment (AWS)

### 🔹 Step 1: Launch EC2 Instance

- OS: Ubuntu 22.04 LTS  
- Instance Type: `t2.micro` (Free Tier)  
- Key Pair: `quick-key.pem`  
- Inbound Rules:
  - SSH (22) — My IP  
  - Custom TCP (3000) — 0.0.0.0/0 (Anywhere)

### 🔹 Step 2: Connect via SSH
```bash
ssh -i "quick-key.pem" ubuntu@<your-ec2-public-ip>
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

 The QuickSend app should now be live and accessible online.

---

## Screenshots

###  Screenshot Contents

---

####  Docker Build & Run (Local Machine)

- `docker build -t quicksend .`
  
  ![Docker Build - Local](https://github.com/user-attachments/assets/e97eb6a4-fada-47ce-a794-d04b30fcf6a1)

- `docker run -p 3000:3000 quicksend`
  
  ![Docker Run - Local](https://github.com/user-attachments/assets/7d2346bf-fa10-4f26-9ec4-7723a6a8c307)

- Terminal logs and confirmation
  
  ![Docker Log Output](https://github.com/user-attachments/assets/fafabd08-08f7-4344-b177-b13c426cb981)

---

####  App Running at `localhost:3000` (Local)
![Localhost App View](https://github.com/user-attachments/assets/642e8310-2177-429f-84ab-87cb3f8fe027)

---

####  EC2 Instance Dashboard (AWS Console)

![EC2 Instance View](https://github.com/user-attachments/assets/1ecf305f-f9d4-47ea-bf84-b79c94071791)

---

####  SSH Terminal Session (EC2 Access)

- Initial SSH Login

  ![SSH Login](https://github.com/user-attachments/assets/e46b7e0d-7e57-48ea-8ce2-6ccda1d88c1e)

- Cloning repo, installing Docker

  ![Git Clone + Install Docker](https://github.com/user-attachments/assets/215b88d5-7460-48c8-8bb1-9cc01aed3b4b)

- Building Docker image on EC2

  ![Docker Build - EC2](https://github.com/user-attachments/assets/b157222a-863c-464e-8c04-25da41163466)

- Running the container

  ![Docker Run - EC2](https://github.com/user-attachments/assets/2d5b1235-ad6c-45c6-ba75-fcbab5100115)

---

####  `docker ps` Output on EC2

![Docker PS - EC2](https://github.com/user-attachments/assets/dbe2c478-a396-469b-b3d2-cf23cdfcff16)

---

####  App Running via EC2 Public IP

![App Live - EC2 Public IP](https://github.com/user-attachments/assets/2c32849c-5c03-4398-a3b2-643e160372c3)


---

##  Notes

- Backup your `.pem` key file — without it, SSH access is lost.
- Use `docker ps` to check running containers.
- To stop the app:  
  ```bash
  docker stop <container_id>
  ```

---

##  Author

**Nihal Shetty**  
B.Tech (CSE) | DevOps & Cloud Enthusiast

