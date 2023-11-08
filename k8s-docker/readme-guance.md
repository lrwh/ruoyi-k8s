# 观测云

> 当前文档为接入观测云相关配置

先执行 [README](readme.md)，再进行以下步骤操作


## RUM (用户访问监测)

- 应用列表，新建应用
- 填写应用名称：`ruoyi-k8s`，也可以自定义其他的名称
- 填写应用id：唯一值，建议使用随即生成，即点击**随机生成**按钮即可
- 选择应用类型，这里选择 `web`
- 右侧应用接入选择`CDN 同步载入`
- 复制好脚本，点击创建按钮。


## 调整若依前端代码

进入`dist`目录

修改 index.html ，调整以下脚本信息

```script
<script src="https://static.guance.com/browser-sdk/v3/dataflux-rum.js" type="text/javascript"></script>
<script>
  window.DATAFLUX_RUM &&
    window.DATAFLUX_RUM.init({
      applicationId: '555e81e0_785e_11ee_a254_51ea5238aba1',
      datakitOrigin: 'http://116.63.105.135:31529', // 协议（包括：//），域名（或IP地址）[和端口号]
      env: 'production',
      version: '1.0.0',
      service: 'browser',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 70,
      trackInteractions: true,
      traceType: 'ddtrace', // 非必填，默认为ddtrace，目前支持 ddtrace、zipkin、skywalking_v3、jaeger、zipkin_single_header、w3c_traceparent 6种类型
      allowedTracingOrigins: ['http://116.63.105.135:31000'],  // 非必填，允许注入trace采集器所需header头部的所有请求列表。可以是>请求的origin，也可以是是正则
    });
    window.DATAFLUX_RUM && window.DATAFLUX_RUM.startSessionReplayRecording()
</script>

```


- applicationId: 应用id，也就是创建 RUM 时的id
- datakitOrigin: rum 上报的地址，即 dk 地址
- allowedTracingOrigins: 后端接口地址，处理跨域问题

打包镜像

执行以下命令

```shell
sh deploy_web.sh
```

## 重启前端

```shell
kubectl delete -f web-deployment.yaml
kubectl apply -f web-deployment.yaml
```


