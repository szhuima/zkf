package com.szhuima.zkf.worker.service;

import com.szhuima.zkf.common.model.SendMsgRequest;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 19:44
 * * @Description
 **/
public interface CustomerSendMsgService {


    public boolean sendMsg(SendMsgRequest request);


}
