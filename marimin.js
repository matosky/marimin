let menu = document.querySelector('.nav-menu')

let openIcon = document.querySelector('.open')
let closeIcon = document.querySelector('.close')

openIcon.addEventListener('click', open)
closeIcon.addEventListener('click', close)

function open(e){
    e.preventDefault();
    menu.style.display = 'flex'
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'
}

function close(e){
    menu.style.display = 'none'
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'
}

