let menu =document.getElementById('menu')
let navBarToggle = document.getElementById('navbar_toggle')
let bars =  document.getElementById('bars')
let close = document.getElementById('close')
let logo =  document.getElementById('logo')

navBarToggle.addEventListener('click', ()=>{
    navBarToggle.classList.add('no_show')
    menu.classList.toggle('active')
    close.classList.toggle('close-times');
    logo.classList.add('logo-inactive');


})
close.addEventListener('click', () => {
    navBarToggle.classList.remove('no_show')
    menu.classList.toggle('active')
    close.classList.toggle('close-times');
    logo.classList.remove('logo-inactive')
})
