#!/bin/bash
cd /home/ubuntu/app

# clean old deps
rm -rf node_modules package-lock.json

# install fresh deps
npm install
