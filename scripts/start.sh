#!/bin/bash
cd /home/ec2-user/app
pm2 stop all || true
pm2 delete all || true
pm2 start index.js --name node-app
pm2 save

