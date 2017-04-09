$(document).ready(function () {
	// 说明：JS时间Date格式化参数
    // 参数：格式化字符串如：'yyyy-MM-dd HH:mm:ss'
    // 结果：如2016-06-01 10:09:00
	 Date.prototype.Format = function (fmt) {//author: meizz 
        var o = {
            "M+": this.getMonth() + 1, 
            "d+": this.getDate(), 
            "H+": this.getHours(),  
            "m+": this.getMinutes(),  
            "s+": this.getSeconds(), 
            "q+": Math.floor((this.getMonth() + 3) / 3), 
            "S": this.getMilliseconds()  
        };
        var year = this.getFullYear();
        var yearstr = year + '';
        yearstr = yearstr.length >= 4 ? yearstr : '0000'.substr(0, 4 - yearstr.length) + yearstr;
        
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (yearstr + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    console.info(new Date().Format('q'))
})
