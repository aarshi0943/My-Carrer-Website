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
	//--------------Creating Toggle EFFECT ON FEATURES --------------------//
	$(".clicktoshow1").click(function(){
		$("#show1").toggle();
	});
	$(".clicktoshow2").click(function(){
		$("#show2").toggle();
	});
	$(".clicktoshow3").click(function(){
		$("#show3").toggle();
	});
    $(".clicktoshow4").click(function(){
		$("#show4").toggle();
	});
    $(".clicktoshow5").click(function(){
		$("#show5").toggle();
	});
	$("img").hover(function(){
		$(this).addClass("resize")},function(){
		$(this).removeClass("resize")
	});
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