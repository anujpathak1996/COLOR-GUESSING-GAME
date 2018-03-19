//alert("connected");
var rel=document.querySelector("li");
rel.addEventListener("click" , function(){
	location.reload();                            			 // FUNCTION OF NEW GAME
});

var x = Math.floor(Math.random()*255);          		     // Math.random() generates a number between 0-1
var y = Math.floor(Math.random()*255);         				 // Creating Random Colors and printing them in jumbotron
var z = Math.floor(Math.random()*255);
var h1 = document.querySelector("h1");
h1.innerText="RGB=("+x+","+y+","+z+")";      

var btn = document.querySelectorAll("button");   			// SELECTING BUTTONS
var easy = document.querySelector("#easy");
btn.length=easy.addEventListener("click" , easy_function);	// WORKING OF EASY BUTTON
function easy_function(){											
	var lower_b3 = document.querySelector("#three");		
	lower_b3.remove();										// DELETING A BUTTON
	var lower_b4 = document.querySelector("#four");			// CREATING EASY MODE FOR GAME
	lower_b4.remove();
	var lower_b5 = document.querySelector("#five");
	lower_b5.remove();
	return btn.length;
}

for(var i=0;i<btn.length;i++){
	var r = Math.floor(Math.random()*255);
	var s = Math.floor(Math.random()*255);         			// Generating random colors
	var t = Math.floor(Math.random()*255);
	btn[i].style.background="rgb("+r+","+s+","+t+")";
}
var res = Math.floor(Math.random()*btn.length);             // SELECTING THE BUTTON FOR RIGHT ANSWER   
btn[res].style.background="rgb("+x+","+y+","+z+")";

function resultOutput(){								    // changing colors of jumbo and printing output
	var result = document.querySelector(".jumbotron");
	result.style.background=btn[res].style.background;
	for(var i=0;i<btn.length;i++)
		btn[i].style.background = btn[res].style.background;
}

var click_zero = document.querySelector("#zero");           // FUNCTIONS OF BUTTONS
click_zero.addEventListener("click" , function(){
	if(btn[0].style.background===btn[res].style.background){ //
		resultOutput();
	}
	else{
		btn[0].style.background="black";
	}
});
var click_one = document.querySelector("#one");
click_one.addEventListener("click" , function(){
	if(btn[1].style.background===btn[res].style.background){
		resultOutput();
	}
	else{
		btn[1].style.background="black";
	}
});
var click_two = document.querySelector("#two");
click_two.addEventListener("click" , function(){
	if(btn[2].style.background===btn[res].style.background){
		resultOutput();
	}
	else{
		btn[2].style.background="black";
	}
});
var click_three = document.querySelector("#three");
click_three.addEventListener("click" , function(){
	if(btn[3].style.background===btn[res].style.background){
		resultOutput();
	}
	else{
		btn[3].style.background="black";
	}
});
var click_four = document.querySelector("#four");
click_four.addEventListener("click" , function(){
	if(btn[4].style.background===btn[res].style.background){
		resultOutput();
	}
	else{
		btn[4].style.background="black";
	}
});
var click_five = document.querySelector("#five");
click_five.addEventListener("click" , function(){
	if(btn[5].style.background===btn[res].style.background){
		resultOutput();
	}
	else{
		btn[5].style.background="black";
	}
});