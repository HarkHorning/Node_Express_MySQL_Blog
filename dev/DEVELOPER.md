# blog_mysql
Converting an existing project to MySQL and containerizing it with docker.

## Issues

## Docker commands:

<!-- docker-compose up -d --remove-orphans -->

<!-- To access on localhost -->
docker run -p 8080:8080 blog_mysql

<!-- To build -->
docker build -t blog_mysql .

<!-- To run container -->
docker container run blog_mysql    