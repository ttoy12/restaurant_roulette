# Base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /restaurant_roulette

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Set the environment variable for the port and database configuration
ENV PORT=3306 \
    DB_USER=postgres \
    DB_HOST=db \
    DB_PORT=5432 \
    DB_NAME=restapi

# Expose the port the app runs on
EXPOSE 3306

# Command to run your application
CMD ["npm", "run", "dev"]
