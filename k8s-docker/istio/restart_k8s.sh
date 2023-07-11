#!/bin/bash

apiModule='auth gateway file gen job web'

# 移除label
kubectl label ns ruoyi-k8s istio-injection=enabled

# 脚本都在上层目录
cd ..
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

cd istio

kubectl delete -f system-deployment-v1.yaml -n ruoyi-k8s
kubectl delete -f system-deployment-v2.yaml -n ruoyi-k8s
kubectl delete -f system-virtualService.yaml -n ruoyi-k8s

kubectl apply -f system-deployment-v1.yaml -n ruoyi-k8s
kubectl apply -f system-deployment-v2.yaml -n ruoyi-k8s
kubectl apply -f system-virtualService.yaml -n ruoyi-k8s

echo "all service restarted"
kubectl get pods  -n ruoyi-k8s
echo "kubectl get pods  -n ruoyi-k8s"

