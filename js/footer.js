
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// img- big
function bigImg(x) {
  x.style.height = "78px";
  x.style.width = "78px";
}

function normalImg(x) {
  x.style.height = "60px";
  x.style.width = "60px";
}

//contact form
$(document).ready(function(){
  $("#form-send").click(function(){
 alert("Your details were accepted, thank you for contact.");
        window.location.reload();
  })
});
