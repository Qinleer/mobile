$(function(){
    //页面加载完成以后，给多个src赋值[先加载第一个，然后间隔两秒加载第二个，再间隔两秒加载第三个，以此类推]		    
    var globelhost = "http://192.168.25.78:8081/cda/v3/da/newsingle?CODE="	
    $('.tabs').on('tap',"a", function(){
		var param = $(this)[0].dataset.param;
		var srcarr = []
    	if (param === '月') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"myglyymzl",
            	globelhost+"zgjgmzlfx"
            ];
    		rendDate("yyyy-MM")
    	}
    	if (param === '季') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"mzrczl",
            	globelhost+"mzrczl"
            ];
    		rendDate("yyyy年第q季")
    	}
    	if (param === '年') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"mzrczl",
            	globelhost+"mzrczl"
            ];
    		rendDate("yyyy年")
    	}
        rend(srcarr)
    })
    $('.tabs a:first-child').trigger('tap')
    // controlDate("MM", "-1")
    var tempQ = parseInt(new Date().Format('q'))
    var tempQY = parseInt(new Date().Format('yyyy'))
    $("#decrease").on('tap', function(){
    	var param = $('.tabs a.mui-active')[0].dataset.param;
    	if (param === '月') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"myglyymzl",
            	globelhost+"zgjgmzlfx"
            ];

    		rendDate("MM月份")
    	}
    	if (param === '季') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"mzrczl",
            	globelhost+"mzrczl"
            ];
            if (tempQ == 1) {
    			tempQ = 4
    			tempQY--
    		} else {
    			tempQ--
    		}
    		$('#currentDate').text(tempQY+"年"+tempQ+"季")
      //       currQ--;
    		// rendDate("","q",currQ,"季度")
    	}
    	if (param === '年') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"mzrczl",
            	globelhost+"mzrczl"
            ];
    		rendDate("yyyy年")
    	}
        rend(srcarr)
    })
    $("#increase").on('tap', function(){
    	var param = $('.tabs a.mui-active')[0].dataset.param;
    	if (param === '月') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"myglyymzl",
            	globelhost+"zgjgmzlfx"
            ];
    		rendDate("MM月份")
    	}
    	if (param === '季') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"myglyymzl",
            	globelhost+"mzrczl"
            ];
            // console.warn(currQ + temp)
            // if((currQ + temp) > 3){
            // 	currQ ;
            // }
            // 	else{
            // 		currQ ++ ;
            // }
    		// rendDate("","q",currQ,"季度")
    		if (tempQ > 3) {
    			if (tempQY < parseInt(new Date().Format('yyyy'))) {
					tempQY++
    			}					
    			tempQ = 1
    		} else if(tempQ == parseInt(new Date().Format('q')) && tempQY == parseInt(new Date().Format('yyyy'))){
    			
    		} else{
    			tempQ++
    		}
    		$('#currentDate').text(tempQY+"年"+tempQ+"季")
    	}
    	if (param === '年') {
            srcarr = [
            	globelhost+"mzrczl",
            	globelhost+"mzrczl",
            	globelhost+"mzrczl"
            ];
    		rendDate("yyyy年")
    	}
        rend(srcarr)
    })
})
function rend(arr){
    $.each(arr, function (i, n) {
        window.setTimeout(function () {
            // $("#item iframe").get(i).src = arr[i];
        }, i * 10);
    });
}
function rendDate(format){
	var cd = new Date().Format(format);
	$('#currentDate').text(cd)
}
// $('#item').ready(function(){
//     $('.html').append()
// })
$(document).ready(function(){
    $.ajax({
        url:'http://192.168.1.103:1211/mobile/json/ejson.json',
        method:'get',
        success:function(data){
            console.info(data);
            $('#item1').append(data.html)
        }
    })
})
