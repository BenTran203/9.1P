# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
