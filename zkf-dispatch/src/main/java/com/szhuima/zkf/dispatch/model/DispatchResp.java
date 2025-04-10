package com.szhuima.zkf.dispatch.model;

import lombok.Builder;
import lombok.Data;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 22:54
 * * @Description
 **/
@Builder
@Data
public class DispatchResp {

    /**
     * 是否是机器人回复
     */
    private boolean botAnswer;

    /**
     * 回复内容
     */
    private String answer;

}
