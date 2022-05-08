new Swiper('.location__slider', {

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
    },

    autoHeight: true,

    slidesPerView: 3,

    slidesPerGroup: 1,

    centeredSlides: true,

    initialSlide: 1,

    spaceBetween: 27
});