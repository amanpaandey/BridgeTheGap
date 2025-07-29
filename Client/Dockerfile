
# Use Node.js as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ../Client/package*.json ./
RUN npm install

# Copy the rest of the client files
COPY ../Client ./

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "dev"]