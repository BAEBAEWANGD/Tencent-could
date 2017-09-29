const user = document.getElementById("user");
const password = document.getElementById("password");

user.onfocus = function(){
	user.style.border = "1px solid blue";
};
password.onfocus = function(){
	password.style.border = "1px solid blue";
};
user.onblur = function(){
	user.style.border = "1px solid #E8E8E8";
};
password.onblur = function(){
	password.style.border = "1px solid #E8E8E8";
};
user.onmouseover = function(){
	user.style.border = "1px solid gray";
};
user.onmouseout = function(){
	user.style.border = "1px solid #E8E8E8";
};
password.onmouseover = function(){
	password.style.border = "1px solid gray";
};
password.onmouseout = function(){
	password.style.border = "1px solid #E8E8E8";
};