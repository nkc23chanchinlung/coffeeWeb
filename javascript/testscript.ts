let pos=0;

function  move(){
 pos+=1;
 const abc=document.getElementById("Testtext");
 if(abc){
 abc.style.transform=`translateX(${pos}px)`;
}

}