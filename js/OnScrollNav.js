let navbar =document.querySelector('.nav-holder')
window.onscroll=()=>{

    if (window.scrollY>60) {
        navbar.classList.add('nav-holder-background');
        console.log('test');
    } else {
       navbar.classList.remove('nav-holder-background');  
    }
}