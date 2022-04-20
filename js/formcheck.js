$(document).ready(function(){
  $("#next").click(function(){
if($("#firstname").filter(function() { return $(this).val(); }).length > 0){
    
if($("#lastname").filter(function() { return $(this).val(); }).length > 0){
if($("#tel").filter(function() { return $(this).val(); }).length > 0){
if($("#email").filter(function() { return $(this).val(); }).length > 0){
    
    $("#hide").css("display", "none");
    $("#messages").css("display", "inline-block");
        $("#back").css("display", "inline-block");
        $("#info").css("display", "inline-block");

          }}}}
  });
});
    $(document).ready(function(){
  $("#back").click(function(){
   
    $("#hide").css("display", "inline-block");
      $("#messages").css("display", "none");
      $("#agree").css("display", "none");
      $("#info").css("display", "none");

        
  });
});

  $(document).ready(function(){
  $("#sum").click(function(){
if($("#checkName").filter(function() { return $(this).text(); }).length > 0){
    if($("#check").filter(function() { return $(this).text(); }).length > 0){
            if($("#expiry").filter(function() { return $(this).text(); }).length > 0){
            if($("#check2").filter(function() { return $(this).text(); }).length > 0){
    $("#agree").css("display", "inline-block");
}}}}
  });
});
    