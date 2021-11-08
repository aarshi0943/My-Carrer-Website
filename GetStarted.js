$(document).ready(function(){
	//-----------FUNCTION FOR NOTIFICATION BELL--------------//
	    function notification(){
		  var is_true = confirm("Would you like to recieve notifications from us ?");
	      if(is_true){
		    alert("Welcome to MY CAREER where learning never Stops !!");
	      }
	      else{
		    alert("Happy Learning we won't Disturb you .");
	     }
	 }
	 $(".notification i").click(notification);
	 //---------------GET STARTED AND SIGNIN BUTTON----------//
	 $(".started").click(function(){
	 	window.location.href = "GetStarted.html";
	 });
	 $(".signin").click(function(){
	 	window.location.href = "main.html";
	 });
	//------------------RESPONSIVE BARS---------------------------//
	 $("#bars i").click(function(){
	 	$(".dropdown-list").toggle();
	 });
});