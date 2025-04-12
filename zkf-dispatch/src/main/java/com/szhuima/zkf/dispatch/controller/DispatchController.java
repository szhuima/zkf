package com.szhuima.zkf.dispatch.controller;

import com.szhuima.zkf.dispatch.model.DispatchReq;
import com.szhuima.zkf.dispatch.model.DispatchResp;
import com.szhuima.zkf.dispatch.service.DispatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * * @Author: szhuima
 * * @Date    2025/4/10 22:45
 * * @Description
 **/
@CrossOrigin
@RequestMapping("/dispatch")
@RestController
public class DispatchController {

    @Autowired
    private DispatchService dispatchService;


    @PostMapping("/conversation")
    public DispatchResp dispatch(@RequestBody DispatchReq dispatchReq) {
        return dispatchService.dispatch(dispatchReq);
    }

}
