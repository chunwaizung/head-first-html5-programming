/* mightygumball.js */
/*
 * get the content of a JSON file using Ajax 
 *
 */

window.onload = function() {
	var url = "http://gumball.wickedlysmart.com／gumball/gumball.com";

}

function updateSales(sales) { //返回的新数据不再是一个json串，而是一个对象。
 	var salesDiv = document.getElementById("sales");

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