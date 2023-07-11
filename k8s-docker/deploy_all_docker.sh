#!/bin/bash
apiModule='auth gateway system file gen job web'
echo "docker build module [$apiModule]"

for i in $apiModule;
do
    sh deploy_docker.sh $i
done