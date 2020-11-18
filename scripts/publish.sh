#!/usr/bin/env bash

lerna run build
# create tag and push commit
lerna version
# publish to GitHub Packages Registry
lerna publish --registry https://registry.npmjs.org/
# publish to NPM Registry
lerna publish --registry https://npm.pkg.github.com/

