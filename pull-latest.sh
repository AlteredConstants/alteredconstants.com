#!/bin/bash
export NODE_ENV=production
export PORT=8001
git pull && npm ci --include=dev && npm run build && pm2 restart alteredconstants.com
