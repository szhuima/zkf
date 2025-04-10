package com.szhuima.zkf.workbench.service;

import com.szhuima.zkf.common.model.SendMsgRequest;

/**
** @Author: szhuima
** @Date    2025/4/10 16:18
** @Description 
**/
public interface KefuSendMsgService {

    /**
     * 发送消息
     * @param sendMsgRequest
     * @return
     */
    boolean sendMsg(SendMsgRequest sendMsgRequest);

}
