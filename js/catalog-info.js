var swiper = new Swiper('.maybeinteresting .swiper-container', {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.maybeinteresting .swiper-button-next',
        prevEl: '.maybeinteresting .swiper-button-prev',
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
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});