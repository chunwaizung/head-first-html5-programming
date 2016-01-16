//如何从javascript做出请求

var url = "http://someserver.com/data.json"; //创建一个目标url
var request = new XMLHttpRequest(); //创建一个请求对象
request.open("GET",url)//这个request对象将使用GET方式获取url的请求。open用一个URL建立一个请求，并告诉这个请求对象要使用哪种请求，以便XMLHttpRequest验证连接。
request.onload = function() { //数据到达时，调用这个处理函数
	if (request.status == 200) {
		alert(request.responseText);//HTTP GET获取到数据可以在request对象的responseText属性中找到
	}
};
request.send(null); //告诉请求对象去获取数据。send()会把请求发送到服务器，如果不打算发送任何数据，就传入null。


