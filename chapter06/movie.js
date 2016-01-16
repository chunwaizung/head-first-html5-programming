function getTimeFromString(str) {
	var theTime = new Date();
	var time = str.match(/(\d+)(?::(\d\d))?\s*(p?)/); //什么鬼？
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	return theTime.getTime();
}

 function Movie(title, genre, rating, showtimes) {
 	this.title     = title;
 	this.genre     = genre;
 	this.rating    = rating;
 	this.showtimes = showtimes
 	this.getNextShowing = function(){ //此处是等于号！！！不是冒号！！！声明一个对象才是冒号
 		var now = new Date().getTime();
 		for (var i = 0; i < this.showtimes.length; i++) {
 			var showtime = getTimeFromString(this.showtimes[i]);
 			if ((showtime - now) > 0) {
 				return "Next showing of " + this.title + " is " + this.showtimes[i];
 			}
 		}
 	};
 }

var krakeMovie = new Movie("泰坦尼克号","爱情动作片",5,["3:00pm","5:00pm","8:00pm","11:00pm"]);
alert(krakeMovie.getNextShowing());

//CHAPTER06-------JSON
var plan9Movie = new Movie("Plan 9 from Outer Space","Cult Classic",2,["3:00pm","5:00pm","11:00pm"]); //创建一个对象
var jsonString = JSON.stringify(plan9Movie);//转化为json格式的串
alert(jsonString);

var jsonObject = JSON.parse(jsonString);//json串转化为对象
alert("JSON movie is " + jsonObject.title);
