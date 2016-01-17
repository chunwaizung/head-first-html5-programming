/* mightygumball.js */
/*
 * get the content of a JSON file using Ajax 
 *
 */

window.onload = function() {
	var url = "http://gumball.wickedlysmart.com／gumball/gumball.com";
	//var url = "http://localhost/sales.json"; //测试时需要在浏览器输入http://localhost/mightygumball.html,直接打开mightygumball.html将无法获取json数据
 	var request = new XMLHttpRequest();
 	request.open("GET", url);
 	request.onload = function() {
 		if (request.status == 200) {
 			updateSales(request.responseText);
 		}
 	};
 	request.send(null);
}

function updateSales(responseText) {
 	var salesDiv = document.getElementById("sales");
 	var sales = JSON.parse(responseText); //转化为javascript对象
 	for (var i = 0; i < sales.length; i++) { //迭代处理每一个数组元素
 		var sale = sales[i];
 		var div = document.createElement("div"); //对每个元素，创建一个div，设置class属性以便css调整样式
 		div.setAttribute("class","saleItem");
 		div.innerHTML =  sale.name + " sold " + sale.sales + " gumball";
 		salesDiv.appendChild(div);
 	}
}

//如果你使用古代的浏览器。。。
function updateSalesForAncient(){
	var url = "http://localhost/sales.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onreadystatechange = function(){ //level 1的XMLHttpRequest没有onload，要使用onreadystatechange
		if (request.readyState == 4 && request.state == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}