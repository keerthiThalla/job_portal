let buttonElement=document.getElementById("button1")
let imageElement=document.getElementById("image1");
buttonElement.onclick=function(){
    imageElement.src="https://www.w3schools.com/js/pic_bulbon.gif";
    buttonElement.textContent="Turn off";
}