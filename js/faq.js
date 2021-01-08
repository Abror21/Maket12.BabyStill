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

// ///////////////////////////////////////////////
const FAQ__panelGroups = document.querySelectorAll('.FAQ__panelGroup');
Array.from(FAQ__panelGroups).forEach(FAQ__panelGroup => {
    FAQ__panelGroup.addEventListener('click', function () {
        
        const currentlyActiveFAQ__panelGroup = document.querySelector('.FAQ__panelGroup.active');
        if(currentlyActiveFAQ__panelGroup && currentlyActiveFAQ__panelGroup !== FAQ__panelGroup){
            currentlyActiveFAQ__panelGroup.classList.remove('active');
            currentlyActiveFAQ__panelGroup.children[1].style.maxHeight = 0;
        }
        FAQ__panelGroup.classList.toggle('active')
        if(FAQ__panelGroup.classList.contains('active')){
            FAQ__panelGroup.children[1].style.maxHeight = FAQ__panelGroup.children[1].scrollHeight + 'px';
        }else{
            FAQ__panelGroup.children[1].style.maxHeight = 0;
        }
    })
})