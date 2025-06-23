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
This section demonstrates how to containerize and run the QuickSend application on your local machine using Docker.

### 🔹 Build Docker Image
```bash
docker build -t quicksend .
```
This command creates a Docker image named quicksend using the instructions defined in the Dockerfile.
By containerizing the app, it ensures environment consistency regardless of the host machine.

### 🔹 Run the Container
```bash
docker run -p 3000:3000 quicksend
```
This command launches the app inside a Docker container and maps:
- Port 3000 of your local machine (host)
- To port 3000 inside the container (where the app is listening)
This allows you to open the app on your browser via localhost.

Use -d (detached mode) to run the container in the background if needed:
```bash
docker run -d -p 3000:3000 quicksend
```

### 🔹 Access the App
Open the browser and visit:
```
http://localhost:3000
```
QuickSend UI loaded from the Docker container running locally can be viewed.
 
---

##  EC2 Deployment (AWS)
This section covers deploying the same Dockerized QuickSend app to a publicly accessible cloud server using AWS EC2.

### 🔹 Step 1: Launch EC2 Instance

- OS: Ubuntu 22.04 LTS  
- Instance Type: `t3.micro` (Free Tier)  
- Key Pair: Use `quick-key.pem` to SSH into the server
- Inbound Rules:
  - SSH (22) — Allow only your current IP
  - Custom TCP (3000) — Allow from 0.0.0.0/0 (so anyone can access the app)
  
### 🔹 Step 2: Connect via SSH
```bash
ssh -i "quick-key.pem" ubuntu@<your-ec2-public-ip>
```
This command connects you securely to the EC2 instance using the downloaded private key. All terminal commands will now be executed directly on your cloud server

### 🔹 Step 3: Install Docker
```bash
sudo apt update
sudo apt install -y docker.io
sudo usermod -aG docker ubuntu
newgrp docker
docker --version
```
-  Installs Docker and its dependencies
-  Adds the ubuntu user to the Docker group so that sudo is no longer needed
-  docker --version confirms the installation is successful

### 🔹 Step 4: Clone the GitHub Repo
```bash
git clone https://github.com/nihalshetty1/devops-assignment.git
cd devops-assignment
```
This pulls the latest source code (with Dockerfile and all configurations) from your GitHub repository onto the EC2 instance.

### 🔹 Step 5: Build & Run the App
```bash
docker build -t quicksend .
docker run -d -p 3000:3000 quicksend
```
-  Docker builds the app from the source
-  It runs in the background using port 3000
-  Now accessible from anywhere via EC2’s public IP

Use `docker ps` to confirm that the container is running.

### 🔹 Step 6: Access the App via Public IP

Open in the browser:
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

