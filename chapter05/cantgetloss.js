function getMyLocation() {
	if (navigator.geolocation) {
		var watchButton = document.getElementById("watch");
		watchButton.onclick = watchLocation;
		var clearWatchButton = document.getElementById("clearwatch");
		clearWatchButton.onclick = clearwatch;
	} else {
		alert("Oops, no geolocation support");
	}
}

var watchId = null;//全局变量，以后可以通过这个id来clear追踪状态

function watchLocation(){
	watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
	alert("正在追踪位置");
}

function clearwatch() {
	if (watchId) {
		navigator.geolocation.clearWatch(watchId);
		watchId = null;
		alert("停止追踪位置");
	}
}

