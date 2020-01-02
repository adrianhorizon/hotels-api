#!/usr/bin/env bash
docker build --rm -f "Dockerfile" -t hotels-api:latest .
docker run -p 4000:4000 hotels-api
