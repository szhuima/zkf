package com.szhuima.zkf.workbench.consumer;

import com.szhuima.zkf.common.model.SendMsgRequest;
import com.szhuima.zkf.workbench.service.CustomerSendMsgService;
import com.szhuima.zkf.workbench.service.KefuSendMsgService;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.spring.annotation.ConsumeMode;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 19:57
 * * @Description
 **/
@Slf4j
@Component
@RocketMQMessageListener(consumerGroup = "ZKF-WORKER",
        topic = "CUSTOMER-SEND-MSG", consumeMode = ConsumeMode.CONCURRENTLY)
public class CustomerSendMsgListener implements RocketMQListener<SendMsgRequest> {

    @Resource
    private CustomerSendMsgService customerSendMsgService;

    @Override
    public void onMessage(SendMsgRequest message) {
        customerSendMsgService.sendMsg(message);
    }
}
