import type { CommandCategory } from '@/types';

export const commandCategories: CommandCategory[] = [
  {
    title: 'Version & Info',
    description: 'Check Docker version and system information.',
    commands: [
      {
        command: 'docker --version',
        description: 'Show the installed Docker version.',
        example: 'docker --version',
      },
      {
        command: 'docker version',
        description: 'Display detailed version information about Docker client and server.',
        example: 'docker version',
      },
      {
        command: 'docker info',
        description: 'Show system-wide information about Docker installation.',
        example: 'docker info',
      },
    ],
  },
  {
    title: 'Images',
    description: 'Manage Docker images on your local system.',
    commands: [
      {
        command: 'docker images',
        description: 'List all Docker images stored locally on your machine.',
        example: 'docker images',
      },
      {
        command: 'docker pull nginx',
        description: 'Download an image from Docker Hub without running it.',
        example: 'docker pull node:20-alpine',
      },
      {
        command: 'docker rmi image_name',
        description: 'Remove one or more Docker images from local storage.',
        example: 'docker rmi nginx',
        warning: 'Make sure no containers are using the image before removing it.',
      },
      {
        command: 'docker build -t my-app .',
        description: 'Build a Docker image from a Dockerfile in the current directory.',
        example: 'docker build -t my-node-app .',
      },
      {
        command: 'docker tag source target',
        description: 'Create a tag for a Docker image, often used for versioning.',
        example: 'docker tag my-app myrepo/my-app:v1',
      },
      {
        command: 'docker push username/image',
        description: 'Upload a Docker image to a remote registry like Docker Hub.',
        example: 'docker push username/my-app',
      },
    ],
  },
  {
    title: 'Containers',
    description: 'Create, run, and manage Docker containers.',
    commands: [
      {
        command: 'docker ps',
        description: 'List all currently running containers.',
        example: 'docker ps',
      },
      {
        command: 'docker ps -a',
        description: 'List all containers, including stopped ones.',
        example: 'docker ps -a',
      },
      {
        command: 'docker run hello-world',
        description: 'Run a test container to verify Docker is working correctly.',
        example: 'docker run hello-world',
      },
      {
        command: 'docker run -d -p 8080:80 nginx',
        description: 'Run an Nginx container in detached mode, mapping host port 8080 to container port 80.',
        example: 'docker run -d -p 8080:80 nginx',
      },
      {
        command: 'docker stop container_id',
        description: 'Stop a running container gracefully.',
        example: 'docker stop my-container',
      },
      {
        command: 'docker start container_id',
        description: 'Start a previously stopped container.',
        example: 'docker start my-container',
      },
      {
        command: 'docker restart container_id',
        description: 'Restart a running or stopped container.',
        example: 'docker restart my-container',
      },
      {
        command: 'docker rm container_id',
        description: 'Remove a stopped container from the system.',
        example: 'docker rm my-container',
        warning: 'The container must be stopped before removal.',
      },
      {
        command: 'docker logs container_id',
        description: 'View the logs or output of a container.',
        example: 'docker logs my-container',
      },
      {
        command: 'docker logs -f container_id',
        description: 'Follow log output in real-time, similar to tail -f.',
        example: 'docker logs -f my-container',
      },
      {
        command: 'docker exec -it container_id bash',
        description: 'Open an interactive shell inside a running container.',
        example: 'docker exec -it my-container sh',
      },
      {
        command: 'docker inspect container_id',
        description: 'Return detailed low-level information about a container.',
        example: 'docker inspect my-container',
      },
    ],
  },
  {
    title: 'Volumes',
    description: 'Manage persistent data storage for containers.',
    commands: [
      {
        command: 'docker volume ls',
        description: 'List all Docker volumes on the system.',
        example: 'docker volume ls',
      },
      {
        command: 'docker volume create my-volume',
        description: 'Create a new named volume for persistent data.',
        example: 'docker volume create my-data',
      },
      {
        command: 'docker volume inspect my-volume',
        description: 'Display detailed information about a volume.',
        example: 'docker volume inspect my-data',
      },
      {
        command: 'docker volume rm my-volume',
        description: 'Remove a specific volume from the system.',
        example: 'docker volume rm my-data',
        warning: 'This permanently deletes the data in the volume.',
      },
      {
        command: 'docker run -v my-volume:/app/data nginx',
        description: 'Mount a named volume to a container path.',
        example: 'docker run -v my-data:/data nginx',
      },
    ],
  },
  {
    title: 'Networks',
    description: 'Create and manage container networks.',
    commands: [
      {
        command: 'docker network ls',
        description: 'List all Docker networks available on the system.',
        example: 'docker network ls',
      },
      {
        command: 'docker network create my-network',
        description: 'Create a new custom bridge network for containers.',
        example: 'docker network create app-network',
      },
      {
        command: 'docker network inspect my-network',
        description: 'Show detailed configuration of a network.',
        example: 'docker network inspect app-network',
      },
      {
        command: 'docker network rm my-network',
        description: 'Remove a custom network from the system.',
        example: 'docker network rm app-network',
      },
      {
        command: 'docker run --network my-network nginx',
        description: 'Run a container attached to a specific network.',
        example: 'docker run --network app-network nginx',
      },
    ],
  },
  {
    title: 'Docker Compose',
    description: 'Multi-container orchestration with docker-compose.yml.',
    commands: [
      {
        command: 'docker compose up',
        description: 'Start all services defined in docker-compose.yml.',
        example: 'docker compose up',
      },
      {
        command: 'docker compose up -d',
        description: 'Start services in detached (background) mode.',
        example: 'docker compose up -d',
      },
      {
        command: 'docker compose down',
        description: 'Stop and remove all containers, networks, and volumes defined in compose file.',
        example: 'docker compose down',
        warning: 'This removes containers and default networks.',
      },
      {
        command: 'docker compose logs',
        description: 'View logs from all services managed by Docker Compose.',
        example: 'docker compose logs',
      },
      {
        command: 'docker compose ps',
        description: 'List the status of all services defined in the compose file.',
        example: 'docker compose ps',
      },
      {
        command: 'docker compose build',
        description: 'Build or rebuild images for all services defined in the compose file.',
        example: 'docker compose build',
      },
    ],
  },
  {
    title: 'Cleanup',
    description: 'Remove unused Docker resources to free disk space.',
    commands: [
      {
        command: 'docker container prune',
        description: 'Remove all stopped containers.',
        example: 'docker container prune',
        warning: 'Removes all stopped containers permanently.',
      },
      {
        command: 'docker image prune',
        description: 'Remove unused dangling images.',
        example: 'docker image prune',
        warning: 'Removes images not referenced by any container.',
      },
      {
        command: 'docker volume prune',
        description: 'Remove all unused local volumes.',
        example: 'docker volume prune',
        warning: 'Permanently deletes volume data.',
      },
      {
        command: 'docker network prune',
        description: 'Remove all unused networks.',
        example: 'docker network prune',
      },
      {
        command: 'docker system prune',
        description: 'Remove all unused containers, networks, and dangling images.',
        example: 'docker system prune',
        warning: 'This is a broad cleanup command. Use with caution.',
      },
      {
        command: 'docker system prune -a',
        description: 'Remove all unused data, including all stopped containers and all images not in use.',
        example: 'docker system prune -a',
        warning: 'Aggressive cleanup. Removes all unused Docker resources.',
      },
    ],
  },
];
