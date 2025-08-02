# Use Node.js as base image
FROM node:20


# Set working directory
WORKDIR /app


# Copy package.json and package-lock.json (if exists)
COPY package.json ./


# Install dependencies
RUN npm install


# Copy the rest of the application
COPY . .

# Expose the backend port
EXPOSE 8000

# Start the server
CMD ["npm", "run", "dev"]