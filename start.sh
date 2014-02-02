#!/bin/sh

python -m SimpleHTTPServer 8001 &

open http://localhost:8001/index.html
