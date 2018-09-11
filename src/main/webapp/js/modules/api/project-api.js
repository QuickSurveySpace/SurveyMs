
/**
 * 调查管理api
 */
var requireModules =[
	'base-url'
];

window.top.registeModule(window,requireModules);
layui.define('base-url', function(exports) {
	var $ = layui.jquery;
	var baseApi = layui['base-url'];

	var url = {
		namespace: '../project/',
		"projectList": {
            type: 'POST',
			url: "projectList.do"
		}
	}
	var result = $.extend({}, baseApi, url);

	exports('project-api', result);
});