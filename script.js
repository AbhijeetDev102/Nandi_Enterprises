const nav=document.getElementById("nav");
console.log(nav );
window.addEventListener("scroll", ()=>{
    if(window.screenY>0){
        nav.classList.add("changecolor");
      
    }
    else{
        nav.classList.remove("changecolor");
    }
})