# 当前目录为K8S相关脚本

## 为 K8S环境提供了三套 APM 部署方式

- 默认，采用 ddtrace
- otel，采用 OpenTelemetry java agent 
- istio，采用 ddtrace

## 如何启动

### 创建 ns

> kubectl apply -f ruoyi-namespace.yaml

### 创建 cm

> kubectl apply -f configmap.yaml

注意中间件信息： MySQL 和 Redis 配置

### 执行 logfw cm

> kubectl apply -f logfw.yaml

### 启动中间件

如果已经有了 MySQL 和 Redis，可以跳过这一步

> kubectl apply -f middle

### 配置中间件

- MySQL

**创建数据库**

> create database `ry-2022`;


**导入 SQL**

SQL 文件在 `sql` 目录下

- Redis

登陆 Redis 客户端，设置密码

> config set requirepass Datakit_2023


### 替换成 otel

只需要执行`otel`目录下`restart_k8s.sh`即可

### 替换成 istio

只需要执行`istio`目录下`restart_k8s.sh`即可


## 访问

web 端口为`31000`，可以去文件`web-deployment.yaml`里面调整，通过ip和端口即可访问。


	
