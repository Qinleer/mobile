$(function() {

	var picECharts = new PicEChart();
	var data = new Array();
	data = [
		{ value: 22, name: '民营医院' ,label: {
					normal: {
						show: false
					},
					emphasis: {
						show: false
					}
				}},
		{ value: 33, name: '公立医院' ,label: {

					emphasis: {
						show: true
					}
				}}

	];

	picECharts.addHollowPieByML({ id: 'chain1', type: 'line', legends: ['1', '2'], title: '预约总量', data: data });
	picECharts.addHollowPieByML({ id: 'chain2', type: 'line', title: '预约总量', data: data });
	picECharts.addByLineOrBarForTwo({ id: 'chain3', title: '按机构等级门诊量统计', Axisdata: ['一级医院', '二级医院', '三级医院'], type1: 'bar', name1: '本期门诊量', data1: [121, 22, 30], type2: 'bar', name2: '上期门诊量', data2: [23, 30, 30] });
	picECharts.addbar({ id: 'chain4', title: '门诊量按机构排行', Axisdata: ['陕西省人民医院', '西北妇女儿童医院', '陕西省中医医院', '陕西省第二人民医院', '陕西省第四人民医院', '渭南市中心医院', '铜川市人民医院', '陕西省中医医院', '渭南市中心医院', '陕西省中心医院'], type: 'bar', data: [36, 22, 36, 42, 34, 79, 41, 64, 98, 21] })
	picECharts.addByLineOrBarForTwo({ id: 'chain5', title: '门诊量按地区统计', Axisdata: ['西安', '咸阳', '宝鸡', '铜川', '榆林', '汉中', '安康', '渭南', '商洛', '杨波'], type1: 'bar', name1: '门诊量', data1: [121, 22, 30, 45, 29, 78, 42, 65, 94, 23], type2: 'line', name2: '去年同期', data2: [23, 30, 30, 22, 21, 65, 19, 65, 43, 11] });
	picECharts.addLine({ id: 'chain6', title: '过去一年门诊量趋势', Axisdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type: 'line', data: [122, 22, 36, 44, 36, 78, 44, 60, 98, 24, 30, 78] })
	picECharts.addLine({ id: 'chain7', title: '近5门诊量趋势', Axisdata: ['2012年', '2013年', '2014年', '2015年', '2016年'], type: 'line', data: [12, 16, 10, 22, 27] })
	picECharts.addByLineOrBarForTwo({ id: 'chain8', title: '门诊人次同比增长', Axisdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], type1: 'line', name1: '乡镇卫生院', data1: [121, 22, 30, 45, 29, 78, 42, 65, 94, 23, 33, 45], type2: 'line', name2: '医院', data2: [23, 30, 30, 22, 21, 65, 19, 65, 43, 11, 65, 77] });

});