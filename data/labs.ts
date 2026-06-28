import type { CorrectedLabData, PracticeLabData } from '@/types';

export const correctedLab: CorrectedLabData = {
  title: 'Containerize a Node.js Application',
  objective: 'Build a Docker image for a simple Node.js app, run it as a container, and learn to manage its lifecycle.',
  steps: [
    {
      title: 'Project Structure',
      description: 'Create the following directory and file structure for your Node.js Docker lab:',
      code: `docker-node-lab/
├── Dockerfile
├── package.json
├── server.js
└── .dockerignore`,
      codeLanguage: 'text',
    },
    {
      title: 'Create server.js',
      description: 'Create a simple Express server that responds with a JSON message on port 3000.',
      code: `const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Dockerized Node.js!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
      codeLanguage: 'javascript',
      expectedResult: 'Visiting http://localhost:3000 returns {"message":"Hello from Dockerized Node.js!"}',
    },
    {
      title: 'Create package.json',
      description: 'Define the project dependencies. Express is the only dependency needed.',
      code: `{
  "name": "docker-node-lab",
  "version": "1.0.0",
  "description": "A simple Node.js app for Docker lab",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}`,
      codeLanguage: 'json',
    },
    {
      title: 'Create Dockerfile',
      description: 'Write a multi-stage Dockerfile that installs dependencies, copies source code, and runs the app.',
      code: `FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`,
      codeLanguage: 'dockerfile',
    },
    {
      title: 'Create .dockerignore',
      description: 'Exclude unnecessary files from the Docker build context to keep the image small.',
      code: `node_modules
npm-debug.log
.git
.gitignore
README.md`,
      codeLanguage: 'text',
    },
    {
      title: 'Build the Image',
      description: 'Build your Docker image using the Dockerfile. The -t flag tags the image with a name.',
      code: 'docker build -t docker-node-lab .',
      codeLanguage: 'bash',
      expectedResult: 'The image builds successfully. Run "docker images" to see it listed.',
    },
    {
      title: 'Run the Container',
      description: 'Start a container from the image in detached mode, mapping host port 3000 to container port 3000.',
      code: 'docker run -d -p 3000:3000 --name node-lab docker-node-lab',
      codeLanguage: 'bash',
      expectedResult: 'The container starts and runs in the background. Run "docker ps" to verify.',
    },
    {
      title: 'Test the Application',
      description: 'Verify the application is running by sending a request to localhost:3000.',
      code: 'curl http://localhost:3000',
      codeLanguage: 'bash',
      expectedResult: '{"message":"Hello from Dockerized Node.js!"}',
    },
    {
      title: 'View Container Logs',
      description: 'Check the logs of the running container to see the server output.',
      code: 'docker logs node-lab',
      codeLanguage: 'bash',
      expectedResult: 'Server running on http://localhost:3000',
    },
    {
      title: 'Enter the Container',
      description: 'Open an interactive shell inside the container for debugging or inspection.',
      code: 'docker exec -it node-lab sh',
      codeLanguage: 'bash',
    },
    {
      title: 'Stop and Remove Container',
      description: 'Stop the running container gracefully, then remove it from the system.',
      code: 'docker stop node-lab\ndocker rm node-lab',
      codeLanguage: 'bash',
      expectedResult: 'Container is stopped and removed. "docker ps -a" no longer shows it.',
    },
    {
      title: 'Remove the Image',
      description: 'Clean up by removing the Docker image from your local system.',
      code: 'docker rmi docker-node-lab',
      codeLanguage: 'bash',
      expectedResult: 'Image is removed. "docker images" no longer shows docker-node-lab.',
    },
  ],
};

export const practiceLab: PracticeLabData = {
  title: 'Containerize a Node.js Application',
  objective:
    'Practice your Docker skills by containerizing a Node.js application. Complete each task without looking at the full solution.',
  tasks: [
    {
      title: 'Create project structure',
      description: 'Create a folder named "docker-node-lab" with the necessary files for a Node.js project.',
    },
    {
      title: 'Write server.js',
      description: 'Create an Express server that listens on port 3000 and returns a JSON response at the root route.',
      hint: 'Use "express" as the only dependency. Require it and create an app with app.get("/") and app.listen(3000).',
      checkpoint: 'server.js must export a server listening on port 3000.',
      expectedResult: 'Visiting http://localhost:3000 returns a JSON object.',
    },
    {
      title: 'Write package.json',
      description: 'Define the project with name "docker-node-lab", main as "server.js", and express as dependency.',
      hint: 'Use "npm init -y" then manually add express dependency, or write package.json from scratch.',
      checkpoint: 'package.json must include express@^4.18.2 as a dependency.',
    },
    {
      title: 'Write Dockerfile',
      description: 'Create a Dockerfile that uses node:20-alpine, installs dependencies, copies source, exposes port 3000, and runs the app.',
      hint: 'Use FROM, WORKDIR, COPY, RUN npm install, EXPOSE, and CMD instructions.',
      checkpoint: 'Dockerfile must use node:20-alpine base image and expose port 3000.',
    },
    {
      title: 'Create .dockerignore',
      description: 'Create a .dockerignore file to exclude node_modules and other unnecessary files from the build.',
      hint: 'At minimum, add "node_modules" to prevent local modules from being copied.',
      checkpoint: '.dockerignore must exclude node_modules from the build context.',
    },
    {
      title: 'Build the image',
      description: 'Run the docker build command to create an image tagged "docker-node-lab".',
      hint: 'docker build -t docker-node-lab .',
      checkpoint: 'Image builds successfully without errors.',
      expectedResult: '"docker images" shows docker-node-lab in the list.',
    },
    {
      title: 'Run the container',
      description: 'Start a container from the image in detached mode with port mapping.',
      hint: 'Use -d for detached mode and -p 3000:3000 for port mapping. Name the container "node-lab".',
      checkpoint: 'Container is running with port 3000 mapped.',
      expectedResult: '"docker ps" shows the running node-lab container.',
    },
    {
      title: 'Test the app',
      description: 'Verify the application responds correctly using curl or a browser.',
      hint: 'curl http://localhost:3000',
      checkpoint: 'The app returns a JSON response.',
      expectedResult: '{"message":"Hello from Dockerized Node.js!"}',
    },
    {
      title: 'Debug errors (if any)',
      description: 'If the app does not work, use Docker debugging commands to diagnose issues.',
      hint: 'Use "docker logs node-lab" and "docker exec -it node-lab sh" to inspect the container.',
      checkpoint: 'All errors resolved and the app responds correctly.',
    },
    {
      title: 'Stop and clean up',
      description: 'Stop the container, remove it, and remove the image to clean up resources.',
      hint: 'Use docker stop, docker rm, and docker rmi commands.',
      checkpoint: 'No containers or images from this lab remain on the system.',
      expectedResult: '"docker ps -a" and "docker images" show no trace of docker-node-lab.',
    },
  ],
};
