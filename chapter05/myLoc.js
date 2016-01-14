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