$(document).ready(function(){
  $("#button").click(function(){
if($("#fullname").filter(function() { return $(this).val(); }).length > 0){  
if($("#tel").filter(function() { return $(this).val(); }).length > 0){
    
 alert("Your details were accepted, thank you for contact.");
        window.location.reload();
        }}
  });
});