# head-first-html5-programming
head-first-html5-programming 课本练习

window.onload = init;
function init() { //通常需要在页面完全加载完之后再执行js代码,因为页面没加载完，DOM都没有，你执行个蛋？
	var planet = document.getElementById("greenplanet");
	planet.innerHTML = "Red Alert: hit by phaser fire!";
}

##插入元素到DOM
		var songItem = document.createElement("li");//新建元素，传入类型
		songItem.innerHTML = songName;//设置新元素的文本，用innerHTML
		var playlist = document.getElementById("playlist");//获取希望插入的元素
		playlist.appendChild(songItem);//用appendChild()函数把新元素插入到希望插入的元素 

##局部变量和全局变量
函数体外声明的，是全局变量
		var avator;
		var levelThreshold = 1000;//全局变量,页面链接到其它脚本，它们也会看到这些全局变量

		function getScore(points) {
			var score; //局部变量
			for (var i = 0; i < levelThreshold; i++) {
				//code here	
			}
		return score;
		}

		var beanCounter = 10; //全部变量

		function getNumberOfItems(ordertype) {
		var beanCounter = 0;  //和全局变量同名，将在此函数体内覆盖全部变量
		if (ordertype == "order") {
			//do some stuff with beanCounter...
		}
		return beanCounter;
		}

##函数
function addOne (num) {
	return num + 1;
}
var plusOne = addOne; //把addOne赋到一个新变量plusOne
var result = plasOne(1); //plasOne赋为一个函数，所以可以调用它并提供一个整型参数1
###函数可以没有名字
function(num) {
	return num + 1;
}
//同样地，把这个匿名函数赋给一个变量
var f = function(num){
	return num + 1;
}
//然后可以使用这个变量来调用函数
var result = f(1);

##---将函数作为值能够做什么----
function init() {
	alert("you rule!");
}
window.onload = init; //如果函数名后面使用了小括号，比如init()，就是说你希望调用函数init。如果只是使用名字而没有小括号，就会把这个函数值赋给onload属性。
//直接把一个匿名的函数赋给window.onload属性
window.onload = function() {
	alert("you rule!");
}
##-----------------------------

##创建对象

//将对象赋至一个变量时，会向变量提供这个对象的引用。它并不“保存”对象本身,所以，调用一个函数并传入一个对象时，实际上只是传递了对象引用－－类似于一个指针。这个引用的副本会传递到形参，它指向原来的对象
var fido = {
	name: "Fido", //类似字典的组织方式，中间用逗号间隔，！！！逗！！！号！！！不是分号！！！
	weight: 40,
	breed: "Mixed",
	loves:["walks", "fetching balls"]//最后一个属性不用加逗号了，嗯
}; //别看它这么长，占了4行，这实际上还是一个赋值语句，需要加分号。

###可以用对象做的一些事情

if (fido.weight > 35) { //点语法访问对象属性
	alert("WOOF");
} else {
	alert("yip");
}

var breed = fido["breed"] //类似字典的key-value风格访问对象属性
if (breed = "mixed") {
	alert("Best in show");
}

fido.weight = 70; //改变对象属性
fido.breed = "Chawalla/Great Dane mix";
fido.loves.push("Chewing bones"); //向对象属性（数组）增加元素，使用push()函数

var prop;
for (prop in fido) { //枚举对象属性
	alert("Fido has a " + prop + "property ");
	if (prop == "name") {
		alert("This is " + fido[prop]);
	}
}

var likes = fido.loves; //处理对象数组
var likeString = "Fido likes ";
for (var i = 0; i < likes.length; i++) {
	likeString += likes[i];
}
alert(likeString);

function bark(dog){ //向函数传入一个对象
	if (dog.weight > 25) {
		alert("WOOF");
	} else {
		alert("yip");
	}
}
bark(fido);

//任何时刻都可以增加或删除属性
//要向一个对象增加属性，只需要为一个新属性赋一个值
fido.age = 5; //从现在开始，fido就有了一个age属性
delete fido.age;//删除一个对象的属性,删除成功delete表达式会返回true

function loseWeight(dog) {
	dog.weight = dog.weight - 10;
}

loseWeight(fido); //把fido传入loseWeight时，赋给dog形参的是引用的一个副本（fido是对象的一个引用），而不是对象的副本，所以fido和dog指向同一个对象。

###对象中的函数
var baby = {
	name: "Fido",
	weight: 40,
	breed: "Mixed",
	loves:["walks", "fetching balls"],
	//对象也可以有函数：对象中的函数，叫做方法
	bark : function(){
	alert("WOOF!!!");
  }
};

//调用对象中的方法
baby.bark();

var movie3 = {
	name:"Planet 2333",
	type:"KeHuanPian",
	level:3,
	showTime:["5:00am","6:30pm","9:00pm"],
	getNextShowing:function() {
	var now = new Date().getTime();
//对象中的方法要使用this关键字访问对象自身的属性。相当于Objective－C的self
	for (var i = 0;i < this.showTime.length; i++) {
		var showtime = getTimeFromString(this.showTime[i]);
		if ((showtime - now) > 0) {
			return "Next showing of " + this.name + " is " + this.showTime[i];
		}
	}
	return null;
}
};

var newNextShowing = movie3.getNextShowing()
alert(newNextShowing);

//按照174行的方式构造一个movie对象，每一个movie对象都会有一大段重复的getNextShowing方法代码
// 这里可以使用***构造函数***来解决
//构造函数的名字，按照约定，首字母要大写，形参取我们希望的对象属性值
function Dog(name, breed, weight) { //可以想象成Objective－C里的 initWithName:Breed:Weight
	this.name   = name;
	this.breed  = breed;
	this.weight = weight;
	this.bark   = function(){
		if (this.weight > 25) {
			alert(this.name + " says WOOF!");
		} else {
			alert(this.name + "says Yip!");
		}
	};
}

 //调用构造函数前要加上关键字new
 var krake     = new Dog("Krake","Mixed",47);
 var tiny      = new Dog("Tiny","Chawalla",8);
 var clifford  = new Dog("Clifford","Bloodhound",65);

 krake.bark();//一旦得到对象，就可以调用它们的bark方法让每个Dog叫
 tiny.bark();
 clifford.bark();

 //构造movie

 function Movie(title, genre, rating, showtimes) {
 	this.title          = title;
 	this.genre          = genre;
 	this.rating         = rating;
 	this.showtimes      = showtimes
 	this.getNextShowing = function(){
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
//window对象相当于全局环境，所以alert()不加 window. 前缀也可以顺利解析
alert(krakeMovie.getNextShowing());
