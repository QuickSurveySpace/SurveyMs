
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
		namespace: '../investigate/',
		"investigateList": {
            type: 'POST',
			url: "investigateList.do"
		} ,
        "addInvestigate": {
            type: 'POST',
            url: "addInvestigate.do"
        },
        "updateInvestigate": {
            type: 'POST',
            url: "updateInvestigate.do"
        } ,
        "deleteInvestigate": {
            url: "deleteInvestigate.do"
        },
        "getInvestigate": {
            url: "getInvestigate.do"
        }
	}
	var result = $.extend({}, baseApi, url);

	exports('investigate-api', result);
});