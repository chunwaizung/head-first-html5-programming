var scoops = 10;
while (scoops >= 0) {
	if (scoops == 3) {
		alert("Ice cream is running low");
	} else if (scoops > 9) {
		alert("Eat fast, the ice cream is going to melt");
	} else if (scoops == 2){
		alert("Going once!");
	} else if (scoops == 1){
		alert("Going twice!");
	} else if (scoops == 0){
		alert("Gone!");
	} else {
		alert("Still lots of ice cream left, come and get it.");
	}
	scoops -= 1;
}
alert("life without ice cream isn't the same");

var word1 = "a";
var word2 = "nam";
var word3 = "nal p";
var word4 = "lan a c";
var word5 = "a man a p";

var phrase = "";
for (var i = 0; i < 4; i++) {
	if (i == 0) {
		phrase = phrase + word5;
	} else if (i == 1){
		phrase = phrase + word4;
	} else if (i == 2){
		phrase = phrase + word1 + word3;
	} else if (i == 3){
		phrase = phrase + word1 + word2 + word1;
	}
}
alert(phrase);