window.onload = getMyLocation;
function getMyLocation() {
	if (navigator.geolocation) { //利用这个检查确保浏览器支持地理定位API，如果存在这个对象，说明浏览器支持这个API
		navigator.geolocation.getCurrentPosition(displayLocation); //displayLocation函数就是将要操纵位置的处理程序
	} else {
		alert("Oops, no geolocation support");
	}
}

function displayLocation(position) {
	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude; 
	alert("hh");
}