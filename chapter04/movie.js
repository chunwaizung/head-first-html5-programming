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
 	this.getNextShowing: function(){
 		var now = new Date().getTime();
 		for (var i = 0; i < this.showtimes.length; i++) {
 			var showtime = getTimeFromString(this.showtimes[i]);
 			if ((showtime - now) > 0) {
 				return "Next showing of " + this.title + " is " + this.showtimes[i];
 			}
 		}
 	};
 }

var krakeMovie = new Movie("泰坦尼克号","爱情动作片",5,["3:00pm","5:00pm","8:00pm"]);
alert(krakeMovie.getNextShowing());
