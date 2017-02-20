//making sure the DOM is ready
$(document).ready(function(){

//Global Varible 
var loss = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19)
var gemArray = [];
var total = 0

//function to genrate random gem values
	function gemFunc() {
		for (var i = 0; i < 4; i++){
		var gem = Math.floor(Math.random() * 12) + 1 ;
		gemArray.push(gem);
  }	
};
   gemFunc();
   $('.numberToMatch').html(crystalValue);
   //crystal value displays in console
   console.log(gemArray);


  $('.pic1').on("click", function(){
  //take the value and push it to total score
  // gemFunc();
	var gem1value = (gemArray[0]);
	total = total + gem1value;
	$('.score').html(total);
	checkit();
});

  $('.pic2').on("click", function(){
  //take the value and push it to total score
	//gemFunc();
	var gem2value = (gemArray[1]);
	total = total + gem2value;
	$('.score').html(total);
	checkit();
});

  $('.pic3').on("click", function(){
//take the value and push it to total score
	
	var gem3value = (gemArray[2]);
	total = total + gem3value;
	$('.score').html(total);
	checkit();
 });

$('.pic4').on("click", function(){
//take the value and push it to total score
	var gem4value = (gemArray[3]);
	total = total + gem4value;
	$('.score').html(total);
	checkit();
 });

function checkit(){
if (crystalValue === total) {
	$("#winlossmessage").html("You won that round!");
    win = win + 1;
    $("#wins").html(win);
   //reset
   reset();
	}
else if (crystalValue < total) {
	$("#winlossmessage").html("You lost that round!");
    $("#losses").html(loss++);
   //reset
   reset();
	}
};

function reset(){
	gemArray.length = 0;
	gemFunc();
	crystalValue = Math.floor(Math.random() * (102)+ 19)
	$('.numberToMatch').html(crystalValue);
	adder = 0;
	$('.score').html(total);
	console.log(gemArray)
}

});