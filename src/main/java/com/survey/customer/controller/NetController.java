package com.survey.customer.controller;

import com.survey.common.GridBaseResponse;
import com.survey.customer.vo.NetVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("net")
public class NetController {

    @RequestMapping(value = "/netList", method = RequestMethod.POST)
    @ResponseBody
    public GridBaseResponse netList(@RequestParam(value = "companyId", defaultValue = "0") int companyId,
                                    @RequestParam(value = "regionId", defaultValue = "0") int regionId,
                                    @RequestParam(value = "netName", defaultValue = "") String netName,
                                    @RequestParam(value = "page", defaultValue = "1") int page,
                                    @RequestParam(value = "limit", defaultValue = "10") int limit) {

        GridBaseResponse rs = new GridBaseResponse();
        rs.setCode(0);
        rs.setMsg("ok");

//        PageHolder<Question> pageHolder = questionService.pageQueryQuestion("", page, limit);
//        if(null != pageHolder && pageHolder.getList().size()>0){
//            rs.setCount(pageHolder.getTotalCount());
//            rs.setData(pageHolder.getList());
//        }

        List<NetVO> list = new ArrayList<>();
        NetVO vo = new NetVO();
        vo.setId(12);
        vo.setName("海淀五道口");
        vo.setAddr("海淀五道口45号");
        vo.setPhone("010-66874593");
        vo.setCompanyId(145);
        vo.setCompanyName("阿里巴巴");
        vo.setRegionId(234);
        vo.setRegionName("华北");
        vo.setCreateTime(new Date());
        list.add(vo);
        rs.setCount(1);
        rs.setData(list);


        return rs;
    }

}
