package com.szhuima.zkf.worker.controller;

import com.szhuima.zkf.common.model.SendMsgRequest;
import com.szhuima.zkf.worker.service.KefuSendMsgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 20:11
 * * @Description
 **/
@RestController
public class KefuSendMsgController {

    @Autowired
    private KefuSendMsgService kefuSendMsgService;

    @PostMapping("/send")
    public Boolean sendMsg(@RequestBody SendMsgRequest request) {
        boolean res = kefuSendMsgService.sendMsg(request);
        return res;
    }

}
