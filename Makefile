.PHONY: make
make: build

.PHONY: build
build:
	pug src --out .
	stylus src --out .
