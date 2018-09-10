
/**
 * 网点管理api
 */
var requireModules =[
	'base-url'
];

window.top.registeModule(window,requireModules);
layui.define('base-url', function(exports) {
	var $ = layui.jquery;
	var baseApi = layui['base-url'];

	var url = {
		namespace: '../net/',
		"netList": {
            type: 'POST',
			url: "netList.do"
		} ,
        "addNet": {
            type: 'POST',
            url: "addNet.do"
        },
        "updateNet": {
            type: 'POST',
            url: "updateNet.do"
        } ,
        "deleteNet": {
            url: "deleteNet.do"
        },
        "getNet": {
            url: "getNet.do"
        }
	}
	var result = $.extend({}, baseApi, url);

	exports('net-api', result);
});