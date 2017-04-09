$(document).ready(function () {
    function getURLParameter(name) {
        return decodeURI((RegExp('[?|&]'+name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]);
    }
    //url参数
    var code = getURLParameter("code");

    //获取multi对象
    if (!isNull(code)) {
    	var paramStr = location.search.substring(1, location.search.length)+"&tab=DAD_MULTI";
        $.ajax({
            type: "post",
            url: "http://192.168.25.78:8081/cda/jsp/cache/ActionBranchInterFace.jsp?action=SingleData&CODE=ADQCRBBGLS",
            contentType: "text/html",
	        data: escape(encodeURIComponent(paramStr)),
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.messager.alert("提示消息", "加载页面数据请求失败!" + textStatus + "----" + errorThrown, "info");
            },
            success: function (data) {

                if (data.total_single > 0) {

                    document.title = data.rows_single[0].名称;

                    var 布局 = data.rows_single[0].布局;

                    //不要直接加载布局，否则的话会阻塞主页面，用户体验比较差
                    //$("#mycontainer").html(布局);		  
                     
                    if ((navigator.userAgent.indexOf('MSIE') < 0)) {
                        // alert('你是使用IE')
                        //把布局里面所有iframe的src都取出来保存为数组，
                        var srcarr = [];
                        $.each($(布局).find("iframe"), function (i, n) {
                    		 var src = $(n).attr("src");
                             srcarr.push(src);                       
                        });
                        //把“布局”中所有iframe的src都清空
                        布局 = 布局.replace(new RegExp(/src="[^"\\]*(?:\\[\s\S][^"\\]*)*"/gm), "src=\"\"");
                        布局 = 布局.replace(new RegExp(/src='[^'\\]*(?:\\[\s\S][^'\\]*)*'/gm), "src=\"\"");
                        //然后把多个空的iframe加载到主页面
                        $("#mycontainer").html(布局);

                        //页面加载完成以后，给多个src赋值[先加载第一个，然后间隔两秒加载第二个，再间隔两秒加载第三个，以此类推]		    		
                        $(function () {
                            $.each(srcarr, function (i, n) {
                                window.setTimeout(function () {
                                    $("#mycontainer iframe").get(i).src = srcarr[i];
                                }, i * 2000);
                            });
                        });
                    } else {
                        $("#mycontainer").html(布局);
                    }
                    
                    $("#officetree").height($("#mycontainer").height()-2);

                }

            }
        });

    }

});