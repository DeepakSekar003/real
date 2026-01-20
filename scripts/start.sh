#!/bin/bash
cd /home/ubuntu/app

pm2 stop all || true
pm2 delete all || true
pm2 start index.js --name node-app
pm2 save

