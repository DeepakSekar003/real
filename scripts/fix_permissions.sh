#!/bin/bash
set -e

echo "Fixing permissions for deployment"
chown -R ubuntu:ubuntu /home/ubuntu/app
chmod -R 755 /home/ubuntu/app
