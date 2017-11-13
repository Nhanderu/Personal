.PHONY: make
make: build

.PHONY: build
build:
	pug ./src/index.html -o .
