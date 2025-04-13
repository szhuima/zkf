package com.szhuima.zkf.dispatch.service.impl;

import com.szhuima.zkf.common.model.SendMsgRequest;
import com.szhuima.zkf.dispatch.model.DispatchReq;
import com.szhuima.zkf.dispatch.model.DispatchResp;
import com.szhuima.zkf.dispatch.producer.ConversationProducer;
import com.szhuima.zkf.dispatch.service.DispatchService;
import lombok.extern.slf4j.Slf4j;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.client.producer.SendStatus;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 22:59
 * * @Description
 **/
@Slf4j
@Service
public class DispatchServiceImpl implements DispatchService {

    @Resource
    private ConversationProducer conversationProducer;


    @Override
    public DispatchResp dispatch(DispatchReq dispatchReq) {
        // 先写数据库
        boolean botAnswer = dispatchReq.isBotAnswer();
        if (botAnswer) {
            // 模拟AI接口调用
            DispatchResp dispatchResp = DispatchResp.builder().answer("AI接口返回结果").botAnswer(true).build();
            return dispatchResp;
        }
        // 转发给worker
        // 1 获取客服负载状态，从zkf-admin中获取

        // 2 根据负载状态选择客服

        // 3 发送MQ消息
        long sendTime = System.currentTimeMillis();
        SendMsgRequest msgReq = new SendMsgRequest();
        msgReq.setMsgId(dispatchReq.getMsgId());
        msgReq.setFrom(dispatchReq.getFrom());
        msgReq.setContent(dispatchReq.getContent());
        msgReq.setSendTime(sendTime);
        msgReq.setContentType(dispatchReq.getContentType());
        msgReq.setTo("1");
        try {
            SendResult sendResult = conversationProducer.dispatchConversation(msgReq);
            if (!sendResult.getSendStatus().equals(SendStatus.SEND_OK)) {
                log.error("发送MQ消息失败,msgId:{},sendStatus:{}", msgReq.getMsgId(), sendResult.getSendStatus());
                throw new RuntimeException("操作失败,错误代码:" + sendResult.getSendStatus());
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return DispatchResp.builder().botAnswer(false).build();
    }
}
