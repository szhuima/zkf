package com.szhuima.zkf.common.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    private ContentType contentType;

    private String from;

    private String to;

    private Long sendTime;


}
