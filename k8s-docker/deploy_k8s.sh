#!/bin/bash
namespace="ruoyi-k8s"
project_name=$1
yaml_file=$project_name"-deployment.yaml"
kubectl delete -f $yaml_file -n $namespace
kubectl apply -f $yaml_file -n $namespace
echo "$project_name on $namespace deploy to k8s success!"
kubectl get pods -n $namespace -o wide |grep $project_name
echo "you can use cmd 'kubectl get pods -n $namespace -o wide |grep $project_name'"
