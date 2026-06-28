import type { CommandCategory } from '@/types';

export const commandCategories: CommandCategory[] = [
  {
    title: 'Version & Info',
    description: 'Check Docker version and system information.',
    commands: [
      {
        command: 'docker --version',
        description: 'Show the installed Docker version. The `--version` flag prints only the version number.',
        example: 'docker --version',
      },
      {
        command: 'docker version',
        description: 'Display detailed version information about Docker client and server, including API versions and Go runtime.',
        example: 'docker version',
      },
      {
        command: 'docker info',
        description: 'Show system-wide information about Docker installation: containers, images, storage driver, CPUs, memory, and more.',
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
        description: 'List all Docker images stored locally. Shows REPOSITORY, TAG, IMAGE ID, CREATED, and SIZE columns.',
        example: 'docker images',
      },
      {
        command: 'docker pull nginx',
        description: 'Download an image from Docker Hub. Without a tag, pulls the `latest` tag by default. Use `docker pull node:20-alpine` for a specific tag.',
        example: 'docker pull node:20-alpine',
      },
      {
        command: 'docker rmi image_name',
        description: 'Remove one or more Docker images by name or ID. The `rmi` stands for "remove image". Add `-f` to force removal.',
        example: 'docker rmi nginx',
        warning: 'Make sure no containers are using the image before removing it.',
      },
      {
        command: 'docker build -t my-app .',
        description: 'Build a Docker image from a Dockerfile. The `-t` flag tags the image with a name. The `.` specifies the build context (current directory).',
        example: 'docker build -t my-node-app .',
      },
      {
        command: 'docker tag source target',
        description: 'Create a tag (alias) for a Docker image. Useful for versioning before pushing to a registry. Format: `docker tag <source> <target>:<tag>`.',
        example: 'docker tag my-app myrepo/my-app:v1',
      },
      {
        command: 'docker push username/image',
        description: 'Upload a Docker image to a remote registry like Docker Hub. Must be logged in via `docker login` first. Tag the image with the registry username before pushing.',
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
        description: 'List all currently running containers. Shows CONTAINER ID, IMAGE, COMMAND, CREATED, STATUS, PORTS, and NAMES.',
        example: 'docker ps',
      },
      {
        command: 'docker ps -a',
        description: 'List all containers, including stopped ones. The `-a` (or `--all`) flag shows every container, not just running ones.',
        example: 'docker ps -a',
      },
      {
        command: 'docker run hello-world',
        description: 'Run a test container to verify Docker is working correctly. Downloads the `hello-world` image if not present locally, then exits.',
        example: 'docker run hello-world',
      },
      {
        command: 'docker run -d -p 8080:80 nginx',
        description: 'Run an Nginx container in detached mode (`-d`, runs in background), mapping host port 8080 to container port 80 (`-p host:container`).',
        example: 'docker run -d -p 8080:80 nginx',
      },
      {
        command: 'docker stop container_id',
        description: 'Stop a running container gracefully (sends SIGTERM, then SIGKILL after timeout). Add `--time` (or `-t`) to set a custom grace period in seconds.',
        example: 'docker stop my-container',
      },
      {
        command: 'docker start container_id',
        description: 'Start a previously stopped container. Unlike `docker run`, this restarts an existing container without creating a new one.',
        example: 'docker start my-container',
      },
      {
        command: 'docker restart container_id',
        description: 'Restart a running or stopped container. Internally runs `docker stop` then `docker start` on the container.',
        example: 'docker restart my-container',
      },
      {
        command: 'docker rm container_id',
        description: 'Remove a stopped container from the system. The `rm` stands for "remove". Add `-f` to force remove a running container.',
        example: 'docker rm my-container',
        warning: 'The container must be stopped before removal (unless using -f).',
      },
      {
        command: 'docker logs container_id',
        description: 'View the logs or stdout/stderr output of a container. Useful for debugging why a container failed or checking application output.',
        example: 'docker logs my-container',
      },
      {
        command: 'docker logs -f container_id',
        description: 'Follow log output in real-time, similar to `tail -f`. The `-f` (or `--follow`) flag streams new log lines as they appear.',
        example: 'docker logs -f my-container',
      },
      {
        command: 'docker exec -it container_id bash',
        description: 'Open an interactive shell inside a running container. The `-i` flag keeps STDIN open (interactive), `-t` allocates a pseudo-TTY for proper terminal behavior.',
        example: 'docker exec -it my-container sh',
      },
      {
        command: 'docker inspect container_id',
        description: 'Return detailed low-level information about a container or image as JSON. Includes network settings, mounts, config, and state.',
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
        description: 'List all Docker volumes on the system. Shows DRIVER, VOLUME NAME. Add `-q` for quiet mode (IDs only).',
        example: 'docker volume ls',
      },
      {
        command: 'docker volume create my-volume',
        description: 'Create a new named volume for persistent data. Volumes survive container removal and can be shared across containers.',
        example: 'docker volume create my-data',
      },
      {
        command: 'docker volume inspect my-volume',
        description: 'Display detailed information about a volume, including its mount path on the host and driver options.',
        example: 'docker volume inspect my-data',
      },
      {
        command: 'docker volume rm my-volume',
        description: 'Remove a specific volume from the system. The `rm` command only works if the volume is not in use by any container.',
        example: 'docker volume rm my-data',
        warning: 'This permanently deletes the data in the volume.',
      },
      {
        command: 'docker run -v my-volume:/app/data nginx',
        description: 'Mount a named volume to a container path. The `-v` (or `--mount`) flag binds the volume `my-volume` to the container path `/app/data`.',
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
        description: 'List all Docker networks. Shows NETWORK ID, NAME, DRIVER, and SCOPE. Default drivers: bridge, host, none.',
        example: 'docker network ls',
      },
      {
        command: 'docker network create my-network',
        description: 'Create a new custom bridge network. Use `-d` (or `--driver`) to specify the driver (default: bridge). Custom networks allow container DNS resolution.',
        example: 'docker network create app-network',
      },
      {
        command: 'docker network inspect my-network',
        description: 'Show detailed configuration of a network, including connected containers, subnet, gateway, and IPAM config.',
        example: 'docker network inspect app-network',
      },
      {
        command: 'docker network rm my-network',
        description: 'Remove a custom network. All containers must be disconnected from the network before removal.',
        example: 'docker network rm app-network',
      },
      {
        command: 'docker run --network my-network nginx',
        description: 'Run a container attached to a specific network. The `--network` flag overrides the default bridge network. Containers on the same network can communicate by container name.',
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
        description: 'Start all services defined in docker-compose.yml. Creates and starts containers, networks, and volumes as defined. Shows combined logs in the foreground.',
        example: 'docker compose up',
      },
      {
        command: 'docker compose up -d',
        description: 'Start services in detached (background) mode. The `-d` flag runs containers in the background and returns control to the terminal.',
        example: 'docker compose up -d',
      },
      {
        command: 'docker compose down',
        description: 'Stop and remove all containers, networks, and default volumes defined in the compose file. Add `-v` to also remove named volumes.',
        example: 'docker compose down',
        warning: 'This removes containers and default networks.',
      },
      {
        command: 'docker compose logs',
        description: 'View logs from all services managed by Docker Compose. Add `-f` to follow log output in real-time. Add `--tail=N` to show only the last N lines.',
        example: 'docker compose logs',
      },
      {
        command: 'docker compose ps',
        description: 'List the status of all services defined in the compose file. Shows container ID, name, command, status, and ports for each service.',
        example: 'docker compose ps',
      },
      {
        command: 'docker compose build',
        description: 'Build or rebuild images for all services defined in the compose file. Use `--no-cache` to rebuild without using the build cache.',
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
        description: 'Remove all stopped containers. Add `-f` (or `--force`) to skip the confirmation prompt. Add `--filter` to select specific containers.',
        example: 'docker container prune',
        warning: 'Removes all stopped containers permanently.',
      },
      {
        command: 'docker image prune',
        description: 'Remove unused dangling images (untagged images). Add `-a` to also remove unused images that are not referenced by any container.',
        example: 'docker image prune',
        warning: 'Removes images not referenced by any container.',
      },
      {
        command: 'docker volume prune',
        description: 'Remove all unused local volumes not mounted by any container. Add `-f` to force without confirmation.',
        example: 'docker volume prune',
        warning: 'Permanently deletes volume data.',
      },
      {
        command: 'docker network prune',
        description: 'Remove all unused networks not used by any container. Default networks (bridge, host, none) are never pruned.',
        example: 'docker network prune',
      },
      {
        command: 'docker system prune',
        description: 'Remove all unused containers, networks, and dangling images in one command. Add `--volumes` to also prune volumes.',
        example: 'docker system prune',
        warning: 'This is a broad cleanup command. Use with caution.',
      },
      {
        command: 'docker system prune -a',
        description: 'Remove all unused data: stopped containers, all unused images (not just dangling), and networks. The `-a` flag includes all unused images, not just dangling ones.',
        example: 'docker system prune -a',
        warning: 'Aggressive cleanup. Removes all unused Docker resources.',
      },
    ],
  },
];
