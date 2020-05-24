#!/usr/bin/env bash

# Builds the code.
mkdir -p temp/1.raw
pug src --out temp/1.raw
stylus src --compress --out temp/1.raw
cp src/*.js temp/1.raw

# Bundles the files.
mkdir -p temp/2.bundle
cat temp/1.raw/index.html | inline-source --root temp/1.raw/ > temp/2.bundle/index.html

# Copies to output directory.
mkdir -p docs
cp temp/2.bundle/index.html docs/index.html

# Cleans old folder.
rm -rf temp
