
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
		namespace: '../projectDetail/',
		"projectDetailList": {
            type: 'POST',
			url: "projectDetailList.do"
		}
	}
	var result = $.extend({}, baseApi, url);

	exports('project-detail-api', result);
});