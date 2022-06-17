let count=1;
let sub=0;
function showForm() {
if(sub==0){
  if (typeof(Storage) !== "undefined") {
	$("#hide").hide();
		 
		  if (localStorage.review1) {
      $("#exFeedback").show();
    } else {
      $("form").show(); 
    }
	
	

  
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
  } //web storage
  else{
  $("#thank").show(); 
  $("form").hide();
  localStorage.review1=1;
 
  }
}


function nextPrev(){
if(count==1){
    $("#1").hide();
	$("#2").show();
	document.getElementById("s-2").style.background = "darkorange";
	count++;
	}
	else if(count==2){
	$("#2").hide();
	$("#3").show();
	document.getElementById("s-3").style.background = "darkorange";
	count++;
	}
	else if(count==3){
	$("#3").hide();
	$("#nextBtn").hide();
	$("#4").show();
	$("#subBtn").show();
	document.getElementById("s-4").style.background = "darkorange";
	sub=1;
	}
}
