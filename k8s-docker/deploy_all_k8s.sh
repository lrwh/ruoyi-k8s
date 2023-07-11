#!/bin/bash

apiModule='auth gateway system file gen job web'
restart(){
	apiService=$1
	kubectl delete -f $apiService-deployment.yaml -n ruoyi-k8s
	kubectl apply -f $apiService-deployment.yaml -n ruoyi-k8s
	echo $apiService restarted.
}
for i in $apiModule;
do
        echo $i  restarting ;
        restart $i
done
echo "all service restarted"
kubectl get pods  -n ruoyi-k8s
echo "kubectl get pods  -n ruoyi-k8s"
