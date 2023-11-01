#!/bin/bash
docker_version="v1"
docker_repo="registry.cn-shenzhen.aliyuncs.com/lr_715377484/"
repo_prefix="ruoyi_"
project_name=web
repo_subfix="_k8s"
# dockerfile 模板文件
docker_file_temp="Dockerfile_"$project_name
project_repo=$docker_repo$repo_prefix$project_name$repo_subfix:$docker_version
# 构建新镜像
echo "docker build -t $project_repo -f $docker_file_temp ."
docker build -t $project_repo -f $docker_file_temp .
echo "deploy to docker success : $project_name构建成功"
