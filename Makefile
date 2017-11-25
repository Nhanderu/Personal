.PHONY: make
make: build

.PHONY: build
build:
	pug src --out dist
	stylus src --out dist
