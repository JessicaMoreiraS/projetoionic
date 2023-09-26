# Use the official Node.js image as the base image
# FROM node:18

# Set the working directory in the container
# WORKDIR /main/aplicativo
# Expose port 3000
# EXPOSE 3000

# Copy the application files into the working directory
# COPY . /main

##################################

FROM node:18
# Set the working directory in the container\n
WORKDIR /main/aplicativo
# Expose port 3000
EXPOSE 3000
# Install the application dependencies
RUN npm install -g @ionic/cli
# Copy the application files into the working directory
COPY . /main


# Install the application dependencies
RUN npm install

# Define the entry point for the container
# CMD ["npm", "start"]
CMD ["ionic", "serve"]
