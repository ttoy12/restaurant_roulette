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

RUN npm run build

# Set the environment variable for the port
ENV PORT=3010

# Expose the port the app runs on
EXPOSE 3010

# Command to run your application
CMD ["npm","start"]
