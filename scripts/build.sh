#!/usr/bin/env bash

# Builds the code.
mkdir -p temp-1
pug src --out temp-1
stylus src --compress --out temp-1
cp src/*.js temp-1

# Bundles the files.
mkdir -p temp-2
cat temp-1/index.html | inline-source --compress --root temp-1 > temp-2/index.html

# Copies to output directory.
mkdir -p docs
cp temp-2/index.html docs/index.html

# Cleans old folder.
rm -rf temp-1 temp-2
