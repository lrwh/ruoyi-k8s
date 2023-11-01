#!/bin/bash

apiModule='auth gateway system file gen job web'

# 移除label
kubectl label ns ruoyi-k8s istio-injection-

# 发布web服务，防止不同环境 rum不一致，导致链路无法关联
#sh deploy_docker.sh web

# 重启服务
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
