/* mightygumball.js */
/*
 * get the content of a JSON file using Ajax 
 *
 */

 var lastReportTime = 0;

window.onload = function() {
	var url = "http://gumball.wickedlysmart.com／gumball/gumball.com";
	setInterval(refresh, 3000); //setInterval()返回一个id标识这个定时器，把这个id保存在一个变量里，以后可以通过传递id到clearInterval方法停止它
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
 	if (sales.length > 0) {
 		lastReportTime = sales[sales.length -1].time;
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

function refresh() {
	var url = "http://gumball.wickedlysmart.com／gumball/gumball.com/?callback=updateSales" + "&lastreporttime" + lastReportTime + "&random=" + (new Date()).getTime(); //url放在这里
	var newScriptElement = document.createElement("script");//新建一个script元素
	newScriptElement.setAttribute("src",url);//设定新script的src和id
	newScriptElement.setAttribute("id","jsonp");

	var oldScriptElement = document.getElementById("jsonp");//看看有没有这个元素
	var head = document.getElementsByTagName("head")[0]; //返回与给定标记名匹配到元素数组
	if (!oldScriptElement) {//如果没有
		head.appendChild(newScriptElement); //增加到head
	} else {//如果已经存在
		head.replaceChild(newScriptElement, oldScriptElement); //替换掉 -->replaceChild(new, old)
		//如果只是用新的url替换src属性，浏览器不会把它当做一个新元素，所以不会发出请求，要强制浏览器作出请求，必须创建这个全新的script元素。替换掉整个<script>元素。这种技术称为“脚本插入”
	}
}