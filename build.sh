#!/usr/bin/env bash

# Builds the code.
mkdir -p build/1.raw
pug src --out build/1.raw
stylus src --compress --out build/1.raw
cp src/*.js build/1.raw

# Bundles the files.
mkdir -p build/2.bundle
cat build/1.raw/index.html | inline-source --root build/1.raw/ > build/2.bundle/index.html

# Copies to output directory.
mkdir -p docs
cp build/2.bundle/index.html docs/index.html
