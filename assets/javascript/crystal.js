//making sure the DOM is ready
$(document).ready(function(){

//Global Varible 
var loss = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19);
var gemArray = [];
var total = 0;

//function to generate random gem values
	function gemFunc() {
		for (var i = 0; i < 4; i++){
		var gem = Math.floor(Math.random() * 12) + 1 ;
		gemArray.push(gem);
  }	
};
   gemFunc();
   $('.numberToMatch').html(crystalValue);
   //crystal value displays in console
   	console.log(crystalValue)
   		console.log(gemArray);


  $('.pic1').on("click", function(){
  //take the value and push it to total score
  // gemFunc();
	var gem1value = gemArray[0];
	console.log(gem1value);
	total = total + gemArray[0];
	$('.score').html(total);
	checkit();
});

  $('.pic2').on("click", function(){
  //take the value and push it to total score
	//gemFunc();
	var gem2value = gemArray[1];
	console.log(gem2value);
	total = total + gemArray[1];
	$('.score').html(total);
	checkit();
});

  $('.pic3').on("click", function(){
//take the value and push it to total score
	var gem3value = gemArray[2];
	console.log(gem3value);
	total = total + gemArray[2];
	$('.score').html(total);
	checkit();
 });

$('.pic4').on("click", function(){
//take the value and push it to total score
	var gem4value = gemArray[3];
	console.log(gem4value);
	total = total + gemArray[3];
	$('.score').html(total);
	checkit();
 });
//check to see if crystal value equals total
function checkit(){
if (crystalValue === total) {
	$(".winlossmessage").html("You won that round!");
    win = win + 1;
    $(".wins").html(win);
   //reset the game
   reset();
	}
else if (crystalValue < total) {
	$(".winlossmessage").html("You lost that round!");
	loss = loss + 1;
    $(".losses").html(loss);
   //reset the game
   reset();
	}
};

//reset the game
function reset(){
	gemArray.length = 0;
	gemFunc();
	crystalValue = Math.floor(Math.random() * (102)+ 19)
	$('.numberToMatch').html(crystalValue);
	total = 0;
	$('.score').html(total);
	console.log(gemArray)
}

});