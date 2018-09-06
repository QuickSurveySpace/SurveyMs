
/**
 * 新建问卷api
 */
var requireModules =[
	'base-url'
];

window.top.registeModule(window,requireModules);
layui.define('base-url', function(exports) {
	var $ = layui.jquery;
	var baseApi = layui['base-url'];

	var url = {
		namespace: '../question/',
		"questionList": {//查询问卷列表
            type: 'POST',
			url: "questionList.do"
		},
		"saveQuestion": {//保存问卷
			type: 'POST',
			url: "saveQuestion.do"
		},
        "getQuestion": {//查询问卷
            url: "getQuestion.do"
        }
	}
	var result = $.extend({}, baseApi, url);

	exports('question-new-api', result);
});