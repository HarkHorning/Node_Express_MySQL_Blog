# Node Docker

# Verion of node
FROM node:alpine

# Directory
WORKDIR /BLOG_MYSQL

# package
COPY package*.json ./

# 
RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

# Docker command
CMD ["npm", "start"]