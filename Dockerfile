# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy dependency files and install packages
COPY package*.json ./
RUN npm install

# 4. Copy all project files
COPY . .

# 5. Build the app for production
RUN npm run build

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. Start the app
CMD ["npm", "start"]
