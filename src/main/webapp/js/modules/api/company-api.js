
/**
 * 客户基本信息管理api
 */
var requireModules =[
	'base-url'
];

window.top.registeModule(window,requireModules);
layui.define('base-url', function(exports) {
	var $ = layui.jquery;
	var baseApi = layui['base-url'];

	var url = {
		namespace: '../company/',
		"companyList": {
            type: 'POST',
			url: "companyList.do"
		} ,
        "addCompany": {
            type: 'POST',
            url: "addCompany.do"
        },
        "updateCompany": {
            type: 'POST',
            url: "updateCompany.do"
        } ,
        "deleteCompany": {
            url: "deleteCompany.do"
        },
        "getCompany": {//查询单个活动
            url: "getCompany.do"
        },
        "uploadLogoImg": {//上传公司Logo
            type: 'POST',
            url: "uploadLogoImg.do"
        },
        "uploadThemeImg": {//上传主题图片
            type: 'POST',
            url: "uploadThemeImg.do"
        }
	}
	var result = $.extend({}, baseApi, url);

	exports('company-api', result);
});