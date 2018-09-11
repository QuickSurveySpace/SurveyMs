package com.survey.project.controller;

import com.survey.common.GridBaseResponse;
import com.survey.project.vo.ProjectDetailVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("projectDetail")
public class ProjectDetailController {

    /**
     * 项目调查明细列表
     * @param companyId
     * @param regionId
     * @param netName
     * @param status
     * @param page
     * @param limit
     * @return
     */
    @RequestMapping(value = "/projectDetailList", method = RequestMethod.POST)
    @ResponseBody
    public GridBaseResponse projectDetailList(@RequestParam(value = "companyId", defaultValue = "0") int companyId,
                                            @RequestParam(value = "regionId", defaultValue = "0") int regionId,
                                            @RequestParam(value = "netName", defaultValue = "") String netName,
                                            @RequestParam(value = "status", defaultValue = "0") int status,
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

        List<ProjectDetailVO> list = new ArrayList<>();
        ProjectDetailVO vo = new ProjectDetailVO();
        vo.setId(1);
        vo.setCompanyName("阿里巴巴");
        vo.setRegionName("华北");
        vo.setNetName("海淀");
        vo.setScore(98);
        vo.setStatus(1);
        vo.setCreateTime(new Date());
        list.add(vo);
        rs.setCount(1);
        rs.setData(list);


        return rs;
    }
}
