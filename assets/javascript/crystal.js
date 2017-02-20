$(document).ready(function(){

//Global Varible 
var loss = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19)
var gemArray = [];
var total = 0


	function gemFunc() {
		for (var i = 0; i < 4; i++){
		var gem = Math.floor(Math.random() * 12) + 1 ;
		gemArray.push(gem);
  }	
};
   gemFunc();
   $('.numberToMatch').html(crystalValue);
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
    $(".wins").html(win++);

}
else if (crystalValue < total) {
	$("#winlossmessage").html("You lost that round!");
    $("#losses").html(loss++);

}
}

})
