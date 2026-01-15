#!/bin/bash
pm2 delete all || true
cd /home/ubuntu/app
pm2 start index.js --name real-todo
