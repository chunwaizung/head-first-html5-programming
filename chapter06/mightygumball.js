/* mightygumball.js */
/*
 * get the content of a JSON file using Ajax 
 *
 */

window.onload = function() {
	//var url = "http://gumball.wickedlysmart.com";
	var url = "sales.json";
 	var request = new XMLHttpRequest();
 	request.open("GET", url);
 	request.onload = function() {
 		if (request.status == 200) {
 			alert(request.responseText);
 			var div = document.getElementById("sales");
 			div.innerHTML = request.responseText;
 		}
 	};
 	request.send(null);
}