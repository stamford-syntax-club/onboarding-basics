# Docker
Written By: Nay Min Htin@Jonathan Gyi

# What is Docker?
>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. It is similar concept as virtual machine and ideal for running applications in the cloud, on-premises or even on your own computer.

#Terms of Docker
- Containers: Containers can be thought of as lightweight, stand-alone executable software packages that include everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. Containers are isolated from each other and from the host system.

- Images: Docker uses images as the blueprint for containers. An image is a lightweight, stand-alone, and executable software package that includes everything needed to run a piece of software. You can create your own images or use images provided by others in Docker Hub, a public repository of Docker images.

- Docker Hub: A cloud-based registry service where you can link code repositories, build details, and more.

- Portability: Since applications are packaged along with their dependencies, they can be moved seamlessly across different stages of the development lifecycle and different environments (like dev, test, prod).
Microservices: Docker can be especially powerful for microservices architectures where each service can run in its own container, allowing for better scalability, isolation, and resource utilization.

- Docker Compose: A tool for defining and running multi-container Docker applications. With Compose, you define a multi-container application in a single file, then spin up your application with a single command (docker-compose up).

- Docker Swarm & Kubernetes: For orchestration of Docker containers at scale, tools like Docker Swarm (native clustering for Docker) and Kubernetes (an open-source container orchestration platform) can be used. These tools help in managing containerized applications across multiple hosts, providing basic mechanisms for deployment, maintenance, and scaling.

- Efficiency and Speed: Containers are generally more lightweight than traditional virtual machines because they share the host system's kernel, rather than needing their own operating system. This leads to faster startup times and better resource utilization.

- Isolation: Docker ensures that applications are isolated not only from each other but also from the host. This means that if an application crashes or misbehaves, it won’t affect other containers or the host.

- Development Lifecycle: Docker can align development, testing, and production environments. Developers can build locally, ship their containers to testing, and then to production without changes.
# Installation
Docker is available for any plaform whether you have window, mac or linux.
Here are the link for downloading.
https://www.docker.com/get-started/

# Docker Basic Commands
1) Builds a image from Dockerfile in current directory.
```bash
 docker build -t <image_name>
 ```
2) Runs an instance of container with port mapping and bash shell.
```bash
docker run --rm -itd -p 80:5000 <image name>
```
3) Lists all running containers on your system.
```bash
 docker ps
 ```
4) Stops all running instances of containers.
```bash
docker stop $(docker ps -q)
``` 
5) List all the local images
```bash
docker images
```
6) Remove specific image by its ID number
``` bash
docker rmi <image id>
``` 
7) Removes all stopped containers
 ```bash 
docker rm $(docker ps -aq)
``` 
8)Remove all the unused image
```bash
docker image prune
```