# Use Node.js base image
FROM node:18 

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN yarn build

# Expose port for frontend
EXPOSE 5173

# Start the frontend
CMD ["yarn", "dev"]
