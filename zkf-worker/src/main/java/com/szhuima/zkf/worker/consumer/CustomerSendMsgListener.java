package com.szhuima.zkf.worker.consumer;

import com.szhuima.zkf.common.model.SendMsgRequest;
import com.szhuima.zkf.worker.service.CustomerSendMsgService;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.spring.annotation.ConsumeMode;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

import static com.szhuima.zkf.common.Constants.DISPATCH_CONVERSATION_TOPIC;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 19:57
 * * @Description
 **/
@Slf4j
@Component
@RocketMQMessageListener(consumerGroup = "ZKF-WORKER",
        topic = DISPATCH_CONVERSATION_TOPIC, consumeMode = ConsumeMode.CONCURRENTLY)
public class CustomerSendMsgListener implements RocketMQListener<SendMsgRequest> {

    @Resource
    private CustomerSendMsgService customerSendMsgService;

    @Override
    public void onMessage(SendMsgRequest message) {
        customerSendMsgService.sendMsg(message);
    }
}
