# Use an official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ../Client/package.json ./
RUN npm install

# Copy the rest of the application
COPY . ./Client ./

# Build your app (optional, if using React/Vue etc.)
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
