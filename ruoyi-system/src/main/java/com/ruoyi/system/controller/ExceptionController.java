package com.ruoyi.system.controller;

import com.ruoyi.common.core.domain.system.SysDept;
import com.ruoyi.common.core.web.domain.AjaxResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Method;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @author liurui
 * @date 2022/4/11 9:28
 */
@RequestMapping("/exec")
@RestController
public class ExceptionController {
    private static final Logger logger = LoggerFactory.getLogger(ExceptionController.class);
    @GetMapping("/heapOOM")
    public AjaxResult heapOOM() {
        List<SysDept> list = new ArrayList<>();
        while (true) {
            try {
                TimeUnit.MILLISECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            list.add(new SysDept());
        }
    }

    @GetMapping("/stackOOM")
    public AjaxResult stackOOM() {
        while (true) {
            Thread thread = new Thread(() -> {
                logger.info("线程名称：{}",Thread.currentThread().getName());
                while (true) {
                    try {
                        TimeUnit.HOURS.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }

            });
            thread.start();
        }
    }

    @GetMapping("/directBufferOOM")
    public AjaxResult directBufferOOM() {
        final int _1M = 1024 * 1024 * 1;
        List<ByteBuffer> buffers = new ArrayList<>();
        int count = 1;
        while (true) {
            ByteBuffer byteBuffer = ByteBuffer.allocateDirect(_1M);
            buffers.add(byteBuffer);
            System.out.println(count++);
        }
    }

    @GetMapping("/stackOFE")
    public AjaxResult StackOFE() {
        stackOverFlowErrorMethod();
        return AjaxResult.success();
    }

    public static void stackOverFlowErrorMethod() {
        stackOverFlowErrorMethod();
    }

    @GetMapping("/metaspaceOOM")
    public AjaxResult metaspaceOOM() {
        while (true) {
            Enhancer enhancer = new Enhancer();
            enhancer.setSuperclass(SysDept.class);
            enhancer.setUseCache(false);
            enhancer.setCallback(new MethodInterceptor() {
                @Override
                public Object intercept(Object obj, Method method,
                                        Object[] args, MethodProxy proxy) throws Throwable {
                    return proxy.invokeSuper(obj, args);
                }
            });
            enhancer.create();
        }
    }
}
