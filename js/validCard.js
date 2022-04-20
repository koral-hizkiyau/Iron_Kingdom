

function yes(){
document.getElementById("hide2").style.display="inline-block";
      document.getElementById("hideText").style.display="none";

}


function No(){
document.getElementById("hide").style.display="inline-block";
  document.getElementById("hideText").style.display="none";
  
}


function validate_name(){


   var name =document.getElementById("namecard").value;
var cardHolderNameRegex = /^[a-z ]+$/;
      var myname = cardHolderNameRegex.exec(name);
         if(name==myname)
           {
    document.getElementById("checkName").innerHTML="&#128077;";

         }
}



function ValidateCreditCardNumber() {

  var ccNum = document.getElementById("cardNum").value;
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  var isValid = false;

  if (visaRegEx.test(ccNum)) {
    isValid = true;
  } else if(mastercardRegEx.test(ccNum)) {
    isValid = true;
  } else if(amexpRegEx.test(ccNum)) {
    isValid = true;
  } else if(discovRegEx.test(ccNum)) {
    isValid = true;
  }
  if(isValid) {
         document.getElementById("check").innerHTML="&#128077;";

  }
}


                        
   
function validMonthYear(){
   
const expiryMonth = document.getElementById('expiryMonth');
const expiryYear = document.getElementById('expiryYear');

  const month = expiryMonth.value;
  const year = expiryYear.value;
  
  // Create a date object from month and year, on the first
  // of that month. You could check the end of the month
  // but that would be a little more complicated as you'd need
  // to know how many days are in that month.
  const expiryDate = new Date(year + '-' + month + '-01');
  
  // You can compare date objects, this says if the expiryDate is
  // less than todays date, i.e. in the past. You could do <= if
  // you want to check whether they're the same date aswell.
  if (expiryDate < new Date()) {
    // Fails validation, show some error message to user
     

  } else {
    // Valid expiry
document.getElementById("expiry").innerHTML="&#128077;";
            

  }
}                       
                          
                          
                          
 function validate_cvv(){

     var cvv =document.getElementById('cvv').value;
         var myRe = /^[0-9]{3,3}$/;
         var myArray = myRe.exec(cvv);
         if(cvv!=myArray)
          {


         }else{
document.getElementById("check2").innerHTML="&#128077;";

            }
  

         }
                      
let flag3=1;
function checkBox(){
   var box=350;
    var flag1=1;
  var flag2=1;
    if(document.getElementById("machine").checked == true && flag1==1){
        box=box+20;
        flag1=0;
    }
        if(document.getElementById("spinning").checked == true && flag2==1){
            box=box+20;
                    flag2=0;

        }
     if(document.getElementById("1").checked == true && flag3==1){
        box=box+20;
        flag1=0;
    }
        if(document.getElementById("2").checked == true && flag3==1){
            box=box+20;
                    flag2=0;

        }
   
        if(document.getElementById("3").checked == true && flag3==1){
            box=box+40;
                    flag2=0;

        }

document.getElementById("agree").innerHTML="Billing Confirmation price: <b>"+box+"$</b> per <b> Month</b>, Confirm: "+"<button id="+"yes+"+" onclick="+"agree()"+" >Yes</button>";
}


 
       


function agree(){
 alert("The receipt was sent, see you:)");
    reserform();
}
function reserform(){
    window.location.reload();
}