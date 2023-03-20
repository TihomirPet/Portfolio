let navbar =document.querySelector('.nav-holder')
window.onscroll=()=>{

    if (window.scrollY>10) {
        navbar.classList.add('nav-holder-background');
     
    } else {
       navbar.classList.remove('nav-holder-background');  
    }
}