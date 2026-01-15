#!/bin/bash
echo "ApplicationStart started"

cd /home/ubuntu/app

# stop app if already running
pm2 stop todo-app || true
pm2 delete todo-app || true

# start app
pm2 start index.js --name todo-app

pm2 save

echo "ApplicationStart completed"
