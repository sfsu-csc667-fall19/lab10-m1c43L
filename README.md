# Lab 9

## Basic Docker
- test basic index.js
- Install docker
- Build Docker image with  with `docker build -t hello-docker .`
- View your image with `docker image ls hello-docker`
- Run with `docker run -d -p 3000:3000 hello-docker`
- View with `docker container ls`
- Stop with `docker stop <container id>`
- Push your docker image with docker push https://docs.docker.com/engine/reference/commandline/push/
- Run your image off of dockerhub `docker run -p 3000:3000 <username>/hello-docker:v1`
- Try running someone else's image

## Inspecting docker containers
- Get into your contaienr with `docker exec -it <id> sh`
- You can now navigate and run commands from inside the container
- To get out, `exit`
- To view running logs `docker logs <id>`

## Docker Swarm
- Enter swarm mode with `docker swarm init`
- Try to join a swarm with `docker swarm join --token xxx`
- Deploy stack with `docker stack deploy -c docker-compose.yml swarm-of-hellos`
- View status with `docker service ls`
- Change replicas and redeploy
- Turn off stack with `docker stack remove swarm-of-hellos`
- Leave swarm with `docker swarm leave --force`

## Run on aws
- Install docker with `sudo snap install docker`
- Run with `sudo docker run -d -p 80:3000 <username>/hello-docker:v1`

## TODO
- Install redis client
- To `index.js`, add a redis connection to the redis container
- Commit and push