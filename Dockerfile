FROM node:6
MAINTAINER Rafael Escobar <rafael@nhanderu.com>

# Creates directory.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installs dependencies.
COPY package.json /usr/src/app/
RUN npm install -S
RUN npm install -D
RUN npm install -g gulp-cli

# Bundles source.
COPY . /usr/src/app

EXPOSE 8080
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]