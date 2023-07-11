#!/bin/bash
docker_version="v1"
docker_repo="registry.cn-shenzhen.aliyuncs.com/lr_715377484/"
repo_prefix="ruoyi_"
project_name=$1
repo_subfix="_k8s"
# dockerfile 模板文件
docker_file_temp="Dockerfile_"$project_name
project_repo=$docker_repo$repo_prefix$project_name$repo_subfix:$docker_version
# 移除旧的镜像
echo "$project_repo"
echo "docker rmi $project_repo"
#sh -x docker rmi $(docker images |grep $docker_repo$repo_prefix$project_name$repo_subfix |awk '{print $$3}')
docker rmi $project_repo
# 构建新镜像
echo "docker build -t $project_repo -f $docker_file_temp ."
docker build -t $project_repo -f $docker_file_temp .
# 推送镜像
docker push $project_repo
echo "deploy to docker success : $project_name构建成功"
