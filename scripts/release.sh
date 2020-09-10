#!/usr/bin/env bash

set -e

rm -rf ./node_modules ./lib ./dist
yarn

git checkout .

git add .

git commit -m "Publish new API docs (automated commit)"

git push

git push --tags

yarn run build

npm publish

