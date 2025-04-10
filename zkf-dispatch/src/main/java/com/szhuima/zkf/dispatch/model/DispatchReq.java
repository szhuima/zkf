package com.szhuima.zkf.dispatch.model;

import com.szhuima.zkf.common.model.BizSceneType;
import com.szhuima.zkf.common.model.ContentType;
import lombok.Data;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 22:47
 * * @Description
 **/
@Data
public class DispatchReq {

    /**
     * 对话ID
     */
    private String conversationId;

    private Long msgId;

    private String content;

    private ContentType contentType;

    private String from;

    private boolean botAnswer;

    /**
     * 业务场景
     */
    private BizSceneType scene;

}
