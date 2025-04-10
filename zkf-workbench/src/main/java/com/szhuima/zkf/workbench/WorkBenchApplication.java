package com.szhuima.zkf.workbench;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 12:57
 * * @Description
 **/
@EnableScheduling
@SpringBootApplication
public class WorkBenchApplication {


    public static void main(String[] args) {
        SpringApplication.run(WorkBenchApplication.class, args);
    }

}
