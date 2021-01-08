const menu = document.querySelector('.header__menu');
const menuNav = document.querySelector('.menu__nav');
const menuClose = document.querySelector('.nav__menu-close');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    menuNav.classList.add('active')
    wrapper.classList.add('active')
    body.style.overflow = 'hidden'
})
menuClose.addEventListener('click', () => {
    menuNav.classList.remove('active')
    wrapper.classList.remove('active')
    body.style.overflow = 'visible'
})
wrapper.addEventListener('click', () => {
    menuNav.classList.remove('active')
    wrapper.classList.remove('active')
    body.style.overflow = 'visible'
})
// //////////////////////////////////////////////////////////////////
const changeVersionItems = document.querySelectorAll('.viewrange__changeversion a');
Array.from(changeVersionItems).forEach(changeVersionItem => {
    changeVersionItem.addEventListener('click', () => {
        Array.from(changeVersionItems).forEach(changeVersionItem => {
            changeVersionItem.classList.remove('active')
        })
        changeVersionItem.classList.add('active')
    })
})

const viewrangeBabystills = document.querySelectorAll('.products .viewrange__changeversion-babystill');
const viewrangeGigo = document.querySelector('.products .viewrange__changeversion-gigo');
const productionBabystill = document.querySelector('.production__babystill');
const productionGigo = document.querySelector('.production__gigo');
Array.from(viewrangeBabystills).forEach((viewrangeBabystill) => {
    viewrangeBabystill.addEventListener('click', () => {
        productionBabystill.style.display = 'block'
        productionGigo.style.display = 'none'
    })
})

viewrangeGigo.addEventListener('click', () => {
    productionGigo.style.display = 'block'
    productionBabystill.style.display = 'none'
})