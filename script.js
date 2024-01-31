document.addEventListener("scroll", ()=>{
    const nav=document.getElementById("nav");
    if(window.scrollY>0){
        nav.classList.add("changecolor");
    }
    else{
        nav.classList.remove("changecolor");
    }
})