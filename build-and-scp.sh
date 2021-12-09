#!/bin/bash

function build_and_zip() {
  rm -f build.zip
  npm run build
  zip -r -X -q build.zip build
}

if [ "$1" == "" ]
then
  echo "Please use 'prod' for production or 'dev' for staging build & deploy"
  exit
fi

if [ "$1" == "prod" ]
then
  build_and_zip
  scp build.zip root@cityriza.com:/root
elif [ "$1" == "dev" ]
then
  build_and_zip
  scp build.zip root@cityriza.com:/root
else
  echo "Unknown environment '$1'"
fi
