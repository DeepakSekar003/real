#!/bin/bash
cd /home/ubuntu/app
pm2 stop todo-app || true
pm2 delete todo-app || true
pm2 start index.js --name todo-app
pm2 save

