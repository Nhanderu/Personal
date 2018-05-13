APP_NAME             = i
BUILD_CONTAINER_NAME = ${APP_NAME}-build
WORKDIR              = /opt/app

# Default command.
.PHONY: make
make: build

######################
## Building process ##
######################

# Creates the container for the building process.
.PHONY: create-build-container
create-build-container:

	# Verifies if the container already exists.
	$(eval CONTAINER_ID:=$( \
		shell docker ps \
			--quiet \
			--all \
			--filter name=$(BUILD_CONTAINER_NAME) \
	))
	
	# If it does, removes it.
	if [ $(CONTAINER_ID) ]; then \
		docker stop   $(CONTAINER_ID) && \
		docker rm     $(CONTAINER_ID) && \
		docker rmi -f $(BUILD_CONTAINER_NAME); \
	fi

	# Creates "build" container.
	docker build \
		--tag       ${BUILD_CONTAINER_NAME}:latest \
		--build-arg WORKDIR=${WORKDIR} \
		.

# Runs the `build` container and gets its binary.
.PHONY: build
build: clean create-build-container

	# Builds inside the container.
	docker run \
		--detach \
		--name   ${BUILD_CONTAINER_NAME} \
		${BUILD_CONTAINER_NAME}
	
	# Gets the final HTML file.
	docker cp \
		${BUILD_CONTAINER_NAME}:${WORKDIR}/build/index.html \
		./docs/index.html

	# Kills the container.
	docker stop ${BUILD_CONTAINER_NAME}
	docker rm   ${BUILD_CONTAINER_NAME}

############
## Others ##
############

.PHONY: clean
clean:
	rm -f docs/index.html