# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy your Node.js script and package.json/package-lock.json to the container
COPY task.js package*.json ./

# Install any required Node.js modules
RUN npm install

# Run your Node.js script when the container starts
CMD ["node", "task.js"]
