
/**
 * 区域管理api
 */
var requireModules =[
	'base-url'
];

window.top.registeModule(window,requireModules);
layui.define('base-url', function(exports) {
	var $ = layui.jquery;
	var baseApi = layui['base-url'];

	var url = {
		namespace: '../region/',
		"regionList": {
            type: 'POST',
			url: "regionList.do"
		} ,
        "addRegion": {
            type: 'POST',
            url: "addRegion.do"
        },
        "updateRegion": {
            type: 'POST',
            url: "updateRegion.do"
        } ,
        "deleteRegion": {
            url: "deleteRegion.do"
        },
        "getRegion": {
            url: "getRegion.do"
        },
        "uploadRegionImg": {
            type: 'POST',
            url: "uploadRegionImg.do"
        }
	}
	var result = $.extend({}, baseApi, url);

	exports('region-api', result);
});