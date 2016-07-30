FROM node:6
MAINTAINER Rafael Escobar <rafael@nhanderu.com>

RUN adduser --disabled-password --gecos '' r && \
    adduser r sudo && \
    echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

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