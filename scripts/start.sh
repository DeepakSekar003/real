#!/bin/bash
cd /home/ubuntu/app

pm2 stop Deepak-Application || true
pm2 delete Deepak-Application || true

pm2 start index.js --name Deepak-Application
pm2 save
