# Use an official Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ../Backend/package*.json ./
RUN npm install

# Copy the rest of the application
COPY . ./Backend ./

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "dev","run"]
