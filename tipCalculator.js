$(document).ready(function() {
//Hide the tip amount on load
	document.getElementById("totalTip").style.display = "none";
	document.getElementById("each").style.display = "none";

 $('#billAmount').blur(function(){
 	var billAmount = document.getElementById("billAmount").value;
    if(billAmount == ""){
    	$('#billError').html('please enter the bill amount');
 		$('#billError').css("display","block");
    }
 	else if(!billAmount.match(/^(\d+)?([.]?\d{0,2})?$/)){
 		$('#billError').html('Invalid input: Numbers allowed upto two decimal');
 		$('#billError').css("display","block");
 	}
 		else {
 			$('#billError').css("display","none");
 		}
 }); 

 $("#service").blur(function(){
 	var serviceQuality = document.getElementById("service").value;
 	if(serviceQuality == 0 ){
 		$("#serviceError").html("Please choose your service quality");
 		$("#serviceError").css("display","block");
 	}
 	else{
 		$("#serviceError").css("display","none");
 	}
 });

 $("#peopleAmount").blur(function(){
 	var numberOfPoeple = document.getElementById("peopleAmount").value;
 	if(!numberOfPoeple.match(/^[0-9\s]*$/)){
 		$("#peopleError").html("Only integers allowed");
 		$("#peopleError").css("display","block");
 	}
 	else{
 		$("#peopleError").css("display","none");
 	}
 })

$('#calculator').click(function(){
	var numberOfPoeple = document.getElementById("peopleAmount").value;
	var serviceQuality = document.getElementById("service").value;
 	var billAmount = document.getElementById("billAmount").value;
 	if(serviceQuality == 0){
 		$("#serviceError").html("Please choose your service quality");
 		$("#serviceError").css("display","block");
 	}
 	if(billAmount == ""){
 		$('#billError').html('please enter the bill amount');
 		$('#billError').css("display","block");
 	}
 	// If number of People field in empty
 	if (numberOfPoeple === "" || numberOfPoeple <= 1) {
   		 numberOfPoeple = 1;
      document.getElementById("each").style.display = "none";
	  } else {
	    document.getElementById("each").style.display = "block";
	  }
 		// Calculate tip
 		var tip = (billAmount * serviceQuality)/numberOfPoeple;
 		// Round of to two decimal places
  		tip = Math.round(tip * 100) / 100;
  		//next line allows us to always have two digits after decimal point
 		tip = tip.toFixed(2);
 	
 	  //Display the tip
  	document.getElementById("totalTip").style.display = "block";
  	document.getElementById("tip").innerHTML = tip;



})
 
 
 

});

