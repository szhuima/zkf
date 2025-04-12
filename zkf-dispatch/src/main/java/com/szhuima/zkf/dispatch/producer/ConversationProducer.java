package com.szhuima.zkf.dispatch.producer;

import com.alibaba.fastjson.JSON;
import com.szhuima.zkf.common.model.SendMsgRequest;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.nio.charset.StandardCharsets;

import static com.szhuima.zkf.common.Constants.DISPATCH_CONVERSATION_TOPIC;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 23:21
 * * @Description
 **/
@Slf4j
@Component
@ConditionalOnProperty(name = "worker.send-msg-type",havingValue = "mq",matchIfMissing = true)
public class ConversationProducer {

    @Resource
    private RocketMQTemplate rocketMQTemplate;


    public SendResult dispatchConversation(SendMsgRequest sendMsgRequest) throws Exception {
        String jsonString = JSON.toJSONString(sendMsgRequest);
        Message message = new Message(DISPATCH_CONVERSATION_TOPIC, jsonString.getBytes(StandardCharsets.UTF_8));
        return rocketMQTemplate.getProducer().send(message);
    }


}
