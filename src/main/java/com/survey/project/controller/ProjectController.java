package com.survey.project.controller;

import com.survey.common.GridBaseResponse;
import com.survey.project.vo.ProjectVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("project")
public class ProjectController {

    /**
     * 调查列表
     * @param companyId
     * @param title 项目名称，模糊搜索
     * @param page
     * @param limit
     * @return
     */
    @RequestMapping(value = "/projectList", method = RequestMethod.POST)
    @ResponseBody
    public GridBaseResponse projectList(@RequestParam(value = "companyId", defaultValue = "0") int companyId,
                                            @RequestParam(value = "title", defaultValue = "") String title,
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

        List<ProjectVO> list = new ArrayList<>();
        ProjectVO vo = new ProjectVO();
        vo.setId(1);
        vo.setTitle("餐饮调查");
        vo.setCompanyId(145);
        vo.setCompanyName("阿里巴巴");
        vo.setCompleteNum(56);
        vo.setCreateUserId(12);
        vo.setsTime(new Date());
        vo.seteTime(new Date());
        vo.setmTime(new Date());
        vo.setcTime(new Date());
        list.add(vo);
        rs.setCount(1);
        rs.setData(list);


        return rs;
    }


}
