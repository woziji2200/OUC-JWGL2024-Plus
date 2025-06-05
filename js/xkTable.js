console.log("加载选课表格js");
console.log("原函数",queryKxkcList);

// function queryKxkcList2() {
//     var kcxxval = $("#kcxx").val()
//     if (kcxxval != kcsel) {
//         $("#kch").val("");
//     }
//     var sklsval = $("#skls").val()
//     if (sklsval != jssel) {
//         $("#jg0101id").val("");
//     }
//     // var kcxx = $("#kcxx").val();
//     var kch = $("#kch").val();
//     if (kch == '') {
//         kch = kcxxval;
//     }
//     // var skls = $("#skls").val();
//     var jg0101id = $("#jg0101id").val();
//     if (jg0101id == '') {
//         jg0101id = sklsval;
//     }
//     var skxq = $("#skxq").val();
//     var skjc = $("#skjc").val();
//     var endJc = $("#endJc").val();
//     var sfym = $("#sfym").is(":checked");
//     var sfct = $("#sfct").is(":checked");
//     var sfxx = $("#sfxx").is(":checked");
//     var skfs = $("#skfs").val();
//     var kkdw = "";
//     if ($("#kkdw").length) {
//         kkdw = $("#kkdw").val();
//     }
//     var kctype = "";
//     if (document.getElementById("kctype") != null && document.getElementById("kctype") != undefined) {
//         kctype = document.getElementById("kctype").value;
//     }
//     kcxx = encodeURI(encodeURI(kcxx));
//     skls = encodeURI(encodeURI(skls));

//     if (skjc != "" && skxq == "") {
//         window.qzAlert("danger", "选课‘节次’查询时，必须选择‘星期’组合一起查询！");
//         return;
//     }

//     if ((skjc == "" && endJc != "") || (skjc != "" && endJc == "")) {
//         window.qzAlert("danger", "开始节次和结束节次必须组合一起查询！");
//         return;
//     }

//     if (Number(skjc) > Number(endJc)) {
//         window.qzAlert("danger", "开始节次必须小于结束节次！");
//         return;
//     }

//     var param = "?kch=" + kch + "&jg0101id=" + jg0101id + "&skxq=" + skxq + "&skjc=" + skjc + "&endJc=" + endJc + "&sfym=" + sfym + "&sfct=" + sfct + "&sfxx=" + sfxx + "&skfs=" + skfs + "&kkdw=" + kkdw + "&kctype=" + kctype;
//     var qycqxk = "1";
//     var flag1 = false;
//     var flag2 = false;
//     if (qycqxk == "1") {
//         flag1 = true;
//     } else {
//         flag2 = true;
//     }

//     $("#mainDiv").html("<table id=\"dataView\" width=\"100%\" class=\"display\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"></table>");
//     $("#dataView").dataTable({
//         "bPaginate": true,
//         "bLengthChange": false,
//         "bFilter": false,
//         "bSort": false,
//         "bInfo": true,
//         "bAutoWidth": false,
//         "sPaginationType": "full_numbers",
//         "oLanguage": {
//             "sLengthMenu": "每页显示 _MENU_ 条记录",
//             "sZeroRecords": "对不起，查询不到任何相关数据",
//             "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
//             "sInfoEmtpy": "找不到相关数据",
//             "sProcessing": "正在加载中...",
//             "sSearch": "搜索",
//             "sInfoEmpty": "显示 0 至 0 共 0 项",
//             "oPaginate": { "sFirst": "首页", "sPrevious": "上一页 ", "sNext": "下一页 ", "sLast": "末页 " }
//         },
//         "bServerSide": true,
//         "iDisplayLength": 10,
//         "sAjaxSource": "/jsxsd/xsxkkc/xsxkBxqjhxk" + param,
//         "fnServerData": retrieveData,
//         "bProcessing": true,
//         "aoColumns": [
//             { "mDataProp": "xkh", "sTitle": "选课号", "sWidth": "115px" },
//             { "mDataProp": "kch", "sTitle": "课程编号", "sWidth": "115px" },
//             { "mDataProp": "kcmc", "sTitle": "课程名", "sWidth": "185px" },

//             { "mDataProp": "xf", "sTitle": "学分", "sWidth": "45px", sClass: "center" },
//             { "mDataProp": "skls", "sTitle": "上课教师" },
//             { "mDataProp": "sksj", "sTitle": "上课时间" },
//             { "mDataProp": "skdd", "sTitle": "上课地点" },
//             { "mDataProp": "bj", "sTitle": "课表备注" },
//             { "mDataProp": "xqmc", "sTitle": "上课校区" },
//             { "mDataProp": "xxrs", "sTitle": "限选人数", sClass: "center", "bVisible": flag1, "sWidth": "50px" },
//             { "mDataProp": "dclrs", "sTitle": "待处理人数", "sWidth": "55px", sClass: "center", "bVisible": flag1 },
//             { "mDataProp": "syrs", "sTitle": "剩余容量", "sWidth": "50px", sClass: "center" },
//             { "mDataProp": "ctsm", "sTitle": "时间冲突" },
//             { "mDataProp": "czOper", "sTitle": "操作", "sWidth": "80px", sClass: "center" },
//             { "mDataProp": "ctsm", "sTitle": "优选班级", "sWidth": "80px", sClass: "center" }
//         ]
//     });

// }
// window.queryKxkcList = queryKxkcList2;
