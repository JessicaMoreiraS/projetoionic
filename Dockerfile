FROM node:18

# Set the working directory in the container
WORKDIR /main/aplicativo

# Expose the port on which the Ionic application is running (usually port 8100)
EXPOSE 8100

# Install the Ionic CLI and Angular CLI globally
RUN npm install -g @ionic/cli@latest @angular/cli@latest

# Install project dependencies (you can use a package-lock.json file if available)
COPY package.json package-lock.json* ./
RUN npm install

# Copy all project files to the working directory
COPY . .

# Set the working directory to the Ionic project directory
WORKDIR /main/aplicativo

# Command to start the Ionic server (with the --host 0.0.0.0 option to make it accessible from outside the container)
CMD ["ionic", "serve", "--host", "0.0.0.0"]
