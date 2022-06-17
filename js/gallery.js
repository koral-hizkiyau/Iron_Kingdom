function myFunction(imgs, y) {
document.getElementById("img-none").style.display = "none";
document.getElementById("text-none").style.display = "none";
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  if(y==1){
  var title=document.getElementById("img-h3-1").innerHTML;
  var text= document.getElementById("img-p1").innerHTML;
  document.getElementById("img-text-h3").innerHTML = title;
  document.getElementById("img-text").innerHTML = text;
  }
  else if(y==2){
  var title=document.getElementById("img-h3-2").innerHTML;
  var text= document.getElementById("img-p2").innerHTML;
  document.getElementById("img-text-h3").innerHTML = title;
  document.getElementById("img-text").innerHTML = text;
  }
  else if(y==3){
  var title=document.getElementById("img-h3-3").innerHTML;
  var text= document.getElementById("img-p3").innerHTML;
  document.getElementById("img-text-h3").innerHTML = title;
  document.getElementById("img-text").innerHTML = text;
  }
   else if(y==4){
   var title=document.getElementById("img-h3-4").innerHTML;
  var text= document.getElementById("img-p4").innerHTML;
  document.getElementById("img-text-h3").innerHTML = title;
  document.getElementById("img-text").innerHTML = text;
  }
   else if(y==5){
   var title=document.getElementById("img-h3-5").innerHTML;
  var text= document.getElementById("img-p5").innerHTML;
  document.getElementById("img-text-h3").innerHTML = title;
  document.getElementById("img-text").innerHTML = text;
  }
   else{
   var title=document.getElementById("img-h3-6").innerHTML;
  var text= document.getElementById("img-p6").innerHTML;
  document.getElementById("img-text-h3").innerHTML = title;
  document.getElementById("img-text").innerHTML = text;
  }
}