
// ##################### nav bar color change when move from initial position ###########################
document.addEventListener("scroll", ()=>{
    const nav=document.getElementById("nav");
    if(window.scrollY>0){
        nav.classList.add("changecolor");
    }
    else{
        nav.classList.remove("changecolor");
    }
})

// #################################### smooth scroll to services  ###################################
// function scrollToSection(Service) {
//     var section = document.getElementById(Service);
//     window.scrollTo({
//       top: section.offsetTop,
//       behavior: 'smooth'
//     });
//   }