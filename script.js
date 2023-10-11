let crsr = document.querySelector(".curser");
document.querySelector(".main").addEventListener("mousemove",(data)=>{
    crsr.style.left = data.x +"px";
    crsr.style.top = data.y +"px";

})
