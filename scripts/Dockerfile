FROM node:latest

# Prepares the work directory.
ARG WORKDIR=/opt/app
WORKDIR ${WORKDIR}

# Installs dependencies.
RUN npm i -g pug-cli
RUN npm i -g stylus
RUN npm i -g inline-source-cli

# Prepares the source.
ADD ./src src
ADD ./lib lib
ADD ./scripts/build.sh build.sh

# Builds the code.
RUN ./build.sh
