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
// ////////////////////////////////////////////////////////////
var swiper = new Swiper('.intro .swiper-container', {
    loop: true,
    // effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.intro .swiper-button-next',
        prevEl: '.intro .swiper-button-prev',
    },
});

// ////////////////////////////////////////////////    
var swiper = new Swiper('.viewrange .diaper__babystill>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.viewrange .diaper__babystill .swiper-button-next',
        prevEl: '.viewrange .diaper__babystill .swiper-button-prev',
    },
    pagination: {
        el: '.viewrange .diaper__babystill .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});
// ////////////////////////////////////////////////////////////////////
var swiper = new Swiper('.viewrange .diaper__gigo>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.viewrange .diaper__gigo .swiper-button-next',
        prevEl: '.viewrange .diaper__gigo .swiper-button-prev',
    },
    pagination: {
        el: '.viewrange .diaper__gigo .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

// /////////////////////////////////////////////////
const changeVersionItems = document.querySelectorAll('.viewrange__changeversion a');
Array.from(changeVersionItems).forEach(changeVersionItem => {
    changeVersionItem.addEventListener('click', () => {
        Array.from(changeVersionItems).forEach(changeVersionItem => {
            changeVersionItem.classList.remove('active')
        })
        changeVersionItem.classList.add('active')
    })
})
const viewrangeBabystill = document.querySelector('.viewrange__changeversion-babystill');
const viewrangeGigo = document.querySelector('.viewrange__changeversion-gigo');
const diaperBabyStill = document.querySelector('.diaper__babystill');
const diaperGigo = document.querySelector('.diaper__gigo');

viewrangeBabystill.addEventListener('click', () => {
    diaperBabyStill.style.display = 'block'
    diaperGigo.style.display = 'none'
})
viewrangeGigo.addEventListener('click', () => {
    diaperBabyStill.style.display = 'none'
    diaperGigo.style.display = 'block'
})
// /////////////////////////////////////////////////
const desitionforchildCheckboxs = document.querySelectorAll('.desitionforchild__checkbox>span');
Array.from(desitionforchildCheckboxs).forEach(desitionforchildCheckbox => {
    desitionforchildCheckbox.addEventListener('click', () => {
        Array.from(desitionforchildCheckboxs).forEach(desitionforchildCheckbox => {
            desitionforchildCheckbox.classList.remove('active')
        })
        desitionforchildCheckbox.classList.add('active')
    })
})
// /////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
var swiper = new Swiper('.reviewsfrommoms .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviewsfrommoms .swiper-button-next',
        prevEl: '.reviewsfrommoms .swiper-button-prev',
    },
    pagination: {
        el: '.reviewsfrommoms .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});
// ////////////////////////////////////////////////////////////

