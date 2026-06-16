

 let position=0;
 let val=0;
 function changecolor(){
  const element  =document.getElementById("Testtext");
    element.style.color="red";
    element.style.backgroundColor="yellow";
    }
function animation(){
    position+=1;
  const  element=document.getElementById("Testtext");
   element.style.transform = `translateX(${position}px)`;
    if(position<=200){

        setTimeout(animation,16);
    }
}
requestAnimationFrame(animation);
    
function add(){
val+=1;
document.getElementById("abc").value=val;
 
}