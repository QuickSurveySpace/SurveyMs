package com.survey.question.controller;

import com.survey.pojo.Question;
import com.survey.service.IQuestionService;
import com.survey.common.BaseResponse;
import com.survey.common.GridBaseResponse;
import com.survey.question.response.QuestionResponse;
import com.survey.question.util.JSONUtil;
import com.survey.sys.interceptor.Repeat;
import com.survey.sys.log.annotation.MethodLog;
import com.survey.sys.utils.Constants;
import com.youguu.core.util.PageHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@RequestMapping("question")
public class QuestionController {

    @Resource
    private IQuestionService questionService;

    @RequestMapping(value = "/saveQuestion", method = RequestMethod.POST)
    @ResponseBody
    @MethodLog(module = Constants.SYS_PERMISSION, desc = "保存问卷")
    @Repeat
    public BaseResponse saveQuestion(String survey) {
        BaseResponse rs = new BaseResponse();

        JSONUtil.saveDataToFile("question", survey);
        rs.setStatus(true);
        rs.setMsg("保存问卷成功");

        return rs;
    }

    @RequestMapping(value = "/getQuestion", method = RequestMethod.GET)
    @ResponseBody
    public QuestionResponse getQuestion(int id) {

        QuestionResponse rs = new QuestionResponse();
        rs.setStatus(true);
        rs.setMsg("ok");

        String json = JSONUtil.getDatafromFile("question");
        rs.setData(json);

        return rs;
    }

    @RequestMapping(value = "/questionList", method = RequestMethod.POST)
    @ResponseBody
    public GridBaseResponse questionList(@RequestParam(value = "page", defaultValue = "1") int page,
                                     @RequestParam(value = "limit", defaultValue = "10") int limit) {

        GridBaseResponse rs = new GridBaseResponse();
        rs.setCode(0);
        rs.setMsg("ok");

        PageHolder<Question> pageHolder = questionService.pageQuestion(null, 0, page, limit);
        if(null != pageHolder && pageHolder.getList().size()>0){
            rs.setCount(pageHolder.getTotalCount());
            rs.setData(pageHolder.getList());
        }


        return rs;
    }

}
