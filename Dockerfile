# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci -force --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build --legacy-peer-deps

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]