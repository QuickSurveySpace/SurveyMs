package com.viewol.question.controller;

import com.viewol.common.BaseResponse;
import com.viewol.common.GridBaseResponse;
import com.viewol.question.response.QuestionResponse;
import com.viewol.question.util.JSONUtil;
import com.viewol.sys.interceptor.Repeat;
import com.viewol.sys.log.annotation.MethodLog;
import com.viewol.sys.utils.Constants;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("question")
public class QuestionController {

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



        return rs;
    }

}
