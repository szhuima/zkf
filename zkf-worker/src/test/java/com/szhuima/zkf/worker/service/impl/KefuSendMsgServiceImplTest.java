package com.szhuima.zkf.worker.service.impl;


import com.szhuima.zkf.common.model.SendMsgRequest;
import com.szhuima.zkf.worker.WorkerApplication;
import com.szhuima.zkf.worker.service.KefuSendMsgService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = WorkerApplication.class)
public class KefuSendMsgServiceImplTest {

    @Autowired
    private KefuSendMsgService kefuSendMsgService;


    @Test
    public void sendMsg() {

        SendMsgRequest request = new SendMsgRequest();
        request.setMsgId(9999L);
        request.setFrom("1111");
        request.setTo("2222");
        request.setContent("Content Message");
        request.setSendTime(System.currentTimeMillis());

        boolean b = kefuSendMsgService.sendMsg(request);
        System.out.println(b);
    }
}