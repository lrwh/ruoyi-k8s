# 当前目录为K8S相关脚本

## 为 K8S环境提供了三套 APM 部署方式
- 默认，采用 ddtrace
- otel，采用 OpenTelemetry java agent 
- istio，采用 ddtrace

## 如何启动

### 执行 deploy_all.sh

该脚本主要执行三个操作
1. **copyjar.sh**：执行maven 打包操作并复制jar文件
2. **deploy_all_docker.sh**：将所有的jar发布为docker 镜像
3. **deploy_all_k8s.sh**：发布到 k8s
	