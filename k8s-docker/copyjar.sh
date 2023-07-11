#!/bin/bash

# 删除旧文件
rm -rf *.jar
cd ../
# 构建项目
mvn clean package -DskipTests
cd k8s-docker
apiModule='auth gateway system file gen job'
echo "build module [$apiModule]"
# 拷贝模块
cpModule(){
    cp ../ruoyi-$1/target/ruoyi-$1.jar .
}
for i in $apiModule;
do
    cpModule $i
done
echo "[$apiModule] copy completed."
