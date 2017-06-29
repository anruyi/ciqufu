//var targA = document.getElementById(iframe-allPsots).style.backgroundColor = "red";
//
//window.onload = function(){
//var a = document.getElementsByClassName("authortime");
//var b = document.getElementsByClassName("header-bgNav");
//
//var c = document.getElementById("test");
//var d = document.getElementById("hotPsots");
////a.style.color = "red";
//console.log(a+"+"+b.innerHTML+"+"+c.style.width+" "+d+" "+"end!");
////a.style.backgroundColor = "red";
//}
//console.log("hello");

/**
 *父页面调用子页面方法 
 * */
function reset(){
	var more = document.getElementById("iframe-article");
	var contentAll = document.getElementById("contentAll");
	var All = contentAll.getElementsByTagName("iframe");
	for(var i=0;i<3;i++){
		All[i].style.display = "block";
	}
	All[3].style.display = "none";
}

window.onload = function(){
	document.getElementById('iframe-hotPhsts').contentWindow.child();
//	document.getElementById("iframe-allPsots").contentWindow.disA();
//	document.getElementById("iframe-allPsots").contentWindow.allPostsChild();
}
function parent(){
//	alert("hello,I am father!");
}

function tabHome(){
	reset();
	document.getElementById("iframe-allPsots").contentWindow.disAll();
}
function tabMsg(){
	var more = document.getElementById("iframe-article");
	var contentAll = document.getElementById("contentAll");
	var All = contentAll.getElementsByTagName("iframe");
	for(var i=0;i<3;i++){
		All[i].style.display = "none";
	}
	more.style.display = "block";	
	console.log("hello");
}

function tabPoetry(){
	reset();
	document.getElementById("iframe-allPsots").contentWindow.disB();
}

function tabMusic(){
	reset();
	document.getElementById("iframe-allPsots").contentWindow.disA();
}

function tabArticle(){
	reset();
	document.getElementById("iframe-allPsots").contentWindow.disC();
}

function more(){
	console.log("main.js-more()");
	var more = document.getElementById("iframe-article");
	var contentAll = document.getElementById("contentAll");
	var All = contentAll.getElementsByTagName("iframe");
	for(var i=0;i<3;i++){
		All[i].style.display = "none";
	}
	more.style.display = "block";	
	console.log("main.js-more()");
}
