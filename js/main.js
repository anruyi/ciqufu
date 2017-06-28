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
window.onload = function(){
	document.getElementById('iframe-hotPhsts').contentWindow.child();
//	document.getElementById("iframe-allPsots").contentWindow.disA();
//	document.getElementById("iframe-allPsots").contentWindow.allPostsChild();
}
function parent(){
	alert("hello,I am father!");
}

//function tabHome();
//function tabMsg();

function tabPoetry(){
	document.getElementById("iframe-allPsots").contentWindow.disB();
}

function tabMusic(){
	document.getElementById("iframe-allPsots").contentWindow.disA();
}

function tabArticle(){
	document.getElementById("iframe-allPsots").contentWindow.disC();
}
