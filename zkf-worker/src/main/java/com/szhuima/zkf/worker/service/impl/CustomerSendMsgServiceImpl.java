package com.szhuima.zkf.worker.service.impl;

import com.szhuima.zim.api.proto.msg.MsgProto;
import com.szhuima.zim.client.MsgSendClient;
import com.szhuima.zkf.common.model.SendMsgRequest;
import com.szhuima.zkf.worker.service.CustomerSendMsgService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 19:44
 * * @Description
 **/
@Slf4j
@Service
public class CustomerSendMsgServiceImpl implements CustomerSendMsgService {

    MsgProto.RequestHeader header = MsgProto.RequestHeader.newBuilder()
            .setMagicNo(1024)
            .setVersion(1)
            .build();

    @Resource
    private MsgSendClient msgSendClient;

    /**
     * 发送消息
     *
     * @param sendMsgRequest
     * @return
     */
    @Override
    public boolean sendMsg(SendMsgRequest sendMsgRequest) {
        // 先写数据库

        // 发送消息
        MsgProto.RequestBody body = MsgProto.RequestBody.newBuilder()
                .setMsgId(sendMsgRequest.getMsgId())
                .setContent(sendMsgRequest.getContent())
                .setFrom(sendMsgRequest.getFrom())
                .setTo(sendMsgRequest.getTo())
                .setMsgType(MsgProto.MsgType.SINGLE)
                .setContentType(MsgProto.ContentType.TEXT)
                .setSendTime(sendMsgRequest.getSendTime())
                .build();

        MsgProto.MsgRequest msgRequest = MsgProto.MsgRequest.newBuilder()
                .setHeader(header)
                .setBody(body)
                .build();

        MsgProto.MsgResponse msgResponse = msgSendClient.sendMsgSync(msgRequest);
        MsgProto.ResponseCode code = msgResponse.getCode();
        if (code.equals(MsgProto.ResponseCode.OFFLINE)) {
            log.info("sendMsg| user is offline, send msg fail. msgId:{}", sendMsgRequest.getMsgId());
        }

        return true;
    }
}
