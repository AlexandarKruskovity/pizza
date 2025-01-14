const hamburgerMenu= document.querySelector('.hamburgermenu');
const hamburgerIcon=document.querySelector('.hamburgericon');
 
 
hamburgerIcon.addEventListener('click',() =>{
    hamburgerMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
})