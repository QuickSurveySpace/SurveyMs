function selectQuestion(e) {
    var i = '<div class="topic-type-content topic-type-question after-clear">', t = parseInt(absolute_id) + 1;
    switch (absolute_id++, choice_absolute_id[t] || (choice_absolute_id[t] = 0), e) {
        case"radio":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            i += '<div class="question-title" type="6" name="radio-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N" choice-quote="0">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">单选题</div></div></div><ul class="question-choice"><li class="choice" has_other="N" choice_absolute_id=' + s + ' ><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项1 </div></div><div class="option-tips"></div></li>', choice_absolute_id[t]++, s = choice_absolute_id[t], i += '<li class="choice" has_other="N" choice_absolute_id=' + s + '><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项2 </div></div><div class="option-tips"></div></li></ul>', i += '<div class="add-area visible-hide"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li></ul></div>', i += '<div class="operate visible-hide" ><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"checkbox":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            i += '<div class="question-title" type="8" name="checkbox-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N" choice-quote="0" min="" max="" exclusive-options="">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">多选题</div></div></div><ul class="question-choice"><li class="choice" has_other="N" choice_absolute_id=' + s + '><input type="checkbox" name="checkbox"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项1 </div></div><div class="option-tips"></div></li>', choice_absolute_id[t]++, s = choice_absolute_id[t], i += '<li class="choice" has_other="N" choice_absolute_id=' + s + '><input type="checkbox" name="checkbox"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项2 </div></div><div class="option-tips"></div></li></ul>', i += '<div class="add-area visible-hide"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li></ul></div>', i += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"input":
            i += '<div class="question-title" type="1" name="input-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">单行填空题</div></div></div><ul class="question-choice"><li><input type="text" name="input" class="input-single"></li></ul>', i += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"multi-input":
            i += '<div class="question-title" type="2" name="multi-input-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">多行填空题</div></div></div><ul class="question-choice"><li class="auto-height"><textarea name="multi-input" class="multi-input"></textarea></li></ul>', i += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"radio-matrix":
            i += '<div class="question-title" type="9" name="radio-matrix-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">矩阵单选题</div></div></div><ul class="question-choice" style="float:left;width: 700px;"><li class="auto-height"><table style="border-collapse: collapse;"><tbody><tr><td>&nbsp</td><td name=radio-matrix-choice><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项1</li></div></td><td name=radio-matrix-choice><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项2</li></div></td></tr><tr><td class="radio_array_title" name="radio-matrix" ><div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行1</div></div></td><td><input type="radio"/></td><td><input type="radio"/></td></tr><tr><td class="radio_array_title" name="radio-matrix"><div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行2</div></div></td><td><input type="radio"/></td><td><input type="radio"/></td></tr></tbody></table></li></ul>', i += '<div class="add-area visible-hide" style="width: 34px; margin: 0px 0 0 46px;" choice="Y"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" style="margin-top: 14px;" onclick="edit.batchAddChoice(this)"></li></ul></div>', i += '<div class="add-area visible-hide" choice="N"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" onclick="edit.batchAddChoice(this)"></li></ul></div>', i += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"checkbox-matrix":
            i += '<div class="question-title" type="13" name="checkbox-matrix-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">矩阵多选题</div></div></div><ul class="question-choice" style="float:left;width: 700px;"><li class="auto-height"><table style="border-collapse: collapse;"><tbody><tr><td>&nbsp</td><td name=checkbox-matrix-choice><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项1</li></div></td><td name=checkbox-matrix-choice><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项2</li></div></td></tr><tr><td class="checkbox_array_title" name="checkbox-matrix" ><div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行1</div></div></td><td><input type="checkbox"/></td><td><input type="checkbox"/></td></tr><tr><td class="checkbox_array_title" name="checkbox-matrix"><div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行2</div></div></td><td><input type="checkbox"/></td><td><input type="checkbox"/></td></tr></tbody></table></li></ul>', i += '<div class="add-area visible-hide" style="width: 34px; margin: 0px 0 0 46px;" choice="Y"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" style="margin-top: 14px;" onclick="edit.batchAddChoice(this)"></li></ul></div>', i += '<div class="add-area visible-hide" choice="N"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" onclick="edit.batchAddChoice(this)"></li></ul></div>', i += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"desc":
            i = '<div class="topic-type-content topic-type-question after-clear"><div class="question-title" type="10" name="description"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="N" has_other="N"></span><div class="position-relative"><div class="qs-content qs-high-content edit-area edit-title" contenteditable="true" content-default="1">描述说明</div></div></div>', i += '<div class="operate visible-hide" style="width: 141px;"><ul><li class="drag-area" title="移动"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"page":
            i = '<div class="topic-type-content topic-page after-clear"> <div class="question-title" type="11" order="1" name="page" index="0" question-required="Y" has_other="N" title-quote="N" style="padding: 0px;height: 36px;"><span class="question-id" order="1" page="1" style="margin: 0px;"></span><div class="page-area">页码</div></div>', i += '<div class="operate visible-hide" style="width:94px;"><ul><li class="drag-area" title="移动"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"select":
            var s;
            i += '<div class="question-title" type="7" name="select-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N" choice-quote="0">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">选择列表</div></div></div><select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
            for (var o = 1; 4 > o; o++) choice_absolute_id[t]++, s = choice_absolute_id[t], i += '<option class="choice" has_other="N" choice_absolute_id=' + s + ">选项" + o + "</option>";
            i += '</select><span class="edit-select" style="  width: 60%;display: inline-block;line-height: 30px;" onclick="edit.editSelect(this)">编辑选项</span>', i += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"upload":
            i += '<div class="question-title" type="12" name="upload-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">上传图片</div></div></div><ul class="question-choice"><li>  <div class=survey-question-upload-btn> <div class=survey-question-upload-inner> <img src=/static/home/img/survey/template/upload-icon.png> <div class=survey-question-upload-inner-desc>选择图片20M以内 </div> </div> <input type=file class=survey-question-upload-file multiple> </div></li></ul>', i += '<div class="operate visible-hide" style="width: 190px;"><ul><li class="drag-area" title="移动"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"radio-img":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            i += '<div class="question-title" type="14" name="radio-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N" choice-quote="0">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">图片单选题</div></div></div>', i += '<ul class="question-choice"></ul>', i += '<div class="add-area survey-question-upload-img-wrap"><div class=survey-question-upload-img-btn> <div class=survey-question-upload-img-inner> <img src=/static/home/img/survey/template/upload-img-icon.png> <div class=survey-question-upload-img-inner-title>点击上传图片</div> <div class=survey-question-upload-img-inner-desc>最多可上传50张图片</div> </div> <input type=file class=survey-question-upload-img-file name=upload_img multiple> </div></div>', i += '<div class="operate visible-hide" ><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"checkbox-img":
            choice_absolute_id[t]++;
            var s = choice_absolute_id[t];
            i += '<div class="question-title" type="15" name="checkbox-question"><span class="question-id" order="1" page="1" index="1" absolute_id=' + t + ' question-required="Y" has_other="N" title-quote="N" choice-quote="0" min="" max="">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">图片多选题</div></div></div>', i += '<ul class="question-choice"></ul>', i += '<div class="add-area survey-question-upload-img-wrap"><div class=survey-question-upload-img-btn> <div class=survey-question-upload-img-inner> <img src=/static/home/img/survey/template/upload-img-icon.png> <div class=survey-question-upload-img-inner-title>点击上传图片</div> <div class=survey-question-upload-img-inner-desc>最多可上传50张图片</div> </div> <input type=file class=survey-question-upload-img-file name=upload_img multiple> </div></div>', i += '<div class="operate visible-hide" ><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>'
    }
    i += "</div>", $("#question-box").append(i), edit.sortQuestions(), edit.attachLayer(), edit.scrollBox(), edit.visibleHandle(), elementInit()
}

function selectEditedQuestion(e) {
    var i = e.question_content, t = i.choice, s = "";
    s += '<div class="topic-type-content topic-type-question after-clear">';
    var o;
    switch (i.absolute_id ? o = i.absolute_id : (o = parseInt(absolute_id) + 1, absolute_id++), i.choice_random = parseInt(i.choice_random ? i.choice_random : 0, 10), i.choice_fixed = parseInt(i.choice_fixed ? i.choice_fixed : 0, 10), i.type_id) {
        case"6":
            choice_absolute_id[o] = 0;
            var a;
            s += '<div class="question-title" type="6" name="radio-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" choice-quote="' + i.choice_quote + '" absolute_id=' + o + '  question-required="' + i.required + '" has_other="' + i.has_other + '" choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">' + i.content + '</div></div></div><ul class="question-choice">';
            for (var c in t) {
                var n = t[c].private ? 1 : 0;
                parseInt(i.choice_quote, 10) > 0 && !n || (t[c].required = "undefined" == typeof t[c].required ? 0 : parseInt(t[c].required, 10), t[c].choice_absolute_id ? (a = parseInt(t[c].choice_absolute_id, 10), a > parseInt(choice_absolute_id[o], 10) && (choice_absolute_id[o] = a)) : (a = parseInt(choice_absolute_id[o], 10) + 1, choice_absolute_id[o]++), s += '<li class="choice" has_other="' + t[c].is_other + '" choice_required="' + t[c].required + '" choice_absolute_id=' + a + ' ><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true">' + t[c].content + "</div></div>", "Y" === t[c].is_other && (s += '<input type="text" class="other-content"  style="width: 120px;height: 30px;vertical-align: middle;" >', 1 === parseInt(t[c].required, 10) && (s += '<span class="required-content">(必填)</span>')), s += '<div class="option-tips"></div></li>')
            }
            s += '</ul><div class="add-area visible-hide"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"14":
            choice_absolute_id[o] = 0;
            var a;
            s += '<div class="question-title" type="14" name="radio-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" choice-quote="' + i.choice_quote + '" absolute_id=' + o + '  question-required="' + i.required + '" has_other="' + i.has_other + '" choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">' + i.content + '</div></div></div><ul class="question-choice">';
            for (var c in t) {
                var n = t[c].private ? 1 : 0;
                parseInt(i.choice_quote, 10) > 0 && !n || (t[c].required = "undefined" == typeof t[c].required ? 0 : parseInt(t[c].required, 10), t[c].contentArr = t[c].content.split("#**#"), t[c].choice_absolute_id ? (a = parseInt(t[c].choice_absolute_id, 10), a > parseInt(choice_absolute_id[o], 10) && (choice_absolute_id[o] = a)) : (a = parseInt(choice_absolute_id[o], 10) + 1, choice_absolute_id[o]++), s += '<li class="choice survey-question-radio-img" has_other="' + t[c].is_other + '" choice_required="' + t[c].required + '" choice_absolute_id=' + a + ' > <div class=survey-question-radio-choice> <a class="remove-child-element survey-question-radio-img-remove" onclick="edit.removeChildElement()"></a><div class=survey-question-radio-choice-img> <img src="' + encodeURI(t[c].contentArr[1]) + '"> </div> <div class=survey-question-radio-choice-text> <input type=radio name=radio> <label class="edit-area edit-child-element" contenteditable=true>' + t[c].contentArr[0] + '</label> <div class="option-tips"></div></div> </div>', s += "</li>")
            }
            s += "</ul>", s += '<div class="add-area survey-question-upload-img-wrap"><div class=survey-question-upload-img-btn> <div class=survey-question-upload-img-inner> <img src=/static/home/img/survey/template/upload-img-icon.png> <div class=survey-question-upload-img-inner-title>点击上传图片</div> <div class=survey-question-upload-img-inner-desc>最多可上传50张图片</div> </div> <input type=file class=survey-question-upload-img-file name=upload_img multiple> </div></div>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"15":
            choice_absolute_id[o] = 0;
            var a;
            s += '<div class="question-title" type="15" name="checkbox-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" choice-quote="' + i.choice_quote + '" absolute_id=' + o + '  question-required="' + i.required + '" has_other="' + i.has_other + '" choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '" min="' + i.min + '" max="' + i.max + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">' + i.content + '</div></div></div><ul class="question-choice">';
            for (var c in t) {
                var n = t[c].private ? 1 : 0;
                parseInt(i.choice_quote, 10) > 0 && !n || (t[c].required = "undefined" == typeof t[c].required ? 0 : parseInt(t[c].required, 10), t[c].contentArr = t[c].content.split("#**#"), t[c].choice_absolute_id ? (a = parseInt(t[c].choice_absolute_id, 10), a > parseInt(choice_absolute_id[o], 10) && (choice_absolute_id[o] = a)) : (a = parseInt(choice_absolute_id[o], 10) + 1, choice_absolute_id[o]++), s += '<li class="choice survey-question-checkbox-img" has_other="' + t[c].is_other + '" choice_required="' + t[c].required + '" choice_absolute_id=' + a + ' > <div class=survey-question-checkbox-choice> <a class="remove-child-element survey-question-checkbox-img-remove" onclick="edit.removeChildElement()"></a><div class=survey-question-checkbox-choice-img> <img src="' + encodeURI(t[c].contentArr[1]) + '"> </div> <div class=survey-question-checkbox-choice-text> <input type=checkbox name=checkbox> <label class="edit-area edit-child-element" contenteditable=true>' + t[c].contentArr[0] + '</label> <div class="option-tips"></div></div> </div>', s += "</li>")
            }
            s += "</ul>", s += '<div class="add-area survey-question-upload-img-wrap"><div class=survey-question-upload-img-btn> <div class=survey-question-upload-img-inner> <img src=/static/home/img/survey/template/upload-img-icon.png> <div class=survey-question-upload-img-inner-title>点击上传图片</div> <div class=survey-question-upload-img-inner-desc>最多可上传50张图片</div> </div> <input type=file class=survey-question-upload-img-file name=upload_img multiple> </div></div>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"8":
            choice_absolute_id[o] = 0;
            var a;
            s += '<div class="question-title" type="8" name="checkbox-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" choice-quote="' + i.choice_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '" choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '" min="' + i.min + '" max="' + i.max + '" exclusive-options="' + (i.exclusive_options ? i.exclusive_options : "") + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">' + i.content + ' </div></div></div><ul class="question-choice">';
            for (var c in t) {
                var n = t[c].private ? 1 : 0;
                parseInt(i.choice_quote, 10) > 0 && !n || (t[c].required = "undefined" == typeof t[c].required ? 0 : parseInt(t[c].required, 10), t[c].choice_absolute_id ? (a = parseInt(t[c].choice_absolute_id, 10), a > parseInt(choice_absolute_id[o], 10) && (choice_absolute_id[o] = a)) : (a = parseInt(choice_absolute_id[o], 10) + 1, choice_absolute_id[o]++), s += '<li class="choice" has_other="' + t[c].is_other + '" choice_required="' + t[c].required + '" choice_absolute_id=' + a + '><input type="checkbox" name="checkbox"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true">' + t[c].content + "</div></div>", "Y" === t[c].is_other && (s += '<input type="text" class="other-content"  style="width: 120px;height: 30px;vertical-align: middle;" >', 1 === parseInt(t[c].required, 10) && (s += '<span class="required-content">(必填)</span>')), s += '<div class="option-tips"></div></li>')
            }
            s += '</ul><div class="add-area visible-hide"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"1":
            s += '<div class="question-title" type="1" name="input-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true">' + i.content + ' </div></div></div><ul class="question-choice"><li><input type="text" name="input" class="input-single"></li></ul>', s += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"2":
            s += '<div class="question-title" type="2" name="multi-input-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true">' + i.content + '</div></div></div><ul class="question-choice"><li class="auto-height"><textarea name="multi-input" class="multi-input"></textarea></li></ul>', s += '<div class="operate visible-hide" style="width: 240px;" ><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"9":
            s += '<div class="question-title" type="9" name="radio-matrix-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '"  choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true">' + i.content + '</div></div></div><ul class="question-choice" style="float:left;width: 700px;"><li class="auto-height"><table style="border-collapse: collapse;"><tbody><tr><td>&nbsp</td>';
            for (var l in t) t[l].required = "undefined" == typeof t[l].required ? 0 : parseInt(t[l].required, 10), s += '<td name=radio-matrix-choice><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" contenteditable="true" has_other="' + t[l].is_other + '" choice_required="' + t[l].required + '">' + t[l].content + "</li></div></td>";
            s += "</tr>";
            var d = i.radio_array_title;
            for (var r in d) {
                s += '<tr><td class="radio_array_title" name="radio-matrix"><div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true">' + d[r].content + "</div></div></td>";
                for (var u = 0; u < t.length; u++) s += '<td><input type="radio"/>', "Y" == t[u].is_other && (s += '<input type="text" class="other-content" style="width: 120px;height: 30px;vertical-align: middle;" >', 1 === parseInt(t[u].required, 10) && (s += '<span class="required-content">(必填)</span>')), s += "</td>";
                s += "</tr>"
            }
            s += '</tbody></table></li></ul><div class="add-area visible-hide" style="width: 34px; margin: 0px 0 0 46px;" choice="Y"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" style="margin-top: 14px;" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="add-area visible-hide" choice="N"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"13":
            s += '<div class="question-title" type="13" name="checkbox-matrix-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '" choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true">' + i.content + '</div></div></div><ul class="question-choice" style="float:left;width: 700px;"><li class="auto-height"><table style="border-collapse: collapse;"><tbody><tr><td>&nbsp</td>';
            for (var l in t) t[l].required = "undefined" == typeof t[l].required ? 0 : parseInt(t[l].required, 10), s += '<td name=checkbox-matrix-choice><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" contenteditable="true" has_other="' + t[l].is_other + '" choice_required="' + t[l].required + '">' + t[l].content + "</li></div></td>";
            s += "</tr>";
            var h = i.checkbox_array_title;
            for (var r in h) {
                s += '<tr><td class="checkbox_array_title" name="checkbox-matrix"><div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true">' + h[r].content + "</div></div></td>";
                for (var u = 0; u < t.length; u++) s += '<td><input type="checkbox"/>', "Y" == t[u].is_other && (s += '<input type="text" class="other-content" style="width: 120px;height: 30px;vertical-align: middle;" >', 1 === parseInt(t[u].required, 10) && (s += '<span class="required-content">(必填)</span>')), s += "</td>";
                s += "</tr>"
            }
            s += '</tbody></table></li></ul><div class="add-area visible-hide" style="width: 34px; margin: 0px 0 0 46px;" choice="Y"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" style="margin-top: 14px;" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="add-area visible-hide" choice="N"><ul><li class="add-choice" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="operate visible-hide" style="width: 240px;"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"10":
            s = '<div class="topic-type-content topic-type-question after-clear"> <div class="question-title" type="10" name="description"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '"></span><div class="position-relative"><div class="qs-content qs-high-content edit-area edit-title" contenteditable="true">' + i.content + "</div></div></div>", s += '<div class="operate visible-hide" style="width: 141px;"><ul><li class="drag-area" title="移动"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"11":
            s = '<div class="topic-type-content topic-page after-clear"> <div class="question-title" type="11" order="1" name="page" index="0" title-quote="' + i.title_quote + '" question-required="' + i.required + '" has_other="' + i.has_other + '" style="padding: 0px;height: 36px;"><span class="question-id" order="1" page="1" style="margin: 0px;"></span><div class="page-area">页码</div></div>', s += '<div class="operate visible-hide" style="width:94px;"><ul><li class="drag-area" title="移动"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"7":
            choice_absolute_id[o] = 0;
            var a;
            s += '<div class="question-title" type="7" name="radio-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" choice-quote="' + i.choice_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '" choice-random="' + i.choice_random + '" choice-fixed="' + i.choice_fixed + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true">' + i.content + '</div></div></div><select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
            for (var c in t) {
                var n = t[c].private ? 1 : 0;
                parseInt(i.choice_quote, 10) > 0 && !n || (t[c].choice_absolute_id ? (a = parseInt(t[c].choice_absolute_id, 10), a > parseInt(choice_absolute_id[o], 10) && (choice_absolute_id[o] = a)) : (a = parseInt(choice_absolute_id[o], 10) + 1, choice_absolute_id[o]++), s += '<option class="choice" has_other="' + t[c].is_other + '" choice_absolute_id=' + a + ">" + t[c].content + "</option>")
            }
            s += '</select><span class="edit-select" style="  width: 60%;display: inline-block;line-height: 30px;" onclick="edit.editSelect(this)">编辑选项</span>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
            break;
        case"12":
            s += '<div class="question-title" type="12" name="upload-question"><span class="question-id" order="1" page="1" index="1" title-quote="' + i.title_quote + '" absolute_id=' + o + ' question-required="' + i.required + '" has_other="' + i.has_other + '">1</span><div class="position-relative"><div class="qs-content edit-area edit-title" contenteditable="true">' + i.content + ' </div></div></div><ul class="question-choice"><li>  <div class=survey-question-upload-btn> <div class=survey-question-upload-inner> <img src=/static/home/img/survey/template/upload-icon.png> <div class=survey-question-upload-inner-desc>选择图片20M以内 </div> </div> <input type=file class=survey-question-upload-file multiple> </div></li></ul>', s += '<div class="operate visible-hide" style="width: 190px;"><ul><li class="drag-area" title="移动"></li><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>'
    }
    s += "</div>", $("#question-box").append(s);
    var p = $(".topic-type-content:last"), v = parseInt(p.find(".question-title").attr("type"), 10);
    if (-1 !== $.inArray(v, [6, 7, 8])) {
        var q = i.choice_logic;
        if (q instanceof Array && q.length > 0) {
            var s = JSON.stringify(q);
            p.find(".question-id").attr("choice-logic", s)
        } else p.find(".question-id").attr("choice-logic", "")
    }
    edit.sortQuestions(), edit.attachLayer(), edit.updateByChoiceQuote(), edit.showExclusiveOptions(), edit.showChoiceRandom(), edit.showChoiceLogic(), edit.visibleHandle()
}

function selectQuestionGroup(e) {
    e.siblings("ul").is(":visible") ? (e.css({
        background: "url(/static/home/img/survey/side_bar_hide.png) no-repeat",
        "border-bottom": "none"
    }), e.siblings("ul").hide()) : (e.css({
        background: "url(/static/home/img/survey/side_bar_show.png) no-repeat",
        "border-bottom": "1px solid #dbdbdb"
    }), e.parent().siblings("div").find(".classify-title").css({
        background: "url(/static/home/img/survey/side_bar_hide.png) no-repeat",
        "border-bottom": "none"
    }), e.siblings("ul").show(), e.parent().siblings("div").find("ul").hide())
}

function clean_logic_items(e, i) {
    for (var t = [], s = 0, o = e.length; o > s; s++) {
        raw_current_logic_item = e[s];
        var a = Number(raw_current_logic_item.logic_type);
        if (1 === a) a = 1; else {
            if (2 !== a) continue;
            a = 2
        }
        for (var c = [], n = 0, l = raw_current_logic_item.source.length; l > n; n++) {
            var d = raw_current_logic_item.source[n], r = Number(d.join_type);
            if (1 === r) r = 1; else {
                if (2 !== r) continue;
                r = 2
            }
            var u = Number(d.select_type);
            if (1 === u) u = 1; else {
                if (2 !== u) continue;
                u = 2
            }
            var h = Number(d.question_id);
            if (0 !== h && h in i) {
                var p = Number(d.choice_id);
                if (-3 !== p) {
                    if (0 !== p) {
                        for (var v = !1, q = 0, _ = i[h].choice.length; _ > q; q++) {
                            var b = i[h].choice[q];
                            Number(b.choice_absolute_id) === p && (v = !0)
                        }
                        if (!v) continue
                    }
                    var f = {join_type: r, question_id: h, choice_id: p, select_type: u};
                    c.push(f)
                }
            }
        }
        if (0 !== c.length) {
            var g = {};
            for (var m in raw_current_logic_item.target) {
                var y = Number(m);
                0 !== y && (-1 === y || -2 === y || y in i) && (g[y] = 1)
            }
            if ("{}" !== JSON.stringify(g)) {
                var $ = {source: c, logic_type: a, target: g};
                t.push($)
            }
        }
    }
    for (var x = {}, k = [], s = 0, o = t.length; o > s; s++) {
        var w = t[o - 1 - s], C = JSON.stringify(w.source);
        C in x || (k.push(w), x[C] = 1)
    }
    return k.reverse(), k
}

function getRelation(e) {
    var i = {};
    return $.each(e, function (e, t) {
        if (checkQuestionOrChoiceExists(e, 0)) {
            var s = {};
            if (t) {
                var o = !1;
                if ($.each(t, function (e) {
                    o = 0 === parseInt(e) ? !0 : o
                }), o) {
                    var a = [0];
                    $("#question-box").find('[absolute_id="' + e + '"]').parent().siblings(".question-choice").find(".choice").each(function () {
                        a.push($(this).attr("choice_absolute_id"))
                    });
                    var c = t[0];
                    $.each(a, function (e, i) {
                        s[i] = c
                    })
                } else $.each(t, function (i, t) {
                    var o = {};
                    checkQuestionOrChoiceExists(e, i) && $.each(t, function (e, i) {
                        -1 === parseInt(e, 10) || -2 === parseInt(e, 10) ? o[e] = i : checkQuestionOrChoiceExists(e, 0) && 1 == i && (o[e] = i)
                    }), $.isEmptyObject(o) || (s[i] = o)
                })
            }
            $.isEmptyObject(s) || (i[e] = s)
        }
    }), i
}

function checkQuestionOrChoiceExists(e, i) {
    var t = !1;
    return parseInt(e, 10) > 0 && (0 === parseInt(i, 10) ? t = $("#question-box").find('[absolute_id="' + e + '"]').length > 0 : parseInt(i, 10) > 0 && (t = $("#question-box").find('[absolute_id="' + e + '"]').parent().parent().find('[choice_absolute_id="' + i + '"]').length > 0)), t
}

function ImgEditSize(e) {
    return this.main = function (e) {
        this.obj = $(e), this.event()
    }, this.status = !0, this.status_menu = !0, this.event = function () {
        var e = this;
        this.obj.mouseover(function () {
            e.status_menu = !1, e.Menu && e.DelMenu(), e.addMenu()
        }), this.obj.mouseout(function () {
            setTimeout(function () {
                e.DelMenu()
            }, 50)
        })
    }, this.addMenu = function () {
        var e = this;
        this.Menu = $('<div class="img-edit-size"><ul><li class="enl" title="放大"></li><li class="ori" title="原图"></li><li class="nar" title="缩小"></li><li class="del" title="删除"></li></ul></div>'), $("body").append(e.Menu), this.Menu.css({
            position: "absolute",
            top: e.obj.offset().top + 5 + "px",
            left: e.obj.offset().left + 5 + "px"
        }), this.Menu.hover(function () {
            e.status = !1
        }, function () {
            e.status = !0, e.status_menu = !0, setTimeout(function () {
                e.status_menu && e.DelMenu()
            }, 200)
        }), this.Menu.find(".enl").click(function () {
            var i = e.obj.width(), t = e.obj.height(), s = i / t;
            return i >= 580 ? !1 : (e.getImgWH(i + 20 * s, t + 20), edit.updateUploadAll(), !1)
        }), this.Menu.find(".ori").click(function () {
            e.imgSize(e.obj.attr("src"));
            return edit.updateUploadAll(), !1
        }), this.Menu.find(".nar").click(function () {
            var i = e.obj.width(), t = e.obj.height(), s = i / t;
            return 100 >= i ? !1 : (e.getImgWH(i - 20 * s, t - 20), edit.updateUploadAll(), !1)
        }), this.Menu.find(".del").click(function () {
            return e.obj.remove(), e.status = !0, e.DelMenu(), edit.updateUploadAll(), !1
        })
    }, this.getImgWH = function (e, i) {
        this.obj.width(e), this.obj.height(i)
    }, this.DelMenu = function () {
        this.status && this.Menu.remove()
    }, this.imgSize = function (e) {
        var i = this, t = new Image;
        t.onload = function () {
            t.width > 620 && (t.width = i.obj.attr("width"), t.height = i.obj.attr("height")), i.getImgWH(t.width, t.height)
        }, t.src = e
    }, this.main(e)
}

function selectFinish() {
    $(".select-ul").each(function () {
        if ($(this).siblings(".add-area").length > 0) {
            var e = '<select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
            $(this).find(".choice").each(function () {
                e += '<option class="choice" has_other="N" choice_absolute_id=' + $(this).attr("choice_absolute_id") + ">" + $(this).find(".edit-area").html() + "</option>"
            }), e += '</select><span class="edit-select" onclick="edit.editSelect(this)" style="  width: 60%;display: inline-block;line-height: 30px;">编辑选项</span>', $(this).siblings(".question-title").after(e), $(this).siblings(".question-title").attr("type", "7"), $(this).siblings(".add-area").remove(), $(this).remove()
        }
    })
}

function fontStyle() {
    if ($(".edit-area-active").length) {
        var e = $(".edit-area-active").html();
        e = e.replace(/<\/?[^>(IMG)(img)][^>]*>/g, ""), $(".edit-area-active").html(e)
    }
}

function setLogic(e) {
    require.async(["home:static/js/survey/widget/edit_logic_pop.js"], function (i) {
        i.show(e, null, null).then(function () {
            edit.updateUploadAll()
        })
    })
}

function elementInit() {
    $(".edit-area").focus(function () {
        $("div, td, li, label").removeClass("edit-area-active"), $(this).hasClass("edit-area-active") || $(this).addClass("edit-area-active"), activeFocus();
        var e = parseInt($(this).parents(".question-choice").siblings(".question-title").attr("type"), 10);
        14 != e && 15 != e && ($(this).after($(".edit-img")), $(".edit-img").css($(this).hasClass("qs-content") || $(this).hasClass("title-content") ? {width: "30px"} : $(this).hasClass("matrix-choice") ? {width: "65px"} : $(this).parents("td").hasClass("radio_array_title") || $(this).parents("td").hasClass("checkbox_array_title") || $(this).parents("li").hasClass("select_choice") ? {width: "95px"} : {width: "155px"}), $(".edit-img").show()), $(".edit-area").css({
            background: "#fff",
            border: "none"
        }), $(".title-content").css({border: "1px solid #dbdbdb"}), $(this).css({
            background: "#fdf9cd",
            border: "1px solid #333"
        }), 14 != e && 15 != e && ($(this).hasClass("edit-title") ? ($(".upload-element-img").show(), $(".handle-element").hide()) : $(this).parents("td").hasClass("radio_array_title") || $(this).parents("td").hasClass("checkbox_array_title") || $(this).parents("li").hasClass("select_choice") ? ($(".handle-element").show(), $(".handle-child-element").hide(), $(".upload-element-img").hide()) : $(this).hasClass("matrix-choice") ? ($(".handle-element").show(), $(".up-child-element").hide(), $(".down-child-element").hide(), $(".upload-element-img").hide()) : $(this).hasClass("title-content") ? $(".edit-img").hide() : $(this).hasClass("desc-content") ? ($(".edit-img").css({width: "30px"}), $(".handle-element").hide()) : ($(".upload-element-img").show(), $(".handle-element").show()));
        var i = $(this).html().replace(/&nbsp;/gi, " ");
        i = i.replace(/<br>/gi, "\n"), i = $.trim(i), $(this).hasClass("edit-title") && edit.isDefaultQuestion(i) && ($(this).attr("data-value", i), $(this).html("")), ($(this).hasClass("edit-child-element") || $(this).hasClass("choice")) && edit.isDefaultChoice(i) && ($(this).attr("data-value", i), $(this).html(""))
    }), $(".title-content").on("keydown", function (e) {
        if ($(this).text().length >= 17) {
            var i = ($(this).text(), e.keyCode || e.which);
            if (8 != i && 46 != i) return !1
        }
    }), $(".edit-area").blur(function () {
        var e = $(this).html().replace(/&nbsp;/gi, " ");
        if (e = e.replace(/<br>/gi, "\n"), e = $.trim(e), $(this).hasClass("title-content")) return void(e.length > 17 ? ($(".survey-title .error-tips").addClass("error"), $(".survey-title .error-tips").text("问卷名称不能超过17字"), surveyTitle = "") : 0 == e.length ? ($(".survey-title .error-tips").addClass("error"), $(".survey-title .error-tips").text("问卷名称不能为空"), surveyTitle = "") : ($(".survey-title .error-tips").removeClass("error"), surveyTitle = e));
        if ("" == e) {
            var i = $(this).attr("data-value");
            if (void 0 !== i) $(this).html(i); else if ($(this).hasClass("edit-title")) $(this).nextAll(".error").remove(), $(this).after('<span class="error-tips error">题干为空</span>'), $(this).trigger("focus"); else if ($(this).hasClass("edit-child-element")) {
                var t = $(this).parents(".question-choice").children().length;
                t > 1 && $(this).parents(".choice").find(".remove-child-element").click()
            }
        } else $(this).nextAll(".error").remove(), 0 == edit.isDefaultQuestion(e) && $(this).removeAttr("data-value");
        setUpdateStatus()
    }), $(".edit-area").hover(function () {
        $(this).hasClass("edit-area-active") || $(this).css({background: "#fdf9cd"})
    }, function () {
        $(this).hasClass("edit-area-active") || $(this).css({background: "#fff"})
    }), $(".edit-area").on("paste", function () {
        var e = $(this), i = parseInt($(this).parents(".question-choice").siblings(".question-title").attr("type"), 10);
        setTimeout(function () {
            var t = e.text();
            t = t.replace(/<[^<]*>/g, ""), (14 == i || 15 == i) && (t = t.substring(0, 50)), e.text(t)
        }, 0)
    }), $(".edit-area").keypress(function () {
        var e = parseInt($(this).parents(".question-choice").siblings(".question-title").attr("type"), 10);
        return (14 == e || 15 == e) && $(this).text().length >= 50 ? !1 : void 0
    }), $("body").on("focus", ".edit-area", function () {
        var e = $(this);
        return e.data("before", e.html()), e
    }).on("blur keyup paste input", ".edit-area", function () {
        var e = $(this);
        return e.data("before") !== e.html() && (e.data("before", e.html()), e.trigger("change")), e
    }), $(".edit-area").change(function () {
        edit.updateUploadAll()
    }), edit.updateUploadAll(), edit.updateQuestionType()
}

function getQuoteIndex(e) {
    var i = /\[Q[0-9]*[1-9][0-9]*\]/g, t = e.match(i);
    if (null === t) return !1;
    var s = [];
    return $.each(t, function (e, i) {
        var t = i.substring(2, i.length - 1);
        inArray(t, s) || s.push(t)
    }), s
}

function checkIndexes(e) {
    if (e) {
        var i = !0;
        return $.each(e, function (e, t) {
            "9" == $(".question-id[index=" + t + "]").parent().attr("type") && (i = !1)
        }), i
    }
    return !1
}

function activeFocus() {
    $(".choice .edit-area").css({display: "inline-block"}), $(".choice .edit-area-active").css({display: "inline-block"})
}

function setUpdateStatus() {
    updateStatus = 1
}

function clearUpdateStatus() {
    updateStatus = 1
}

var edit = function () {
    function updateBySampleId() {
        parseInt(survey_init.sample_id, 10) > 0 && ($(".add-choice").remove(), $(".batch-add-choice").remove(), $(".operate").remove(), $(".edit-img").remove(), $(".remove-child-element").remove(), $(".survey-question-upload-img-wrap").remove())
    }

    function sortQuestions() {
        updateBySampleId(), $(".topic-type-content").each(function () {
            var e = $(this).index();
            e += 1, $(this).find(".question-id").attr("order", e);
            var i = $(this).prevAll(".topic-page").length;
            i += 1, $(this).find(".question-id").attr("page", i);
            var t = $(this).find(".question-title").attr("name"), s = $("#question-box").find(".topic-page").length;
            s += 1;
            var o;
            if ("page" === t) $(this).find(".page-area").html("页码:" + i + "/" + s), o = 0; else if ("description" === t) o = 0; else {
                var a = 0;
                $(this).prevAll(".topic-type-question").each(function () {
                    var e = parseInt($(this).find(".question-title").attr("type"), 10);
                    10 != e && a++
                }), o = a + 1, $(this).find(".question-id").html("Q" + o), "Y" == $(this).find(".question-id").attr("question-required") && 0 == $(this).find(".required").length && $(this).find(".question-id").before('<span class="required">*</span>')
            }
            $(this).find(".question-id").attr("index", o), $("#page-tail").html("页码:" + s + "/" + s);
            var c = parseInt($(this).find(".question-title").attr("type"), 10);
            if (14 === c || 15 === c) {
                var n = $(this).find(".question-choice");
                updateUploadItem(n.siblings(".add-area"))
            }
        });
        var e = CA.baseUrl + "survey/home/uploadImg";
        $(".survey-question-upload-img-file").each(function () {
            $(this).fileupload({
                url: e,
                autoUpload: !0,
                sequentialUploads: !0,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp)$/i,
                done: function (e, i) {
                    var t = $(this).parents(".add-area").siblings(".question-choice").find(".choice").length;
                    50 > t && addQuestion($(this), i.result), edit.updateUploadItem($(this).parents(".add-area"))
                }
            })
        }), $("img").load(function () {
            edit.updateUploadAll()
        })
    }

    function attachLayer() {
        $(".attach-left").css({
            top: $(".rows2").offset().top,
            width: $(".rows2").offset().left - $(".edit-survey-wrap").offset().left + 20,
            height: $(".rows2").height(),
            left: 0
        }), $(".attach-right").css({
            top: $(".rows2").offset().top,
            right: 0,
            width: $(window).width() - $(".rows2").offset().left - $(".rows2").width(),
            height: $(".rows2").height()
        })
    }

    function update_logic_word_choice_box(e, i, t) {
        var s = $("#question-box").find('[absolute_id="' + i + '"]').parents(".question-title").siblings(".question-choice").find('[choice_absolute_id="' + t + '"]');
        s.find(".option-tips").find(".choice_show_logic_show_questions").length > 0 ? s.find(".option-tips").find(".choice_show_logic_show_questions").append(";" + e.join(";")) : s.find(".option-tips").append('<span class="choice_show_logic_show_questions">' + e.join(";") + "</span>")
    }

    function update_logic_word_question_box(e, i) {
        for (var t = [], s = 0, o = e.length; o > s; s++) t.push('<div style="margin-left:20px;">' + e[s] + "</div>");
        var a = $("#question-box").find('[absolute_id="' + i + '"]').parents(".question-title");
        a.find(".question-title-tip").remove(), a.append('<span class="question-title-tip">' + t.join("") + "</span>")
    }

    function updateChoiceShowLogic() {
        $(".question-title-tip").remove(), $(".choice_show_logic_show_questions").remove();
        for (var e = collectContent(), i = {}, t = {
            choice_absolute_id: 0,
            content: "任意项"
        }, s = 0, o = e.length; o > s; s++) {
            var a = e[s];
            if ("absolute_id" in a) {
                a.title = "Q" + a.index + ":" + a.content;
                var c = [];
                if (["6", "7", "14", "8", "15"].indexOf(a.type_id) > -1) for (var n = 0, l = a.choice.length; l > n; n++) {
                    var d = a.choice[n];
                    d.choice_absolute_id = Number(d.choice_absolute_id), c.push(d)
                }
                c.push(t), a.choice = c, a.absolute_id = Number(a.absolute_id), i[a.absolute_id] = a
            }
        }
        $.each(logic_relation, function (e, t) {
            if (!(Number(e) in i)) return delete logic_relation[e], !0;
            if (t) {
                var s = [], o = [];
                $.each(t, function (t, a) {
                    var c = [], n = null, l = "", d = "", r = 0, u = [], h = 0;
                    if ($.each(a.source, function (e, t) {
                        if (!(Number(t.question_id) in i)) return u = [], !1;
                        if (0 === e) h = Number(i[t.question_id].order); else if (Number(i[t.question_id].order) < h) return u = [], !1;
                        if (Number(i[t.question_id].order) > r && (r = Number(i[t.question_id].order)), 0 === e) if (0 === t.choice_id) d += "本题", l = "question", d += 1 === t.select_type ? "选中/填写 " : "未选中/未填写", d += "任意项 "; else if (a.source.length > 1) {
                            l = "question", d += "本题", d += 1 === t.select_type ? "选中/填写 " : "未选中/未填写";
                            var s = "选项" + t.choice_id;
                            "choice" in i[t.question_id] && i[t.question_id].choice.length > 0 && $.each(i[t.question_id].choice, function (e, o) {
                                Number(o.choice_absolute_id) === Number(t.choice_id) && (s = 14 === Number(i[t.question_id].type_id) || 15 === Number(i[t.question_id].type_id) ? o.content.split("#**#")[0] : o.content, s = s.length > 5 ? s.substring(0, 5) + "..." : s)
                            }), d += s + " "
                        } else l = "choice", d += 1 === t.select_type ? "选中/填写 " : "未选中/未填写", n = t.choice_id; else {
                            d += 1 === t.join_type ? " 并且 " : " 或者 ", d += "Q" + ("index" in i[t.question_id] ? i[t.question_id].index : "没有index"), d += 1 === t.select_type ? "选中/填写 " : "未选中/未填写";
                            var s = "的选项" + t.choice_id;
                            "choice" in i[t.question_id] && i[t.question_id].choice.length > 0 && $.each(i[t.question_id].choice, function (e, o) {
                                Number(o.choice_absolute_id) === Number(t.choice_id) && (s = 14 === Number(i[t.question_id].type_id) || 15 === Number(i[t.question_id].type_id) ? o.content.split("#**#")[0] : o.content, s = s.length > 5 ? s.substring(0, 5) + "..." : s)
                            }), d += s + " "
                        }
                        u.push(t)
                    }), a.source = u, 0 === a.source.length) return update_logic_word_question_box(s, e), update_logic_word_choice_box(c, e, n), !0;
                    if (d += 1 === a.logic_type ? "跳转至" : "则显示", "-1" in a.target) d += "提前结束(计入结果)"; else if ("-2" in a.target) d += "提前结束(不计入结果)"; else {
                        var p = [];
                        if ($.each(a.target, function (e) {
                            if (e >= 0 && (!(Number(e) in i) || Number(i[e].order) <= r)) return delete a.target[e], !0;
                            if (10 == i[e].type_id) {
                                var t = i[e].content.length > 5 ? i[e].content.substring(0, 5) + "..." : i[e].content;
                                p.push(t)
                            } else p.push("Q" + ("index" in i[e] ? i[e].index : "没有index"))
                        }), "{}" == JSON.stringify(a.target)) return update_logic_word_question_box(s, e), update_logic_word_choice_box(c, e, n), !0;
                        d += p.join(",")
                    }
                    "question" === l ? s.push(d) : c.push(d), update_logic_word_question_box(s, e), update_logic_word_choice_box(c, e, n), o.push(a)
                })
            }
            0 === t.length ? delete logic_relation[e] : logic_relation[e] = o
        })
    }

    function checkQuestionLogic(e, i) {
        var t = !1;
        return $.each(logic_relation, function (s, o) {
            $.each(o, function (s, o) {
                o && ($.each(o.source, function (s, o) {
                    parseInt(o.question_id, 10) !== parseInt(e, 10) || 0 !== parseInt(i, 10) && parseInt(o.choice_id, 10) !== parseInt(i, 10) || (t = !0)
                }), 0 === parseInt(i, 10) && $.each(o.target, function (i) {
                    parseInt(i, 10) === parseInt(e, 10) && (t = !0)
                }))
            })
        }), t
    }

    function collectContent() {
        var survey_content = [];
        return $(".topic-type-content").each(function () {
            var content = {};
            content.survey_id = survey_init.survey_id;
            var tmpContent = $(this).find(".qs-content").html();
            void 0 !== tmpContent && (tmpContent = tmpContent.replace(/&nbsp;/gi, " ").replace(/<br>/gi, "\n").trim("\n")),
                "" == tmpContent ? ($("html,body").animate({scrollTop: $(this).offset().top - 50 + "px"}, 500),
                    $(this).find(".qs-content").trigger("focus"), saveFlag = 0) : content.content = $.trim(tmpContent),
                content.type_id = $(this).find(".question-title").attr("type"),
                content.order = $(this).find(".question-id").attr("order"),
                content.has_other = $(this).find(".question-id").attr("has_other"),
                content.title_quote = $(this).find(".question-id").attr("title-quote"),
                content.required = $(this).find(".question-id").attr("question-required"),
                content.page = $(this).find(".question-id").attr("page"),
                content.index = $(this).find(".question-id").attr("index"),
                content.absolute_id = $(this).find(".question-id").attr("absolute_id"),
                content.last_absolute_id = absolute_id,
                content.last_choice_absolute_id = choice_absolute_id,
                content.choice_random = parseInt($(this).find(".question-id").attr("choice-random"), 10),
                content.choice_fixed = parseInt($(this).find(".question-id").attr("choice-fixed"), 10);
            var logic_hide = 0;
            content.logic_hide = logic_hide;
            var radio_array_title = {};
            switch (content.type_id) {
                case"6":
                case"14":
                    if (content.choice_quote = $(this).find(".question-id").attr("choice-quote"), 0 === parseInt(content.choice_quote) || isNaN(parseInt(content.choice_quote))) content.choice = []; else {
                        var sourceOrder = $("[absolute_id=" + content.choice_quote + "]").attr("order");
                        content.choice = survey_content[parseInt(sourceOrder, 10) - 1].choice.slice()
                    }
                    content.choice = objChoice($(this), content.type_id, content.choice);
                    var choiceLogic = $(this).find(".question-id").attr("choice-logic");
                    choiceLogic = void 0 === choiceLogic ? "" : choiceLogic, content.choice_logic = eval(choiceLogic);
                    break;
                case"8":
                case"15":
                    var min = $(this).find(".question-id").attr("min");
                    content.min = "" !== min && "undefined" !== min && null !== min && void 0 !== min ? min : "";
                    var max = $(this).find(".question-id").attr("max");
                    content.max = "" !== max && "undefined" !== max && null !== max && void 0 !== max ? max : "";
                    var exclusiveOptions = $(this).find(".question-id").attr("exclusive-options");
                    if (content.exclusive_options = "" !== exclusiveOptions && "undefined" !== exclusiveOptions && null !== exclusiveOptions && void 0 !== exclusiveOptions ? exclusiveOptions : "", content.choice_quote = $(this).find(".question-id").attr("choice-quote"), 0 === parseInt(content.choice_quote) || isNaN(parseInt(content.choice_quote))) content.choice = []; else {
                        var sourceOrder = $("[absolute_id=" + content.choice_quote + "]").attr("order");
                        content.choice = survey_content[parseInt(sourceOrder, 10) - 1].choice.slice()
                    }
                    content.choice = objChoice($(this), content.type_id, content.choice);
                    var choiceLogic = $(this).find(".question-id").attr("choice-logic");
                    choiceLogic = void 0 === choiceLogic ? "" : choiceLogic, content.choice_logic = eval(choiceLogic);
                    break;
                case"7":
                    if (content.choice_quote = $(this).find(".question-id").attr("choice-quote"), 0 === parseInt(content.choice_quote) || isNaN(parseInt(content.choice_quote))) content.choice = []; else {
                        var sourceOrder = $("[absolute_id=" + content.choice_quote + "]").attr("order");
                        content.choice = survey_content[parseInt(sourceOrder, 10) - 1].choice.slice()
                    }
                    content.choice = objChoice($(this), content.type_id, content.choice);
                    var choiceLogic = $(this).find(".question-id").attr("choice-logic");
                    choiceLogic = void 0 === choiceLogic ? "" : choiceLogic, content.choice_logic = eval(choiceLogic);
                    break;
                case"9":
                    content.choice = objChoice($(this), content.type_id), content.radio_array_title = objMatrix($(this), "radio_array_title");
                    break;
                case"13":
                    content.choice = objChoice($(this), content.type_id), content.checkbox_array_title = objMatrix($(this), "checkbox_array_title");
                    break;
                case"12":
                    content.min = "", content.max = 10
            }
            survey_content.push(content)
        }), survey_content
    }

    function saveSurvey() {
        var e = $.Deferred();
        if (checkSurveyName(surveyTitle)) {
            var i = arguments[0] ? arguments[0] : 0, t = arguments[1] ? arguments[1] : 0, s = {};
            s.survey_id = survey_init.survey_id, s.survey_name = $.trim($(".title-content").text());
            var o = $(".desc-content").html().replace(/[{}]/gi, "").replace(/&nbsp;/gi, " ").replace(/<br>/gi, "\n").replace(/<[^>]+>/g, "").trim("\n");
            s.test_content = $.trim(o),
                s.status = i,
                s.redirect_relation = getRelation(redirect_relation),
                s.logic_condition = getRelation(logic_condition),
                s.logic_relation = logic_relation,
                s.quota_info = quotaInfo;
            var a = 1;
            if (s.content = collectContent(), 0 == a) return !1;
            var c = CA.baseUrlModule + "home/createSurveyQuestion";
            $.ajax({
                type: "post",
                url: c,
                data: JSON.stringify(s),
                contentType: "application/json",
                traditional: !0,
                success: function (s) {
                    var o = s;
                    0 === i && 0 === o.error_code ? $(".time-save").css({
                        top: $(window).scrollTop(),
                        left: $(window).width() / 2
                    }).fadeIn(300).fadeOut(2e3) : 1 === i && 0 === o.error_code ? location.href = t ? CA.baseUrlModule + "home/createSurveyTemplate?survey_id=" + survey_init.survey_id : CA.baseUrlModule + "home/surveyFilter?survey_id=" + survey_init.survey_id : o.error_code && showAlert(o.msg), e.resolve()
                }
            })
        }
        return e.promise()
    }

    function tipConstruction() {
        var e = arguments[0] ? arguments[0] : 0;
        e > 0 ? require.async(["home:static/js/survey/widget/operate_popup.js"], function (e) {
            e.show("提交失败，请检查问卷错误或者联系管理员", "确定", "取消")
        }) : require.async(["home:static/js/survey/widget/operate_popup.js"], function (e) {
            e.show("问卷已创建完成，并且提交众测后台，审核通过后会发布上线，请耐心等待", "确定", "取消")
        })
    }

    function objChoice(e, i, t) {
        var t = t ? JSON.parse(JSON.stringify(t)) : [], s = 0, o = [], a = /&NBSP;/gi;
        e.find(".choice").each(function () {
            var e = {};
            if ("9" == i || "13" == i) {
                e.order = $(this).parents("td").index();
                var c = $(this).html().replace(a, "");
                e.choice_absolute_id = $(this).parents("td").index()
            } else if ("7" == i) {
                e.order = $(this).index() + 1 + t.length;
                var c = $(this).html().replace(a, "");
                e.choice_absolute_id = $(this).attr("choice_absolute_id")
            } else if ("14" == i) {
                e.order = $(this).index() + 1 + t.length;
                var n = $(this).find(".edit-area").html().replace(a, ""),
                    l = $(this).find(".survey-question-radio-choice-img>img").attr("src");
                c = n + "#**#" + l, e.choice_absolute_id = $(this).attr("choice_absolute_id")
            } else if ("15" == i) {
                e.order = $(this).index() + 1 + t.length;
                var n = $(this).find(".edit-area").html().replace(a, ""),
                    l = $(this).find(".survey-question-checkbox-choice-img>img").attr("src");
                c = n + "#**#" + l, e.choice_absolute_id = $(this).attr("choice_absolute_id")
            } else {
                e.order = $(this).index() + 1 + t.length;
                var c = $(this).find(".edit-area").html().replace(a, "");
                e.choice_absolute_id = $(this).attr("choice_absolute_id")
            }
            t.length > 0 && (s < e.choice_absolute_id && (s = Number(e.choice_absolute_id)), e.private = 1), e.content = c.trim("\n"), e.is_other = $(this).attr("has_other"), e.required = $(this).attr("choice_required"), o.push(e)
        });
        var c = 0;
        if (t.length > 0) {
            for (var n = [], l = 0; l < t.length; l++) c += 1, s += 1, t[l].order = c, t[l].choice_absolute_id = s + "", t[l].private = 0, t[l].quote = 1, n.push(t[l]);
            o = n.concat(o)
        }
        return o
    }

    function objMatrix(e, i) {
        var t = [];
        return e.find("." + i).each(function () {
            var e = {};
            e.order = $(this).parent().index(), e.content = $(this).find(".edit-area").html(), t.push(e)
        }), t
    }

    function scrollBox() {
        var e = $("#question-box").find(".topic-type-content").length;
        e > 3 && $("html, body").animate({scrollTop: $("#edit-survey-content").height() - 200}, "slow")
    }

    function visibleHandle() {
        $(".topic-type-content").hover(function () {
            $(".add-area, .operate").not(".survey-question-upload-img-wrap").removeClass("visible-show").addClass("visible-hide"), $(this).find(".add-area, .operate").not(".survey-question-upload-img-wrap").removeClass("visible-hide").addClass("visible-show")
        })
    }

    function questionCopy(e) {
        var i = $(e).parents(".topic-type-content");
        i.after(i.clone());
        var t = parseInt(absolute_id) + 1;
        $(e).parents(".topic-type-content").next().find(".question-id").attr("absolute_id", t), absolute_id++, $(e).parents(".topic-type-content").next().find(".choice_show_logic_show_questions").remove(), choice_absolute_id[t] = 0, $(e).parents(".topic-type-content").next().find(".choice").each(function () {
            parseInt($(this).attr("choice_absolute_id"), 10) > parseInt(choice_absolute_id[t], 10) && (choice_absolute_id[t] = parseInt($(this).attr("choice_absolute_id"), 10))
        }), sortQuestions(), setUpdateStatus(), visibleHandle(), elementInit()
    }

    function questionDelete(e) {
        $("#question-box").append($(".edit-img")), require.async(["home:static/js/survey/widget/operate_popup.js"], function (i) {
            i.show("删除此题卡", "确定", "取消").then(function () {
                {
                    var i = $(e).parents(".topic-type-content");
                    i.find(".question-id").attr("absolute_id")
                }
                i.remove(), edit.sortQuestions(), edit.saveSurvey(), edit.updateUploadAll(), setUpdateStatus(), updateChoiceShowLogic()
            })
        })
    }

    function questionHandle(e) {
        var i = $(e).parents(".operate").siblings(".question-title").attr("type"),
            t = $(e).parents(".operate").siblings(".question-title").find(".question-id").attr("order");
        require.async(["home:static/js/survey/widget/question_handle.js"], function (s) {
            s.show(e, i, t, "确定", "取消").then(function () {
                edit.updateUploadAll()
            })
        })
    }

    function showQuota() {
        require.async(["home:static/js/survey/widget/survey_quota_pop.js"], function (e) {
            e.show(survey_init.quotaInfo)
        })
    }

    function addQuestion(e) {
        var i = $(e).parents(".add-area").siblings(".question-title").attr("type"), t = "",
            s = parseInt($(e).parents(".add-area").siblings(".question-title").find(".question-id").attr("absolute_id"));
        choice_absolute_id[s]++;
        var o = choice_absolute_id[s];
        switch (i) {
            case"6":
                var a = $(e).parents(".add-area").siblings(".question-choice").find(".choice").length + 1;
                t += '<li class="choice" has_other="N" choice_absolute_id=' + o + '><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项' + a + '</div></div><div class="option-tips"></div></li>', $(e).parents(".add-area").siblings(".question-choice").append(t), $(e).parents(".add-area").siblings(".question-choice").hasClass("select-ul") && $(e).parents(".add-area").siblings(".question-choice").find(".choice").addClass("select_choice");
                break;
            case"14":
                var c = arguments[1],
                    a = $(e).parents(".add-area").siblings(".question-choice").find(".choice").length + 1;
                t += '<li class="choice survey-question-radio-img" has_other="N" choice_absolute_id=' + o + '><div class=survey-question-radio-choice> <div class=survey-question-radio-choice-img><a class="remove-child-element survey-question-radio-img-remove" onclick="edit.removeChildElement()"></a> <img src="' + c.img_url + '"> </div> <div class=survey-question-radio-choice-text> <input type=radio name=radio> <label class="edit-area edit-child-element" contenteditable=true>选项' + a + '</label> <div class="option-tips"></div></div> </div></li>', $(e).parents(".add-area").siblings(".question-choice").append(t), $(e).parents(".add-area").siblings(".question-choice").hasClass("select-ul") && $(e).parents(".add-area").siblings(".question-choice").find(".choice").addClass("select_choice");
                break;
            case"15":
                var c = arguments[1],
                    a = $(e).parents(".add-area").siblings(".question-choice").find(".choice").length + 1;
                t += '<li class="choice survey-question-checkbox-img" has_other="N" choice_absolute_id=' + o + '><div class=survey-question-checkbox-choice> <div class=survey-question-checkbox-choice-img><a class="remove-child-element survey-question-checkbox-img-remove" onclick="edit.removeChildElement()"></a> <img src="' + c.img_url + '"> </div> <div class=survey-question-checkbox-choice-text> <input type=checkbox name=checkbox> <label class="edit-area edit-child-element" contenteditable=true>选项' + a + '</label> <div class="option-tips"></div></div> </div></li>', $(e).parents(".add-area").siblings(".question-choice").append(t), $(e).parents(".add-area").siblings(".question-choice").hasClass("select-ul") && $(e).parents(".add-area").siblings(".question-choice").find(".choice").addClass("select_choice");
                break;
            case"8":
                var a = $(e).parents(".add-area").siblings(".question-choice").find(".choice").length + 1;
                t += '<li class="choice" has_other="N" choice_absolute_id=' + o + '><input type="checkbox" name="checkbox"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项' + a + '</div></div><div class="option-tips"></div></li>', $(e).parents(".add-area").siblings(".question-choice").append(t);
                break;
            case"9":
                if ("N" === $(e).parents(".add-area").attr("choice")) {
                    var a = $(e).parents(".add-area").siblings(".question-choice").find("tr").length;
                    t += '<tr><td class="radio_array_title" name="radio-matrix"> <div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行' + a + "</div></div></td>";
                    for (var n = $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td").length, l = 1; n > l; l++) {
                        t += '<td><input type="radio">';
                        var d = $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td:eq(" + l + ")").find(".choice");
                        "Y" == d.attr("has_other") && (t += '<input type="text" class="other-content"  style="width: 120px;height: 30px;vertical-align: middle;" >', 1 == d.attr("choice_required") && (t += '<span class="required-content">(必填)</span>')), t += "</td>"
                    }
                    t += "</tr>", $(e).parents(".add-area").siblings(".question-choice").find("tbody").append(t)
                } else {
                    var a = $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td").length;
                    t += '<td name="radio-matrix-choice"><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项' + a + "</li></div></td>", $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").append(t), $(e).parents(".add-area").siblings(".question-choice").find("tr").each(function () {
                        $(this).index() > 0 && $(this).append('<td><input type="radio"></td>')
                    })
                }
                break;
            case"13":
                if ("N" === $(e).parents(".add-area").attr("choice")) {
                    var a = $(e).parents(".add-area").siblings(".question-choice").find("tr").length;
                    t += '<tr><td class="checkbox_array_title" name="checkbox-matrix"> <div class="position-relative" style="width:100%"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">矩阵行' + a + "</div></div></td>";
                    for (var n = $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td").length, l = 1; n > l; l++) {
                        t += '<td><input type="checkbox">';
                        var d = $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td:eq(" + l + ")").find(".choice");
                        "Y" == d.attr("has_other") && (t += '<input type="text" class="other-content"  style="width: 120px;height: 30px;vertical-align: middle;" >', 1 == d.attr("choice_required") && (t += '<span class="required-content">(必填)</span>')), t += "</td>"
                    }
                    t += "</tr>", $(e).parents(".add-area").siblings(".question-choice").find("tbody").append(t)
                } else {
                    var a = $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").find("td").length;
                    t += '<td name="checkbox-matrix-choice"><div class="position-relative" style="width:100%"><li class="choice edit-area matrix-choice" has_other="N" contenteditable="true" content-default="1">选项' + a + "</li></div></td>", $(e).parents(".add-area").siblings(".question-choice").find("tr:eq(0)").append(t), $(e).parents(".add-area").siblings(".question-choice").find("tr").each(function () {
                        $(this).index() > 0 && $(this).append('<td><input type="checkbox"></td>')
                    })
                }
        }
        elementInit(), $(e).parents(".add-area").siblings(".question-choice").hasClass("select-ul") || setUpdateStatus()
    }

    function batchAddChoice(e) {
        require.async(["home:static/js/survey/widget/batchAddChoice.js"], function (i) {
            i.show(e, "确定", "取消").then(function () {
                edit.updateUploadAll()
            })
        })
    }

    function removeChildElement() {
        var questionChoice = $(".edit-area-active").parents(".question-choice"),
            type_id = parseInt($(".edit-area-active").parents(".topic-type-question").find(".question-title").attr("type"), 10);
        if ($("#question-box").append($(".edit-img")), $(".edit-area-active").parents("td").hasClass("radio_array_title") || $(".edit-area-active").parents("td").hasClass("checkbox_array_title")) $(".edit-area-active").parents("tr").remove(); else if ($(".edit-area-active").hasClass("matrix-choice")) {
            var index = $(".edit-area-active").parents("td").index();
            $(".edit-area-active").parents("tr").siblings("tr").each(function () {
                $(this).find("td:eq(" + index + ")").remove()
            }), $(".edit-area-active").parents("td").remove()
        } else {
            var choiceLen = $(".edit-area-active").parents(".question-choice").children().length;
            if (choiceLen > 1 || 1 === choiceLen && $(".edit-area-active").parents(".topic-type-question").find(".question-id").attr("choice-quote") > 0) {
                var cur_item = $(".edit-area-active").parents(".topic-type-question");
                if ("8" === cur_item.find(".question-title").attr("type") && cur_item.find(".question-id").attr("exclusive-options")) {
                    var exclusiveOptions = cur_item.find(".question-id").attr("exclusive-options").split(","),
                        newExcluOptions = [];
                    $.each(exclusiveOptions, function (e, i) {
                        i !== $(".edit-area-active").parents(".choice").attr("choice_absolute_id") && newExcluOptions.push(i)
                    }), cur_item.find(".question-id").attr("exclusive-options", newExcluOptions.join(","))
                }
                var questionId = cur_item.find(".question-id").attr("absolute_id"),
                    choiceId = $(".edit-area-active").parents(".choice").attr("choice_absolute_id");
                $(".question-id").each(function () {
                    var choiceLogics = eval($(this).attr("choice-logic"));
                    choiceLogics instanceof Array && choiceLogics.length > 0 && (angular.forEach(choiceLogics, function (e, i) {
                        (questionId == e.questionId && choiceId == e.choiceId || questionId == e.sourceQuestionId && choiceId == e.sourceChoiceId) && choiceLogics.splice(i, 1)
                    }), $(this).attr("choice-logic", JSON.stringify(choiceLogics)))
                }), showChoiceLogic();
                var cur_absolute_id = cur_item.find(".question-id").attr("absolute_id"),
                    cur_choice_id = $(".edit-area-active").parents(".choice").attr("choice_absolute_id"),
                    has_logic_flag = edit.checkQuestionLogic(parseInt(cur_absolute_id, 10), cur_choice_id);
                has_logic_flag ? require.async(["home:static/js/survey/widget/sortable_popup.js"], function (e) {
                    e.show("该选项有关联的逻辑规则，删除选项会导致规则失效，确认删除？", "确定", "取消").then(function () {
                        $(".edit-area-active").parents(".choice").remove(), $.each(logic_relation, function (e, i) {
                            $.each(i, function (e, t) {
                                t && ($.each(t.source, function (e, i) {
                                    parseInt(i.question_id, 10) === parseInt(cur_absolute_id, 10) && parseInt(i.choice_id, 10) === parseInt(cur_choice_id, 10) && t.source.splice(e, 1)
                                }), 0 === t.source.length && i.splice(e, 1))
                            }), 0 === i.length && delete logic_relation[e]
                        }), edit.updateChoiceShowLogic()
                    })
                }) : $(".edit-area-active").parents(".choice").remove()
            } else showAlert("选项个数不能为0")
        }
        $(".edit-img").hide(), (14 === type_id || 15 === type_id) && updateUploadItem(questionChoice.siblings(".add-area")), updateUploadAll(), $(".edit-area-active").parent().hasClass("select_choice") || setUpdateStatus()
    }

    function upChildElement() {
        var e, i = !1;
        if ($(".edit-area-active").parents("td").hasClass("radio_array_title") || $(".edit-area-active").parents("td").hasClass("checkbox_array_title") ? (e = $(".edit-area-active").parents("tr"), e.index() > 1 && (i = !0)) : (e = $(".edit-area-active").parents(".choice"), e.index() > 0 && (i = !0)), i) {
            {
                var t = $(".edit-area-active").parents(".topic-type-question");
                t.find(".question-id").attr("absolute_id")
            }
            e.prev().before(e), $(".edit-area-active").parent().hasClass("select_choice") || setUpdateStatus()
        }
    }

    function downChildElement() {
        var e, i;
        $(".edit-area-active").parents("td").hasClass("radio_array_title") || $(".edit-area-active").parents("td").hasClass("checkbox_array_title") ? (e = $(".edit-area-active").parents("tr"), i = $(".edit-area-active").parents(".question-choice").find("tr")) : (e = $(".edit-area-active").parents(".choice"), i = $(".edit-area-active").parents(".question-choice").find(".choice"));
        var t = e.index();
        if (t < i.length) {
            {
                var s = $(".edit-area-active").parents(".topic-type-question");
                s.find(".question-id").attr("absolute_id")
            }
            e.next().after(e), $(".edit-area-active").parent().hasClass("select_choice") || setUpdateStatus()
        }
    }

    function handleChildElement() {
        require.async(["home:static/js/survey/widget/choice_operate_dialog.js"], function (e) {
            e.show("确定", "取消")
        })
    }

    function editSelect(e) {
        var i = '<ul class="question-choice select-ul" >',
            t = $(e).siblings(".question-title").find(".question-id").attr("absolute_id");
        $(e).siblings(".question-choice").find(".choice").each(function () {
            var e = $(this).attr("choice_absolute_id");
            if (i += '<li class="choice select_choice" has_other="N" choice_absolute_id=' + $(this).attr("choice_absolute_id") + '><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true">' + $(this).html() + "</div></div>", i += '<div class="option-tips">', redirect_relation && redirect_relation[t] && !redirect_relation[t][0] && redirect_relation[t][e]) {
                var s = "";
                $.each(redirect_relation[t][e], function (e) {
                    if (parseInt(e, 10) < 0) {
                        var i = -1 === parseInt(e, 10) ? "提前结束(计入结果)" : "提前结束(不计入结果)";
                        s = '<span class="choice_show_logic_show_questions">' + i
                    } else s = '<span class="choice_show_logic_show_questions">跳转', s += $('[absolute_id="' + e + '"]').html() + "&nbsp"
                }), s += "</span>", i += s
            }
            i += "</div></li>"
        }), i += "</ul>", $(e).siblings(".question-choice").remove(), $(e).after(i);
        var s = '<div class="add-area visible-show"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li><li class="finish_edit_select" onclick="edit.finishEditSelect(this)" style="width: 60px;cursor: pointer;">完成编辑</li></ul></div>';
        $(e).siblings(".question-choice").after(s), $(e).siblings(".question-title").attr("type", "6"), $(e).remove(), edit.showChoiceLogic(), edit.updateBySampleId(), elementInit(), edit.updateChoiceShowLogic()
    }

    function finishEditSelect(e) {
        $("#question-box").append($(".edit-img"));
        var i = '<select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
        $(e).parents(".add-area").siblings(".question-choice").find(".choice").each(function () {
            i += '<option class="choice" has_other="N" choice_absolute_id=' + $(this).attr("choice_absolute_id") + ">" + $(this).find(".edit-area").html() + "</option>"
        }), i += '</select><span class="edit-select" onclick="edit.editSelect(this)" style="width: 60%;display: inline-block;line-height: 30px;">编辑选项</span>', $(e).parents(".add-area").siblings(".question-choice").remove(), $(e).parents(".add-area").siblings(".question-title").after(i), $(e).parents(".add-area").siblings(".question-title").attr("type", "7"), $(e).parents(".add-area").remove(), $(".edit-img").hide(), updateUploadAll(), setUpdateStatus()
    }

    function uploadImg() {
        $(".upload-form").ajaxSubmit({
            dataType: "json", success: function (e) {
                var i = $(".edit-area-active").html();
                i += '<img src="' + e.img_url + '" name="' + e.img_id + '"  style="width:' + e.width + "px; height:" + e.height + 'px;"/>', $(".edit-area-active").html(i), $(".edit-area").find("img").each(function () {
                    new ImgEditSize($(this))
                }), $(".upload-img").val(""), updateUploadAll(), setUpdateStatus()
            }
        })
    }

    function isDefaultQuestion(e) {
        var i = ["单选题", "选择列表", "多选题", "单行填空题", "多行填空题", "矩阵单选题", "矩阵多选题", "描述说明", "图片单选题", "图片多选题"];
        return i.indexOf(e) >= 0 ? !0 : !1
    }

    function isDefaultChoice(e) {
        var i = /^(选项|矩阵行)\d*$/g;
        return null === e.match(i) ? !1 : !0
    }

    function checkSurveyName(e) {
        return 0 == e.length ? ($("html,body").animate({scrollTop: $(".title-content").offset().top - 50 + "px"}, 500), $(".survey-title .error-tips").text("问卷名称不能为空"), !1) : e.length > 17 ? ($("html,body").animate({scrollTop: $(".title-content").offset().top - 50 + "px"}, 500), $(".survey-title .error-tips").text("问卷名称不能超过17字"), !1) : !0
    }

    function showExclusiveOptions() {
        $(".topic-type-question").each(function () {
            if (8 === parseInt($(this).find(".question-title").first().attr("type"), 10)) {
                $(this).find(".exclusive-option-tip").remove();
                var e = $(this).find(".question-id").attr("exclusive-options");
                if (e) {
                    var i = e.split(","), t = $(this);
                    $.each(i, function (e, i) {
                        t.find(".choice[choice_absolute_id=" + i + "] .option-tips").append('<span class="exclusive-option-tip">与其他选项互斥</span>')
                    })
                }
            }
        })
    }

    function showChoiceRandom() {
        var e = [6, 7, 8, 9, 13, 14, 15];
        $(".topic-type-question").each(function () {
            var i = parseInt($(this).find(".question-title").first().attr("type"), 10);
            if (-1 != $.inArray(i, e)) {
                $(this).find(".choice-random-tip").remove();
                var t = parseInt($(this).find(".question-id").attr("choice-random"), 10),
                    s = parseInt($(this).find(".question-id").attr("choice-fixed"), 10);
                if (1 === t) {
                    var o = 9 == i || 13 == i ? "矩阵列随机乱序" : "选项随机乱序";
                    s > 0 && (o += "，固定最后" + s + "个选项"), o = '<div class="choice-random-tip">' + o + "</div>", $(this).find(".question-title").append(o)
                }
            }
        })
    }

    function showChoiceLogic() {
        var types = [6, 7, 8];
        $(".topic-type-question").each(function () {
            var type = parseInt($(this).find(".question-title").first().attr("type"), 10), _this = $(this);
            if (-1 != $.inArray(type, types)) {
                _this.find(".choice-logic-tip").remove();
                var choiceLogics = $(this).find(".question-id").attr("choice-logic");
                if (choiceLogics = eval(choiceLogics), choiceLogics instanceof Array && choiceLogics.length > 0) {
                    var choiceArr = {};
                    $.each(choiceLogics, function (e, i) {
                        var t = parseInt(i.choiceId, 10);
                        choiceArr[t] || (choiceArr[t] = []);
                        var s = $('.question-id[absolute_id="' + i.sourceQuestionId + '"]'),
                            o = parseInt(s.attr("index"), 10),
                            a = s.parents(".topic-type-content").find('.choice[choice_absolute_id="' + i.sourceChoiceId + '"]'),
                            c = $.trim(a.find(".edit-area").text());
                        c = c.length > 15 ? c.substring(0, 15) + "..." : c;
                        var n = "Q" + o + "-" + c + "选中，则隐藏该项";
                        choiceArr[t].push(n)
                    }), $.each(choiceArr, function (e, i) {
                        var t = '<div class="choice-logic-tip">' + i.join("<br>") + "</div>";
                        _this.find('.choice[choice_absolute_id="' + e + '"]').find(".option-tips").append(t)
                    })
                }
            }
        })
    }

    function updateQuestionType() {
        $(".survey-question-radio-choice").mouseenter(function () {
            $("div, td, li, label").removeClass("edit-area-active"), $(this).hasClass("edit-area-active") || $(this).addClass("edit-area-active"), $(".survey-question-radio-img-remove").hide(), $(this).find(".survey-question-radio-img-remove").show()
        }), $(".survey-question-radio-choice").mouseleave(function () {
            $(".survey-question-radio-img-remove").hide()
        }), $(".survey-question-checkbox-choice").mouseenter(function () {
            $("div, td, li, label").removeClass("edit-area-active"), $(this).hasClass("edit-area-active") || $(this).addClass("edit-area-active"), $(".survey-question-checkbox-img-remove").hide(), $(this).find(".survey-question-checkbox-img-remove").show()
        }), $(".survey-question-checkbox-choice").mouseleave(function () {
            $(".survey-question-checkbox-img-remove").hide()
        })
    }

    function updateUploadItem(e) {
        var i = e.siblings(".question-choice").find(".choice").length;
        50 > i ? e.show() : e.hide(), updateUploadAll()
    }

    function updateUploadAll() {
        $(".survey-question-upload-img-wrap").each(function () {
            var e = $(this).siblings(".question-choice").find(".choice").length;
            if (e % 4 == 0) $(this).css("position", "relative").css("left", 0).css("top", 0); else {
                var i = $(this).siblings(".question-choice").find(".choice:last"), t = i.offset(),
                    s = t.left + i.width() - 35 + "px", o = t.top - 57 + "px";
                $(this).css("position", "absolute").css("left", s).css("top", o)
            }
        })
    }

    function updateByChoiceQuote(e) {
        var e = arguments[0] ? arguments[0] : !1;
        $(".topic-type-question").each(function () {
            var i = parseInt($(this).find(".question-title").first().attr("type"), 10);
            if (6 === i || 7 === i || 8 === i) {
                var t = parseInt($(this).find(".question-id").attr("choice-quote"), 10);
                if (0 === t || isNaN(t)) {
                    if ($(this).find(".choice-quote-tip").length > 0) if (0 === $(this).find(".choice").length) {
                        $(this).find(".question-title").siblings().remove();
                        var s = "", o = $(this).find(".question-id").textContent, a = choice_absolute_id[o];
                        switch (i) {
                            case 7:
                                s += '<select class="question-choice" style="  padding: 0;margin: 15px 0 20px 35px;">';
                                for (var c = 1; 4 > c; c++) choice_absolute_id[o]++, a = choice_absolute_id[o], s += '<option class="choice" has_other="N" choice_absolute_id=' + a + ">选项" + c + "</option>";
                                s += '</select><span class="edit-select" style="  width: 60%;display: inline-block;line-height: 30px;" onclick="edit.editSelect(this)">编辑选项</span>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
                                break;
                            case 6:
                                s += '<ul class="question-choice"><li class="choice" has_other="N" choice_absolute_id=' + a + ' ><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项1 </div></div><div class="option-tips"></div></li>', choice_absolute_id[o]++, a = choice_absolute_id[o], s += '<li class="choice" has_other="N" choice_absolute_id=' + a + '><input type="radio" name="radio"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项2 </div><div></li><div class="option-tips"></div></ul>', s += '<div class="add-area visible-hide"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="operate visible-hide" ><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>';
                                break;
                            case 8:
                                s += '<ul class="question-choice"><li class="choice" has_other="N" choice_absolute_id=' + a + '><input type="checkbox" name="checkbox"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项1 </div></div><div class="option-tips"></div></li>', choice_absolute_id[o]++, a = choice_absolute_id[o], s += '<li class="choice" has_other="N" choice_absolute_id=' + a + '><input type="checkbox" name="checkbox"><div class="position-relative"><div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项2 </div></div><div class="option-tips"></div></li></ul>', s += '<div class="add-area visible-hide"><ul><li class="add-choice" title="增加" onclick="edit.addQuestion(this)"></li><li class="batch-add-choice" title="批量增加" onclick="edit.batchAddChoice(this)"></li></ul></div>', s += '<div class="operate visible-hide"><ul><li class="drag-area" title="移动"></li><li class="set-logic" title="逻辑设置" onclick="setLogic(this)"><li class="question-copy" title="复制" onclick="edit.questionCopy(this)"></li><li class="question-handle" title="操作" onclick="edit.questionHandle(this)"></li><li class="question-delete" title="删除" onclick="edit.questionDelete(this)"></li></ul></div>'
                        }
                        $(this).find(".question-title").after(s), elementInit()
                    } else $(this).find(".choice-quote-tip").remove()
                } else {
                    0 === $(this).find(".choice-quote-tip").length && e && (2 === $(this).find(".choice").length && "选项1 选项2" === $(this).find(".choice").find(".edit-area").text().trim() ? $(this).find(".choice").remove() : 3 === $(this).find(".choice").length && "选项1选项2选项3" === $(this).find(".choice").text() && $(this).find(".choice").remove()), $(this).find(".choice-quote-tip").remove();
                    var n = "";
                    switch (i) {
                        case 6:
                            n = "单选题";
                            break;
                        case 7:
                            n = "下拉选择题";
                            break;
                        case 8:
                            n = "多选题"
                    }
                    var s = '<div class="choice-quote-tip">&lt;' + n + "&gt此题目选项来自于" + $('[absolute_id="' + t + '"]').html() + "题中的选项</div>";
                    $(this).find(".question-title").after(s)
                }
            }
        })
    }

    return {
        sortQuestions: sortQuestions,
        attachLayer: attachLayer,
        updateChoiceShowLogic: updateChoiceShowLogic,
        checkQuestionLogic: checkQuestionLogic,
        saveSurvey: saveSurvey,
        scrollBox: scrollBox,
        visibleHandle: visibleHandle,
        questionHandle: questionHandle,
        showQuota: showQuota,
        questionCopy: questionCopy,
        questionDelete: questionDelete,
        addQuestion: addQuestion,
        batchAddChoice: batchAddChoice,
        removeChildElement: removeChildElement,
        upChildElement: upChildElement,
        downChildElement: downChildElement,
        handleChildElement: handleChildElement,
        editSelect: editSelect,
        finishEditSelect: finishEditSelect,
        uploadImg: uploadImg,
        isDefaultQuestion: isDefaultQuestion,
        isDefaultChoice: isDefaultChoice,
        showExclusiveOptions: showExclusiveOptions,
        updateByChoiceQuote: updateByChoiceQuote,
        updateQuestionType: updateQuestionType,
        updateUploadItem: updateUploadItem,
        updateUploadAll: updateUploadAll,
        updateBySampleId: updateBySampleId,
        showChoiceRandom: showChoiceRandom,
        showChoiceLogic: showChoiceLogic,
        collectContent: collectContent
    }
}(), showAlert = function (e) {
    require.async(["home:static/js/survey/widget/operate_popup.js"], function (i) {
        i.show(e, "确定", null)
    })
};