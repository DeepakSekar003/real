#!/bin/bash
cd /home/ubuntu/app
pm2 stop all || true
pm2 delete all || true
pm2 start index.js --name Deepak-Application
pm2 save




