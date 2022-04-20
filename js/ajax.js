   
        
         function loadAjax() {
             var i=0;
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    var jsonData = JSON.parse(request.responseText);
                    console.log(jsonData);
                    var length=jsonData.length;
                    for(i=0;i<length;i++){
                    var data = jsonData[i];
                       if(document.getElementById("name").value == data.name &&  document.getElementById("id").value == data.id && data.subscription == document.getElementById("cardnumber").value && document.getElementById("phone").value == data.phone &&
                         document.getElementById("last").value == data.last){
                       document.getElementById("hide2").style.display="none";
                           document.getElementById("ok").style.display="inline-block";
                          document.getElementById("messages").style.display="inline-block";

                       }
                    }
                    if(i==length){
                 document.getElementById("wrong").style.display="inline-block";
 
                    }
                     
                }
            }
              request.open('GET', 'https://api.myjson.com/bins/x5btp', true);
            request.send();
         }
