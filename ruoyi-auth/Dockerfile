#FROM openjdk:8u292
FROM openjdk:8u322-jdk-oracle
#FROM 120.55.103.32:5000/ruoyi/openjdk:8u292
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone

#ARG JAVA_PARAMS
#ENV PARAMS=$JAVA_PARAMS
#ARG JAVA_ARG
#ENV JAVA_OPTS=$JAVA_ARG
ENV jar ruoyi-auth.jar
ENV workdir /data/app/
RUN mkdir -p ${workdir}
COPY target/${jar} ${workdir}
WORKDIR ${workdir}
ENTRYPOINT ["sh", "-ec", "exec java ${JAVA_OPTS} -jar ${jar} ${PARAMS} 2>&1 > /dev/null"]
