const hamburguer = document.querySelector('.menu')
const menu = document.querySelector('.menu-navegacion')

// console.log(hamburguer)
// console.log(menu)

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('spread')
    hamburguer.style.opacity = '0'
})

window.addEventListener('click', (e) => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle('spread')
        hamburguer1.style.opacity = '1'
    }
})

