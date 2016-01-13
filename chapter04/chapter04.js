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

function addOne (num) {
	return num + 1;
}

var plusOne = addOne; //把addOne赋到一个新变量plusOne

var result = plasOne(1); //plasOne赋为一个函数，所以可以调用它并提供一个整型参数1

//函数可以没有名字

function(num) {
	return num + 1;
}

//同样地，把这个匿名函数赋给一个变量
var f = function(num){
	return num + 1;
}

//然后可以使用这个变量来调用函数
var result = f(1);

//---将函数作为值能够做什么----
function init() {
	alert("you rule!");
}
window.onload = init;
//直接把一个匿名的函数赋给window.onload属性
window.onload = function() {
	alert("you rule!");
}
//--------------------------

//创建对象
//将对象赋至一个变量时，会向变量提供这个对象的引用。它并不“保存”对象本身,所以，调用一个函数并传入一个对象时，实际上只是传递了对象引用－－类似于一个指针。这个引用的副本会传递到形参，它指向原来的对象
var fido = {
	name: "Fido", //类似字典的组织方式，中间用逗号间隔，！！！逗！！！号！！！不是分号！！！
	weight: 40,
	breed: "Mixed",
	loves:["walks", "fetching balls"]//最后一个属性不用加逗号了，嗯
}; //别看它这么长，占了4行，这实际上还是一个赋值语句，需要加分号。

//可以用对象做的一些事情

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

var movie1 = {
	name:"Plan 9 from Outer Space",
	type:"KongBuPian",
	level:2,
	showTime:["3pm","7pm","11pm"]
}

var movie2 = {
	name:"Forbidden Planet",
	type:"KeHuanPian",
	level:5,
	showTime:["5pm","9pm"]
}



















































