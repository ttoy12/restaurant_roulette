# Base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
# Copy package.json and package-lock.json first to leverage Docker cache
COPY ../package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Set the environment variable for the port
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "dev"]
