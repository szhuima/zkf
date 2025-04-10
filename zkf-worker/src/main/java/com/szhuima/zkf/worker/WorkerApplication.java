package com.szhuima.zkf.worker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 12:57
 * * @Description
 **/
@ComponentScan(value = {"com.szhuima"})
@EnableScheduling
@SpringBootApplication
public class WorkerApplication {


    public static void main(String[] args) {
        SpringApplication.run(WorkerApplication.class, args);
    }

}
