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
// ///////////////////////////////////////////////////////////////
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("contactinfo__map"), {
        center: new google.maps.LatLng(41.337919, 69.389826),
        zoom: 10,
    });
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.337919, 69.389826),
        icon: {
            url: 'img/map_logo.png',
            scaledSize: new google.maps.Size(95, 100),
        },
        map: map,
    });
};
initMap();
