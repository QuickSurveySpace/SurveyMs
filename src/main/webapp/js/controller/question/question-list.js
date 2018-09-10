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
    'table-util',
    'btns',
    'authority',
    'toast',
    'table'

];

registeModule(window, requireModules, {
    'good-api': 'api/good-api'
});

//参数有顺序
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
    toast,
    table
) {

    var $ = layui.jquery;
    var $table = table;
    var mainTable;
    var MyController = {
        init: function () {
            var navId = request.getFixUrlParams("navId");

            var totalBtns = authority.getNavBtns(navId);
            var btnObjs = btns.getBtns(totalBtns);
            MyController.pageBtns = btns.getPageBtns(btnObjs);
            MyController.switchPageBtns = btns.getSwitchPageBtns(btnObjs);

            MyController.rowBtns = btns.getRowBtns(btnObjs);
            MyController.rowSwitchBtns = btns.getSwitchBtns(MyController.rowBtns);
            MyController.rowIconBtns = btns.getIconBtns(MyController.rowBtns);

            $('#page-btns').html(btns.renderBtns(MyController.pageBtns) + btns.renderSwitchBtns(MyController.switchPageBtns));
            btns.renderLayuiTableBtns(MyController.rowIconBtns, $("#barDemo"));

            mainTable = MyController.renderTable();
            MyController.bindEvent();
        },
        getQueryCondition: function () {
            var condition = formUtil.composeData($("#condition"));
            return condition;
        },
        renderTable: function () {
            return $table.render({
                elem: '#question-list'
                , height: 'full-100'
                , url: questionNewApi.getUrl('questionList').url
                , method: 'post'
                , page: true
                , limits: [10, 50, 100, 200]
                , cols: [[
                    {type: 'numbers'},
                    {field: 'id', title: '问卷ID', width: 80},
                    {field: 'title', title: '问卷名称', width: 260},
                    {
                        field: 'sTime', title: '开始时间', width: 160, templet: function (d) {
                            return moment(d.sTime).format("YYYY-MM-DD HH:mm:ss");
                        }
                    },
                    {
                        field: 'eTime', title: '结束时间', width: 160, templet: function (d) {
                            return moment(d.eTime).format("YYYY-MM-DD HH:mm:ss");
                        }
                    },
                    {field: 'createUserId', title: '创建人ID', width: 100},
                    {field: 'descp', title: '问卷描述', width: 300},
                    {
                        field: 'cTime', title: '创建时间', width: 160, templet: function (d) {
                            return moment(d.cTime).format("YYYY-MM-DD HH:mm:ss");
                        }
                    },
                    {fixed: 'right', width: 180, align: 'center', toolbar: '#barDemo'}
                ]]
            });
        },

        modify: function (rowdata) {
            var surveyId = rowdata.id;
            var url = request.composeUrl(webName + '/views/survey/question_new.html?surveyId='+surveyId);

            parent.layui.element.tabAdd('card', {
                title: '编辑问卷',
                content: '<iframe src="' + url + '" frameborder="0" onload="layer.closeAll(\'loading\');" ></iframe>',
                id: 'wwwwwwwwwwwwwwwwww'
            });

            parent.layui.element.tabChange('card', 'wwwwwwwwwwwwwwwwww');
        },

        view: function (rowdata) {
            window.open("preview-survey.html?tab=2&surveyId="+rowdata.id,"_blank");
        },

        delete: function (rowdata) {
            layer.confirm('确认删除数据?', {
                icon: 3,
                title: '提示',
                closeBtn: 0
            }, function (index) {
                layer.load(0, {
                    shade: 0.5
                });
                layer.close(index);

                request.request(userApi.getUrl('deleteUser'), {
                    id: rowdata.id
                }, function () {
                    layer.closeAll('loading');
                    toast.success('成功删除！');
                    MyController.refresh();
                }, true, function () {
                    layer.closeAll('loading');
                });
            });
        },

        refresh: function () {
            mainTable.reload();
        },

        bindEvent: function () {
            $table.on('tool(test)', function (obj) {
                var data = obj.data;
                if (obj.event === 'row-view') {
                    MyController.view(data);
                } else if (obj.event === 'row-edit') {//编辑
                    MyController.modify(data);
                } else if (obj.event === 'row-delete') {//删除
                    MyController.delete(data);
                }

            });

            //点击查询按钮
            $('#search-btn').on('click', function () {
                mainTable.reload({
                    where: MyController.getQueryCondition()
                });
            });

            //点击刷新
            $('body').on('click', '.refresh', MyController.refresh);
        }
    };

    window.list = {
        refresh: MyController.refresh
    }

    MyController.init();

});