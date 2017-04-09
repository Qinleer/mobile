var PicEChart = function() {};
var echartJson = []
function rs (o, k) { 
	echartJson[k] = o 
};
PicEChart.prototype = {
	//chartTyp:图的类型，chartName：统计图标题，legends：统计图统计的类型,data1饼图数据
	addPie: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var data1 = obj.data;

		//获取数据的函数
		//getData();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();
		});
		rs(myChart,elementID);
		//设置多图联动：
		//myChart.connect(myChart2);
		//myChart2.connect(myChart);
		function getchart() {
			var j;
			var leg = [];
			for(j in data1) {

				leg[j] = data1[j].name;
				//leg.push();
			}
			var labelStyle = {
					normal: {
						show: false
					}
				},
				option = {
					title: {
						text: chartName
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b} : {d}%"
					},
					legend: {
						x: 'right',
						icon: 'circle',
						orient: 'vertical',
						itemGap: 8,
						selectedMode: false,
						padding: [5, 10, 5, 10],
						data: leg
					},
					//设置拖拽
					calculable: false,
					color: ['#84ccc9', '#ffa58e', '#7ecef4', '#ff6085', '#6296e4', '#bbe84d', '#ffb401', '#29cd86', '#7690b1', '#00ded1'],

					series: [{
						name: chartName,
						type: 'pie',
						//设置饼图的大小
						radius: '80%',
						//饼图的位置
						center: ['50%', '45%'],
						label: labelStyle,
						//饼图值及其名称
						data: data1 //饼图的值为两个键值对{value:335, name:'<1m'},

					}]
				};

			return option;

		}

	},
	//简介饼图

	addHolPie: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var data1 = obj.data;
		var name = obj.name;

		//获取数据的函数
		//getData();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);

		function getchart() {
			var i;
			var j;
			var leg = [];
			var sum = 0;

			for(i in data1) {
				sum += data1[i].value;
			}
			console.log(sum)
			for(j in data1) {

				leg[j] = data1[j].name;
				//leg.push();
			}
			option = {
				title: [{
						text: chartName
					},
					{
						text: data1[0].name,
						left: '49%',
						top: '40%',
						textAlign: 'center',
						textBaseline: 'middle',
						textStyle: {
							color: '#6295e4',
							fontWeight: 'normal',
							fontSize: 16
						}
					}, {
						text: data1[0].value + '%',
						left: '49%',
						top: '48%',
						textAlign: 'center',
						textBaseline: 'middle',
						textStyle: {
							color: '#666',
							fontWeight: 'normal',
							fontSize: 16
						}
					}
				],

				legend: {
					x: 'right',
					icon: 'circle',
					orient: 'vertical',
					y: 'center',
					selectedMode: false,
					data: leg
				},
				tooltip: {
					trigger: 'item',
					formatter: "{b} : {d}%"
				},
				//设置拖拽
				calculable: false,
				color: ['#6295e4', '#afcffe'],
				series: [{
					hoverAnimation: false, //设置饼图默认的展开样式
					//设置饼图的大小
					radius: ['50%', '80%'],
					//饼图的位置
					center: ['50%', '45%'],
					type: 'pie',
					clockwise: true,
					startAngle: 90,
					itemStyle: {
						normal: {
							label: {
								show: false

							}
						}
					},

					data: data1 //饼图的值为两个键值对{value:335, name:'<1m'},

				}]
			};

			return option;

		}
	},

	//chartTyp:图的类型，chartName：统计图标题，legends：统计图统计的类型,name1为第一个值名称，data1为第一个值的所有值，name2为第二个值名称，data2为第二个值的所有值，Axisdata为x轴的值，
	addByLineOrBarForTwo: function(obj) {
		var elementID = obj.id;
		var chartTyp1 = obj.type1;
		var chartTyp2 = obj.type2;
		var chartName = obj.title;
		var legends = obj.legends;
		var name1 = obj.name1;
		var name2 = obj.name2;
		var data1 = obj.data1;
		var data2 = obj.data2;
		var Axisdata = obj.Axisdata;

		//获取数据的函数
		//getdata();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();

		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);
		//设置多图联动：
		//myChart.connect(myChart2);
		//myChart2.connect(myChart);
		function getchart() {
			var leg = [];
			leg.push(name1, name2);
			var itemStyle1 = {
				normal: {
					color: '#84ccc9',
					/*	borderColor: '#e1e1e1'*/
				},
				emphasis: {
					color: '#d0e4e3'
				}
			};
			var itemStyle2 = {
				normal: {
					color: '#ffa58d',
					/*borderColor: '#59b6ff'*/
				},
				emphasis: {
					color: '#fddfd7'

				}
			};
			var labelstyle = {
					normal: {
						show: true,
						position: 'outside',
						textStyle: {
							color: '#000',
							fontWeight: 'bolder',
							fontSize: '12',
							fontFamily: '微软雅黑',
						}
					},
					emphasis: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#000',
							fontWeight: 'bolder',
							fontSize: '12',
							fontFamily: '微软雅黑',
						}

					}
				},
				option = {
					title: {
						text: chartName
					},
					//设置关联
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}

					},
					legend: {
						orient: 'vertical',
						x: 'right',
						y: 'center',
						padding: [0, 10, 0, 0],
						selectedMode: false,
						data: leg
					},
					//设置拖拽
					calculable: false,
					grid: { // 控制图的大小,调整下面这些值就可以,				 
						x: 50,
						x2: 100,
						y2: 50, // y2可以控制 X轴跟Zoom控件之间的间隔,避免以为倾斜后造成 label重叠到zoom上
					},
					xAxis: [{
						type: 'category',
						data: Axisdata,
						/*	axisLine: {
								lineStyle: {
									color: '#ccc'
								}
							},*/
						splitLine: {

							lineStyle: {
								color: '#ccc',
								type: 'dotted'
							}　
						}
					}],
					yAxis: [{
						type: 'value',

						splitLine: {　　
							lineStyle: {
								color: '#ccc',
								type: 'dotted'
							}　　　　
						}
					}],
					series: [

						{
							name: name1,
							itemStyle: itemStyle1,
							barGap: '50%',
							barCategoryGap: '70%',
							barWidth: '20',
							type: chartTyp1,

							//data类型为数组
							data: data1
							/*label: labelstyle*/

						},
						{
							name: name2,
							barWidth: '20',
							itemStyle: itemStyle2,
							type: chartTyp2,
							data: data2

						}

					]
				};
			return option;
		}
	},

	//只有一类折线或者柱形图
	addLineOrBar: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var name1 = obj.name1;
		var data1 = obj.data1;
		var Axisdata = obj.Axisdata;

		//获取数据的函数
		//getdata();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();

		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);
		//设置多图联动：
		//myChart.connect(myChart2);
		//myChart2.connect(myChart);
		function getchart() {
			var leg=[];
			leg.push(name1);
			option = {
				title: {
					text: chartName
				},
				//设置关联
				tooltip: {
					//trigger: 'axis',
					formatter: "{a} <br/>{b} : {c}"

				},
				legend: {
					orient: 'vertical',
					x: 'right',
					y: 'center',
					padding: [0, 10, 0, 0],
					selectedMode: false,
					data: leg
				},
				//设置拖拽
				calculable: false,
				color: ['#84ccc9', '#ffa58e', '#7ecef4', '#ff6085', '#6296e4', '#bbe84d', '#ffb401', '#29cd86', '#7690b1', '#00ded1'],

				xAxis: [{
					type: 'category',
					data: Axisdata
				}],
				yAxis: [{
					type: 'value'

				}],
				series: [

					{
						name: name1,
						type: chartTyp,
						barGap: '10',
						barWidth: '25%',
						barMinHeight: '5',
						barMaxHeight: '50',
						//data类型为数组
						data: data1

					}

				]
			};

			return option;

		}

	},

	//折线图
	addLine: function(obj) {
		var elementID = obj.id;
		var chartName = obj.title;
		var legends = obj.legends;
		var name = obj.name;
		var data = obj.data;
		var Axisdata = obj.Axisdata;

		//获取数据的函数
		//getdata();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();

		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);

		function getchart() {
			option = {
				title: {
					text: chartName
				},
				//设置关联
				tooltip: {
					formatter: "{b}:{c}",
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}

				},

				//设置拖拽
				calculable: false,
				grid: { // 控制图的大小,调整下面这些值就可以,				 
					x: 50,
					x2: 100,
					y2: 50, // y2可以控制 X轴跟Zoom控件之间的间隔,避免以为倾斜后造成 label重叠到zoom上
				},
				color: ['#ffa58d', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'],
				xAxis: [{
					type: 'category',
					data: Axisdata,
					splitLine: {

						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}　
					}
				}],
				yAxis: [{
					type: 'value',
					splitLine: {

						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}　
					}

					//y轴单位
					//axisLabel : {
					//    formatter: '{value} °C'
					//}
				}],
				series: [

					{

						name: name,
						type: 'line',
						//data类型为数组
						data: data

					}

				]
			};

			return option;

		}

	},
	//柱形图
	addbar: function(obj) {
		var elementID = obj.id;
		var chartName = obj.title;
		var legends = obj.legends;
		var name = obj.name;
		var data = obj.data;
		var Axisdata = obj.Axisdata;

		//获取数据的函数
		//getdata();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();

		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		//设置多图联动：
		//myChart.connect(myChart2);
		//myChart2.connect(myChart);
		function getchart() {

			var itemStyle = {
				normal: {
					color: '#84ccc9'
					/*borderColor: '#e1e1e1'*/
				},
				emphasis: {
					color: '#e5e5e5'
				}
			};
			var labelstyle = {
					normal: {
						show: true,
						position: 'outside',
						textStyle: {
							color: '#000',
							fontWeight: 'bolder',
							fontSize: '12',
							fontFamily: '微软雅黑',
						}
					},
					emphasis: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#000',
							fontWeight: 'bolder',
							fontSize: '12',
							fontFamily: '微软雅黑',
						}

					}
				},
				option = {

					title: {
						text: chartName
					},
					//设置关联
					tooltip: {
						//trigger: 'axis',
						formatter: "{b} : {c}"

					},
					/*	label: labelstyle,*/
					//设置拖拽
					calculable: false,
					grid: { // 控制图的大小,调整下面这些值就可以,
						top: 40,
						x: 50,
						x2: 50,
						bottom: '42%', // y2可以控制 X轴跟Zoom控件之间的间隔,避免以为倾斜后造成 label重叠到zoom上
					},
					xAxis: [{
						type: 'category',
						data: Axisdata,
						axisLabel: {
							interval: 0,
							rotate: 45, //倾斜度 -90 至 90 默认为0  
							margin: 8,
						},
						splitLine: {

							lineStyle: {
								color: '#ccc',
								type: 'dotted'
							}　
						}
					}],
					yAxis: [{
						type: 'value',

						splitLine: {

							lineStyle: {
								color: '#ccc',
								type: 'dotted'
							}　
						}
					}],
					series: [

						{
							itemStyle: itemStyle,
							//name:name,
							type: 'bar',
							//data类型为数组
							data: data,
							barGap: '10',
							barWidth: '25%',
							barMinHeight: '5',
							barMaxHeight: '50'

						}

					]
				};

			return option;

		}

	},
	//堆叠柱状图

	addStackBar: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var name1 = obj.name1;
		var name2 = obj.name2;
		var data1 = obj.data1;
		var data2 = obj.data2;
		var stack = obj.stack;
		var Axisdata = obj.Axisdata;

		//获取数据的函数
		//getdata();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();

		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});

		rs(myChart,elementID);
		function getchart() {
			var leg = [];
			leg.push(name1, name2);
			var itemStyle1 = {
				normal: {
					color: '#eee',
					borderColor: '#e1e1e1'
				},
				emphasis: {
					color: '#e5e5e5'
				}
			};
			var itemStyle2 = {
				normal: {
					color: '#d6edff',
					borderColor: '#59b6ff'
				},
				emphasis: {
					color: '#64bbff'

				}
			};
			option = {
				title: {
					text: chartName
				},
				//设置关联
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}

				},
				legend: {
					orient: 'vertical',
					x: 'right',
					y: 'center',
					padding: [0, 10, 0, 0],
					selectedMode: false,
					data: leg
				},
				//设置拖拽
				calculable: false,
				grid: { // 控制图的大小,调整下面这些值就可以,				 
					x: 50,
					x2: 100,
					y2: 50, // y2可以控制 X轴跟Zoom控件之间的间隔,避免以为倾斜后造成 label重叠到zoom上
				},
				color: ['#eeeeee', '#d6edff', '#cd5c5c', '#ffa500', '#40e0d0'],
				xAxis: [{
					type: 'category',
					data: Axisdata,
					splitLine: {

						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}　
					}
				}],
				yAxis: [{
					type: 'value',
					splitLine: {　　
						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}　　　　
					}
				}],
				series: [{
						name: name1,
						type: chartTyp,
						stack: stack,
						itemStyle: itemStyle1,
						//data类型为数组
						data: data1,
						barGap: '10',
						barWidth: '10%',
						barMinHeight: '5',
						barMaxHeight: '50'

					},
					{
						name: name2,
						type: chartTyp,
						stack: stack,
						itemStyle: itemStyle2,
						data: data2

					}

				]
			};
			return option;
		}
	},

	//金属损失空心饼图
	addHollowPieByML: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var data1 = obj.data;
		var riskGradeList = obj.riskGradeList;

		//获取数据的函数
		//getData();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);
		//设置多图联动：
		//myChart.connect(myChart2);
		//myChart2.connect(myChart);
		function getchart() {

			//获取name
			var i;
			var j;
			var leg = [];
			var sum = 0;

			for(i in data1) {
				sum += data1[i].value;
			}

			for(j in data1) {

				leg[j] = data1[j].name;
				//leg.push();
			}

			var itemStyle = {
				normal: {
					//显示值到顶部
					label: {
						show: false
					}

				},
				emphasis: {
					label: {
						show: false

					}
				}
			};
			option = {
				title: [{
						text: chartName
					},
					{
						text: chartName + '\n' + sum,
						left: '49%',
						top: '40%',
						textAlign: 'center',
						textBaseline: 'middle',
						textStyle: {
							color: '#6295e4',
							fontWeight: 'normal',
							fontSize: 16
						}
					}, {
						text: '同比增长3.2',
						left: '49%',
						top: '52%',
						textAlign: 'center',
						textBaseline: 'middle',
						textStyle: {
							color: '#666',
							fontWeight: 'normal',
							fontSize: 16
						}
					}
				],
				tooltip: {
					formatter: "{b}:{d}%"
				},

				legend: {
					x: 'right',
					icon: 'circle',
					orient: 'vertical',
					y: 'center',
					padding: [0, 10, 0, 0],
					selectedMode: false,
					data: leg
				},
				//设置拖拽
				calculable: false,
				color: ['#6295e4', '#afcffe'],
				series: [{
					itemStyle: itemStyle,
					name: chartName,
					type: 'pie',
					//设置饼图的大小
					radius: ['50%', '80%'],
					//饼图的位置
					center: ['50%', '45%'],
					//饼图值及其名称
					data: data1 //饼图的值为两个键值对{value:335, name:'<1m'},
				}]
			};

			return option;

		}

	},
	//仪表盘
	addGauge: function(obj) {
		var elementID = obj.id;
		var chartName = obj.title;
		var chartTyp = obj.type;
		var data1 = obj.data;
		//获取数据的函数
		//getData();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);

		function getchart() {

			option = {
				title: [{
						text: chartName
					},
					{
						text: '同比增长11%',
						left: '49%',
						top: '75%',
						textAlign: 'center',
						textBaseline: 'middle',
						textStyle: {
							color: '#666',
							fontWeight: 'normal',
							fontSize: 16
						}
					}
				],

				tooltip: {
					formatter: "{a} <br/>{c} {b}"
				},
				toolbox: {
					show: true,

				},
				series: [{
					name: '药品配送率',
					type: 'gauge',
					startAngle: 200,
					endAngle: -20,
					center: ['50%', '60%'], // 默认全局居中
					radius: '100%',
					splitNumber: 2,
					axisLine: { // 坐标轴线
						lineStyle: { // 属性lineStyle控制线条样式
							color: [
								[0.5, '#6295e4'],
								[1, '#afcffe']
							],
							width: 50,

						}
					},
					pointer: {
						width: 2
					},
					axisLabel: {

						formatter: '{value}万',
						distance: -14

					},
					axisTick: {
						show: false

					},
					splitLine: { //分割线样式 

						length: 0
					},

					detail: {
						formatter: '{value}',
						offsetCenter: ['5%', '10%'], // x, y，单位px
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE		
							fontSize: 18,
							/*	fontWeight: 'bolder',*/
							color: '#6295e4'
						}

					},
					data: data1,
					/*pointer: {

						width: 0
					}*/
				}]
			};
			return option;

		}

	},
	//双仪表盘
	addDoubleGauge: function(obj) {
		var elementID = obj.id;
		var chartName = obj.title;
		var chartTyp = obj.type;
		var data1 = obj.data1;
		var data2 = obj.data2;
		//获取数据的函数
		//getData();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);

		function getchart() {

			option = {
				title: {
					text: chartName
				},
				tooltip: {
					formatter: "{a} <br/>{c} {b}"
				},
				toolbox: {
					show: true,

				},
				series: [{

					type: 'gauge',
					startAngle: 200,
					endAngle: -20,
					center: ['30%', '60%'], // 默认全局居中
					radius: '100%',
					splitNumber: 2,
					axisLine: { // 坐标轴线
						lineStyle: { // 属性lineStyle控制线条样式
							color: [
								[0.5, '#6295e4'],
								[1, '#afcffe']
							],
							width: 50,

						}
					},
					axisLabel: {

						formatter: '{value}万',
						distance: -16

					},
					axisTick: {
						show: false

					},
					splitLine: { //分割线样式 

						length: 0
					},
					"title": {
						"show": true,
						"offsetCenter": [0, "45%"], //标题位置设置
						"textStyle": { //标题样式设置
							"color": "#2d99e2",
							"fontSize": 15,
							"fontFamily": "微软雅黑",
							"fontWeight": "bold"
						}
					},
					detail: {
						formatter: '{value}' + '\n\n' + '同比增长11%',
						offsetCenter: [0, '-20'], // x, y，单位px
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE		
							fontSize: 18,
							fontWeight: 'bolder',
							color: '#0066cc'
						}

					},
					pointer: {

						width: 0
					},
					data: data1

				}, {

					type: 'gauge',
					startAngle: 200,
					endAngle: -20,
					center: ['70%', '60%'], // 默认全局居中
					radius: '80%',
					splitNumber: 2,
					axisLine: { // 坐标轴线
						lineStyle: { // 属性lineStyle控制线条样式
							color: [
								[0.5, '#6295e4'],
								[1, '#afcffe']
							],
							width: 40,

						}
					},
					axisLabel: {

						formatter: '{value}万',
						distance: -24

					},
					axisTick: {
						show: false,
						//	splitNumber:30
					},
					splitLine: { //分割线样式 

						length: 0
					},
					"title": {
						"show": true,
						"offsetCenter": [0, "55%"], //标题位置设置
						"textStyle": { //标题样式设置
							"color": "#2d99e2",
							"fontSize": 15,
							"fontFamily": "微软雅黑",
							"fontWeight": "bold"
						}
					},
					detail: {
						formatter: '{value}',
						offsetCenter: [0, '-20'], // x, y，单位px
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE		
							fontSize: 18,
							fontWeight: 'bolder',
							color: '#0066cc'
						}

					},
					pointer: {

						width: 0
					},
					data: data2

				}]
			};
			return option;

		}

	},

	//散点图
	addScatter: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var name1 = obj.name1;
		var name2 = obj.name2;
		var name3 = obj.name3;
		var data1 = obj.data1;
		var data2 = obj.data2;
		var data3 = obj.data3;
		var Axisdata = obj.Axisdata;
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();

		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);

		function getchart() {
			var leg = [];
			leg.push(name1, name2);
			var itemStyle1 = {
				normal: {
					color: '#eee',
					borderColor: '#e1e1e1'
				},
				emphasis: {
					color: '#e5e5e5'
				}
			};
			var itemStyle2 = {
				normal: {
					color: '#d6edff',
					borderColor: '#59b6ff'
				},
				emphasis: {
					color: '#64bbff'

				}
			};
			option = {
				title: {
					text: chartName
				},
				//设置关联
				tooltip: {

					trigger: 'axis',
					formatter: function(params) {
						console.log(params);
						// var res = '{a0}:{c0}<br/>{a1}:{c1}<br/>{b0}';

						var res = params[0].value[0] + '<br/>';
						for(var i = 0; i < params.length; i++) {
							res = res + params[i].seriesName + ":" + params[i].value[1] + "</br>"
						}
						return res
					},
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}

				},
				legend: {
					orient: 'vertical',
					x: 'right',
					y: 'center',
					padding: [0, 10, 0, 0],
					selectedMode: false,
					data: leg
				},
				//设置拖拽
				calculable: false,
				grid: { // 控制图的大小,调整下面这些值就可以,				 
					x: 50,
					x2: 100,
					y2: 50, // y2可以控制 X轴跟Zoom控件之间的间隔,避免以为倾斜后造成 label重叠到zoom上
				},
				color: ['#3ca3ff', '#6295e4', '#cd5c5c', '#ffa500', '#40e0d0'],
				xAxis: [{
					type: 'category',
					data: Axisdata,
					splitLine: {

						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}　
					}
				}],
				yAxis: [{
					type: 'value',
					splitLine: {　　
						lineStyle: {
							color: '#ccc',
							type: 'dotted'
						}　　　　
					}
				}],
				series: [{
						name: name1,
						type: chartTyp,
						data: data1
					},
					{
						name: name2,
						type: chartTyp,
						data: data2

					},
					{
						name: name3,
						type: chartTyp,
						data: data3

					}

				]
			};
			return option;
		}
	},
	//累计增长图
	addLjbar: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var legends = obj.legends;
		var name1 = obj.name1;
		var name2 = obj.name2;
		var data1 = obj.data1;
		var data2 = obj.data2;
		var stack = obj.stack;
		var Axisdata = obj.Axisdata;

		//获取数据的函数
		//getdata();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);
		// 为echarts对象加载数据
		myChart.setOption(option);

		function getchart() {
			var leg = [];
			leg.push(name1, name2);
			var itemStyle = {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			};
			var labelStyle = {
					normal: {
						show: true,
						position: 'inside',
						textStyle: {
							color: '#6295e4'
						}
					}
				},
				option = {
					title: {
						text: chartName
					},
					//设置关联
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						},
						formatter: function(params) {
							var tar = params[0];
							return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
						}

					},
					//设置拖拽
					calculable: false,
					grid: {
						left: '3%',
						right: '4%',
						bottom: '10%',
						containLabel: true
					},
					color: ['#d6edff', '#eeeeee', '#cd5c5c', '#ffa500', '#40e0d0'],
					xAxis: [{
						type: 'category',
						data: Axisdata,
						splitLine: {

							show: false
						}
					}],
					yAxis: [{
						type: 'value',
						splitLine: {　　
							show: false　　
						}
					}],
					series: [{
							name: name1,
							type: chartTyp,
							stack: stack,
							itemStyle: itemStyle,
							data: data1,
							barGap: '10',
							barWidth: '30%'
						},
						{
							name: name2,
							type: chartTyp,
							stack: stack,
							label: labelStyle,
							data: data2

						}

					]
				};
			return option;
		}
	},

	//字符云
	addWordCloud: function(obj) {
		var elementID = obj.id;
		var chartTyp = obj.type;
		var chartName = obj.title;
		var data = obj.data;
		var name = obj.name;

		//获取数据的函数
		//getData();
		// 基于准备好的dom，初始化echarts图表
		var myChart = echarts.init(document.getElementById(elementID));
		//option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize();

		});
		rs(myChart,elementID);

		function getchart() {

			option = {
				title: {
					text: chartName
				},
				tooltip: {
					trigger: 'item',
					formatter: "{b}:{c}"
				},

				series: [{
					name: chartName,
					type: chartTyp,
					size: ['100%', '100%'],
					shape: 'circle',
					gridSize: 40,
					sizeRange: [18, 36],
					rotationRange: [0, 90],
					rotationStep: 90,
					textStyle: {
						normal: {
							color: function(params) {
								var index = params.dataIndex;
								var newColor = "";
								var colorList = ['#84ccc9', '#ffa58e', '#7ecef4', '#ff6085', '#6296e4', '#bbe84d', '#ffb401', '#29cd86', '#7690b1', '#00ded1'];
								newColor = colorList[index];
								return newColor
							}

						}

					},
					data: data

				}]
			};

			return option;

		}
	}

}