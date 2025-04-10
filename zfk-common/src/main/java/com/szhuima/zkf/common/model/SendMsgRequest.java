package com.szhuima.zkf.common.model;

import lombok.Data;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 16:21
 * * @Description
 **/
@Data
public class SendMsgRequest {

    private Long msgId;

    private String msgType;

    private String content;

    private String contentType;

    private String from;

    private String to;

    private Long sendTime;


}
