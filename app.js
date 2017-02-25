$(document).ready(function(){
 
 $("#name").keyup(function(){

    var name=$("#name").val();
    if(name.length>20){
        $("#msg").show();
        $("#msg").removeClass("positive"); 
    	$("#msg").text("maxium limit 20 charecter").addClass("negative");
    	// $("#msg").removeClass("red");
    	// $("#msg").addClass("green");

    }
    else{
    	$("#msg").removeClass("negative");
    	$("#msg").addClass("positive");
    	$("#msg").hide();
    }
 });



 var validemail=function(elementValue){
 	 var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return emailPattern.test(elementValue);
 }
$("#email").keyup(function(){
   var value=$(this).val();
   var valid=validemail(value);
   if(!valid){
   	 $("#msg1").removeClass("positive");
     $("#msg1").text("not valid").addClass("negative");
   }
   else{
   	$("#msg1").removeClass("negative");
   	$("#msg1").text("valid").addClass("positive");
   }
});



 $("#pass").keyup(function(){
    var pass=$("#pass").val();
    if(pass.length<6){
        $("#msg2").show();
        $("#msg2").removeClass("positive"); 
    	$("#msg2").text("minimum 6 charecter").addClass("negative");
    	// $("#msg").removeClass("red");
    	// $("#msg").addClass("green");

    }
    else{
    	$("#msg2").removeClass("negative");
    	// $("#msg2").addClass("positive");
    	$("#msg2").hide();
    	$("#msg2").css("display", "none");
    }
 });

   
$("#register").click(function(){
     var name=$("#name").val();
     var email=$("#email").val();
     var pass=$("#pass").val();
       if( name ==''){
			$("#msg").text("Field must be required!!").addClass("negative");
		}

		if( email ==''){
			$("#msg1").text("Field must be required!!").addClass("negative");
		}

		if( pass ==''){
			$("#msg2").text("Field must be required!!").addClass("negative");
		}

});




});