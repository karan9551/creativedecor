const toggle_nav=document.querySelector(".toggler");
const nav_header=document.querySelector(".header");

const toggleNavbar =()=>{
    nav_header.classList.toggle('active')
}

toggle_nav.addEventListener('click',()=>toggleNavbar());
