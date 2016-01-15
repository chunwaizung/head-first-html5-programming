//*全局变量
//*
//*hfhtml5作者的位置
var ourCoords = {
	latitude: 47.624851,
	longitude: -122.52099
};
//创建谷歌地图的对象
var map; 

window.onload = getMyLocation;

function getMyLocation() {
	if (navigator.geolocation) { //利用这个检查确保浏览器支持地理定位API，如果存在这个对象，说明浏览器支持这个API
		//当geolocation确定了你的位置，就会调用传入的这个函数
		navigator.geolocation.getCurrentPosition(displayLocation, displayError); //displayLocation函数就是将要操纵位置的处理程序
	} else {
		alert("Oops, no geolocation support");
	}
}

function displayLocation(position) {//浏览器得到一个位置时就会调用这个函数。getCurrentPosition会传递一个位置（position对象）到这个函数，包含经度和纬度
	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude; 
	div.innerHTML += "(with " + position.coords.accuracy + " meters accuracy)";//精度

	var km = computeDistance(position.coords, ourCoords);//计算距离
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are" + km + "km from the wickedlySmart HQ";
	if(map = null){//为“无处可逃”添加的代码，确保只添加一次地图对象
	showMap(position.coords); //google maps API need a application key to get it work
	}
}
 
function displayError(error) { //geolocation会在确定位置失败时向这个函数传入一个error对象。其中包含一个数值码，描述了未能确定浏览器位置的原因。
	var errorType = {
		0: "Unknown error",
		1: "Permission denied by user",
		2: "Position is not available",
		3: "Request timed out"
	};
	var errorMessage = errorType[error.code];//error对象有一个code属性，其中包含一个0-3的数。根据code属性的不同，把一个错误消息串赋给一个新变量

	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}

	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

// --------------------- Ready Bake ------------------
// 计算地球上两个坐标之间的距离
// Uses the Spherical Law of Cosines to find the distance
// between two lat/long points
//
function computeDistance(startCoords, destCoords) {
	var startLatRads  = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads   = degreesToRadians(destCoords.latitude);
	var destLongRads  = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}

function degreesToRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}

// ----------------------------------------------------



//---------------------谷歌地图API----------------------
function showMap(coords) {
	var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude); //使用传入的坐标构造一个Googlemap对象
	var mapOptions = { //地图选项
		zoom: 10, 
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP //地图的类型
	};
	var mapDiv = document.getElementById("map"); //从DOM获取一个div，把地图绘制到这个div上
	map = new google.maps.Map(mapDiv,mapOptions);//取一个元素和我们的选项，创建一个地图对象
}




