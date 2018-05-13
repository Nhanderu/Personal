FROM node:latest

# Prepares the work directory.
ARG WORKDIR=/opt/app
WORKDIR ${WORKDIR}

# Installs dependencies.
RUN npm i -g pug-cli
RUN npm i -g stylus
RUN npm i -g inline-source-cli

# Prepares the source.
RUN mkdir -p src
ADD ./src src

# Builds the code.
RUN mkdir -p build/1.raw
RUN pug src --out build/1.raw
RUN stylus src --compress --out build/1.raw
RUN cp src/*.js build/1.raw

# Bundles the files.
RUN mkdir -p build/2.bundle
RUN cat build/1.raw/index.html | \
    inline-source --root build/1.raw/ > \
    build/2.bundle/index.html

# Copies to root directory.
RUN cp build/2.bundle/index.html build/index.html
