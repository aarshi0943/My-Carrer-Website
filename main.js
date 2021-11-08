$(document).ready(function(){
	setTimeout(notification,6000);
	console.log("notification");
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
		$("#show1").slideToggle("slow");
	});
	$(".clicktoshow2").click(function(){
		$("#show2").slideToggle("slow");
	});
	$(".clicktoshow3").click(function(){
		$("#show3").slideToggle("slow");
	});
    $(".clicktoshow4").click(function(){
		$("#show4").slideToggle("slow");
	});
    $(".clicktoshow5").click(function(){
		$("#show5").slideToggle("slow");
	});
	$(".clicktoshow6").click(function(){
		$("#show6").slideToggle("slow");
	});
	 //-----------------POPUP SIGNIN FORM-------------------------//
	 $(".signin").click(function(){
	 	$("#signinform").css("display","block");
	 });
	 $("#close").click(function(){
	 	$("#signinform").css("display","none");
	 });
	 $("#close").hover(function(){
	 	$("#close").css("color","#a20b0b")},function(){
	 		$("#close").css("color","red")
	 	});
	 $("#signinform").mouseleave(function(){
	 	$("#signinform").css("display","none");
	 });
	 //--------------------GET STARTED BUTTON-------------------------//
	 $(".started").click(function(){
	 	window.location.href = "GetStarted.html";
	 });
	
	 //-----------------Hoverable Headings--------------------------//
	 $(".features-heading").hover(function(){
	 	$(this).addClass("features-heading-hover")
	 },function(){$(this).removeClass("features-heading-hover")});

	 //-----------------Hoverable Images----------------------------//
	 $(".hoverable-image").hover(function(){
	 	$(this).addClass("imagehover")},function(){
	 		$(this).removeClass("imagehover")
	 });
	 //-----------------Hoverable Menu-----------------------------//
	 $(".hoverable-menu").hover(function(){
	 	$(this).addClass("menuhover")},function(){
	 		$(this).removeClass("menuhover")
	 });
	 //------------------RESPONSIVE BARS---------------------------//
	 $("#bars i").click(function(){
	 	$(".dropdown-list").slideToggle("slow");
	 });
	 $(".dropdown-list").mouseleave(function(){
	 	$(".dropdown-list").css("display","none");
	 });
	 });