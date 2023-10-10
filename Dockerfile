# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose a port that the application will listen on
EXPOSE 3000

# Specify how to start the Node.js application
CMD [ "npm", "run", "dev" ]
