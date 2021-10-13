
"use strict"

const navItem = document.getElementsByClassName('nav-item')
const navInput = document.getElementById('menu')


navItem.addEventListener('click', e => {
    
    navInput.removeAttribute('checked')

})
