# Start with the Node.js image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy `package.json` and `package-lock.json` to the container
COPY package*.json ./

# Run `npm install` to install the dependencies listed in `package.json`
RUN npm install

# Copy the rest of the app's code into the container
COPY . .

# Build the production version of the app
RUN npm run build

# Use a lightweight static server for the frontend (React build folder)
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
