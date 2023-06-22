# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
