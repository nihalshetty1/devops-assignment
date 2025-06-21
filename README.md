# QuickSend DevOps Deployment

## 🚀 Project Overview
Deployed the `QuickSend` web app (Next.js + Node.js) in a Docker container on an AWS EC2 instance.

---

## 📁 Project Structure
- Dockerfile for containerization
- Node-based Next.js app
- Hosted using Docker on Ubuntu EC2

---

## ⚙️ Technologies Used
- AWS EC2 (Ubuntu 22.04)
- Docker
- GitHub
- Next.js

---

## 🐳 Local Setup (Docker)
```bash
docker build -t quicksend .
docker run -p 3000:3000 quicksend
