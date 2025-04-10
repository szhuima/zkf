package com.szhuima.zkf.dispatch.service;

import com.szhuima.zkf.dispatch.model.DispatchReq;
import com.szhuima.zkf.dispatch.model.DispatchResp;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 22:57
 * * @Description
 **/
public interface DispatchService {


    DispatchResp dispatch(DispatchReq dispatchReq);

}
