var webName = getWebName();

layui.config({
    base: webName + '/js/modules/',
    version: 2018011001
});

var requireModules = [
    'element',
    'form',
    'layer',
    'request',
    'form-util',
    'question-new-api',
    'btns',
    'authority',
    'toast'

];

registeModule(window, requireModules, {
    'good-api': 'api/good-api'
});

layui.use(requireModules, function (
    element,
    form,
    layer,
    request,
    formUtil,
    questionNewApi,
    tableUtil,
    btns,
    authority,
    toast
) {

    var $ = layui.jquery;
    var toast = layui.toast;

    var per = 3 / 5;
    $("#progressbar").progressbar({
        value: Math.floor(per * 100)
    });

    // $('input').iCheck({checkboxClass: 'icheckbox_square-aero', radioClass: 'iradio_square-aero'});
    $("#btnSubmit").on('click', function () {
        alert("提交问卷,待开发......");
    })

    request.request(questionNewApi.getUrl('getQuestion'), {
        id: 1324
    }, function(result) {
        if(result.status == true) {
            //问卷JSON数据
            var survey = JSON.parse(result.data);
            $(".survey-title").html(survey.surveyName);
            $(".survey-info").html(survey.surveyDesc);

            //题目区域Dom根节点
            var surveyErea = $(".survey-erea");

            addQuestion(surveyErea,survey);
        }
    });

    function addQuestion(surveyErea,survey){
        var questionList = survey.questionList;
        if(questionList){
            $.each(questionList, function(n,value){
                var surveyQuestionDom = $('<div class="survey-question"></div>');//单道题节点
                surveyErea.append(surveyQuestionDom);
                var quesTitleDom = $('<div class="survey-ques-title"></div>').html(value.dataRole+"、"+value.quesTitle);//题目节点
                surveyQuestionDom.append(quesTitleDom);
                addOption(surveyQuestionDom, value, value.choiceList);
            });
        }
    }

    function addOption(surveyQuestionDom, question, choiceList) {
        var surveyQuesConDom = $('<div class="survey-ques-con"></div>');
        var formGroupDom = $('<div class="form-group"></div>');

        surveyQuestionDom.append(surveyQuesConDom);
        surveyQuesConDom.append(formGroupDom);

        switch (question.quesType) {
            case 'single-type':
                $.each(choiceList, function(n,value){
                    var html='';
                    html += '  <div class="survey-ques-li radio">';
                    html += '  <label class="radio-label">';
                    html += '  <input type="radio" name="blankRadio" value="'+value.dataVal+'" aria-label="...">'+value.choiseTitle;
                    html += '  </label>';
                    html += '  </div>';
                    formGroupDom.append($(html));
                });

                break;
            case 'checkbox-type':
                $.each(choiceList, function(n,value){
                    var html='';
                    html += '  <div class="survey-ques-li checkbox">';
                    html += '  <label class="checkbox-label">';
                    html += '  <input type="checkbox"  value="'+value.dataVal+'" aria-label="...">'+value.choiseTitle;
                    html += '  </label>';
                    html += '  </div>';
                    formGroupDom.append($(html));
                });

                break;
            case 'select-type':

                var selectDivDom = $('<div class="survey-ques-li"></div>');
                var selectDom = $('<select class="form-control"></select>');

                formGroupDom.append(selectDivDom);
                selectDivDom.append(selectDom);
                $.each(choiceList, function(n,value){
                    var html='';
                    html += '  <option value="'+value.dataVal+'">'+value.choiseTitle+'</option>';
                    selectDom.append($(html));
                });

                break;
            case 'text-type':
                var html='';
                html += '  <div class="survey-ques-li">';
                html += '  <input type="text" class="form-control" placeholder="请输入">';
                html += '  </div>';
                formGroupDom.append($(html));
                break;
            case 'list-type':
                break;
            case 'line-radio':
                break;
            case 'textarea-type':
                break;
            default:
                break;
        }

        $.each(choiceList, function(n,value){
            // alert(value.choiseTitle);
        });
    }
});