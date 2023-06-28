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

# Tag and push the Docker image to your Docker registry
ARG REGISTRY_URL
ARG IMAGE_TAG
RUN echo "$REGISTRY_URL"
RUN echo "$IMAGE_TAG"
RUN docker tag <your_image_name>:latest $REGISTRY_URL/<your_repository_name>:$IMAGE_TAG
RUN docker push $REGISTRY_URL/diaryapp:$IMAGE_TAG
