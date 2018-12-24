#!/bin/bash
export CHOKIDAR_USEPOLLING=1
gatsby develop --host $(ifconfig | awk '/inet 192\.168\.[0-9]+\.[0-9]+/{print $2}') --port 8000