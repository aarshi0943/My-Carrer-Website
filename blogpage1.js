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
    //---------------------SLIDESHOW---------------------------//
    $("#slideshow > div:gt(0)").hide();

   setInterval(function() { 
     $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
      }, 4000);
 //----------------TOGGLE EFFECT ON CLICK IN SPAM--------------//
 $(".clicktoshow1").click(function(){
		$("#show1").toggle();
	});
	$(".clicktoshow2").click(function(){
		$("#show2").toggle();
	});
	$(".clicktoshow3").click(function(){
		$("#show3").toggle();
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