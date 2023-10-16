import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/circletype.min.js";

import "./modules/bootstrap.bundle.min.js";
import "./modules/fslightbox.js";
import './components.js';
import "./../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js";

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// if (document.querySelector('.video-text-btn__content')) {
//     new CircleType(document.querySelector('.video-text-btn__content'));
// }


// Инициализация слайдера department-slider
document.querySelectorAll('.department .slider-wrapper').forEach(n => {
    const mySwiperDepartment = new Swiper(n.querySelector('.department-slider'), {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        runCallbacksOnInit: true,
        on: {
            slideChange: function () {
                var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
                let offer = n.querySelector('.count-number');
                offer.innerHTML = '0' + (this.activeIndex + 1) + '' + `<span>` + '0' + slides_count.length + `</span>`;
            }
        },
        navigation: {
            nextEl: n.querySelector('.nav-arrow--next'),
            prevEl: n.querySelector('.nav-arrow--prev'),
        },
        pagination: {
            el: n.querySelector('.pagination'),
            clickable: true,
            type: 'bullets',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
            },
            576: {
                spaceBetween: 20,
            },
        },
    });


    function change() {

        setTimeout(function () {
            var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
            let offer_1 = n.querySelector('.count-number');
            console.log(offer_1);
            if (offer_1) {
                offer_1.innerHTML = '0' + (mySwiperDepartment.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
            }
        }, 1000);
    }
    change();
});


// about-slider
const aboutSlider = document.querySelector('.about-slider');
var mySwiperAbout = new Swiper(aboutSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    runCallbacksOnInit: true,
    on: {
        slideChange: function () {
            var slides_count = document.querySelectorAll(".about-slider .swiper-slide"); // <- add this
            let offer = document.querySelector('.about-slider-sect .count-number');
            console.log(offer);
            offer.innerHTML = `<span class="count-first">` + '0' + (this.activeIndex + 1) + `</span>` + '' + `<span class="separator"></span>` + `<span class="count-second">` + '0' + slides_count.length + `</span>`;
        }
    },
    navigation: {
        nextEl: '.about-slider-sect .nav-arrow--next',
        prevEl: '.about-slider-sect .nav-arrow--prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 8,
        },
        576: {
            spaceBetween: 20,
        },
    },

});

function change_about_slider() {

    setTimeout(function () {
        var slides_count = document.querySelectorAll(".about-slider-sect .swiper-slide"); // <- add this
        console.log(slides_count);
        let offer_1 = document.querySelector('.about-slider-sect .count-number');
        console.log(offer_1);
        if (offer_1) {
            offer_1.innerHTML = `<span class="count-first">` + '0' + (mySwiperAbout.activeIndex + 1) + `</span>` + '' + `<span class="separator"></span>` + `<span class="count-second">` + '0' + slides_count.length + `</span>`;
        }
    }, 1000);
}

change_about_slider();


// Инициализация слайдера gallery-slider
document.querySelectorAll('.gallery-slider').forEach(n => {
    const gallerySlider = new Swiper(n, {
        slidesPerView: 3,
        spaceBetween: 8,
        speed: 800,
        navigation: {
            prevEl: n.querySelector('.nav-arrow--prev'),
            nextEl: n.querySelector('.nav-arrow--next'),
        },
        pagination: {
            el: n.querySelector('.pagination'),
            clickable: true,
            type: 'bullets',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });
});

// Инициализация слайдера baner-slider
document.querySelectorAll('.baner .slider-wrapper').forEach(n => {
    const banerSlider = new Swiper(n.querySelector('.baner-slider'), {
        slidesPerView: 1,
        spaceBetween: 8,
        speed: 800,
        navigation: {
            prevEl: n.querySelector('.nav-arrow--prev'),
            nextEl: n.querySelector('.nav-arrow--next'),
        },
        pagination: {
            el: n.querySelector('.pagination'),
            clickable: true,
            type: 'bullets',
        },
    });
});

// Инициализация слайдера result-slider
document.querySelectorAll('.result .slider-wrapper').forEach(n => {
    const resultSlider = new Swiper(n.querySelector('.result-slider'), {
        slidesPerView: 1,
        spaceBetween: 8,
        speed: 800,
        allowTouchMove: false,
        navigation: {
            prevEl: n.querySelector('.nav-arrow--prev'),
            nextEl: n.querySelector('.nav-arrow--next'),
        },
        pagination: {
            el: n.querySelector('.pagination'),
            clickable: true,
            type: 'bullets',
        },
    });
});

// Инициализация слайдера video-slider
document.querySelectorAll('.reviews-page .slider-wrapper').forEach(n => {
    const mySwiperDepartment = new Swiper(n.querySelector('.video-slider'), {
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 600,
        allowTouchMove: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        runCallbacksOnInit: true,
        on: {
            slideChange: function () {
                var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
                let offer = n.querySelector('.count-number');
                offer.innerHTML = '0' + (this.activeIndex + 1) + '' + `<span>` + '0' + slides_count.length + `</span>`;
            }
        },
        navigation: {
            nextEl: n.querySelector('.nav-arrow--next'),
            prevEl: n.querySelector('.nav-arrow--prev'),
        },
        pagination: {
            el: n.querySelector('.pagination'),
            clickable: true,
            type: 'bullets',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
                slidesPerView: 1,
            },
            576: {
                spaceBetween: 0,
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });


    function change() {

        setTimeout(function () {
            var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
            let offer_1 = n.querySelector('.count-number');
            console.log(offer_1);
            if (offer_1) {
                offer_1.innerHTML = '0' + (mySwiperDepartment.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
            }
        }, 1000);
    }
    change();
});

// Инициализация слайдера team-slider
const teamSlider = document.querySelector('.team-photo-slider');
var mySwiperTeam = new Swiper(teamSlider, {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 600,
    allowTouchMove: true,
    centeredSlides: true,
    navigation: {
        nextEl: document.querySelector('.team .nav-arrow--next'),
        prevEl: document.querySelector('.team .nav-arrow--prev'),
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: false,
        },
        1200: {
            spaceBetween: 0,
            centeredSlides: true,
        },
    },
    pagination: {
        el: document.querySelector('.team .pagination'),
        clickable: true,
        type: 'bullets',
    },
    thumbs: { // указываем на превью слайдер
        swiper: {
            el: document.querySelector('.team-text-slider'),
            spaceBetween: 0,
            slidesPerView: 1,
            spaceBetween: 25,
            speed: 600,
            watchSlidesProgress: true,
            allowTouchMove: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        }
    },
    on: {
        slideChange: function () {
            var slides_count = document.querySelectorAll(".team-photo-slider .swiper-slide"); // <- add this
            let offer = document.querySelector('.team .count-number');
            console.log(offer);
            offer.innerHTML = '0' + (mySwiperTeam.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
        }
    },
});

function change_team() {
    setTimeout(function () {
        var slides_count = document.querySelectorAll(".team-photo-slider .swiper-slide"); // <- add this
        let offer_1 = document.querySelector('.team .count-number');
        console.log(offer_1);
        if (offer_1) {
            offer_1.innerHTML = '0' + (mySwiperTeam.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
        }
    }, 1000);
}
change_team();


// Инициализация слайдера reviews-slider-top
const reviewsSliderTop = document.querySelector('.reviews-top .reviews-video-slider');
var mySwiperReviewsTop = new Swiper(reviewsSliderTop, {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 600,
    allowTouchMove: true,
    centeredSlides: true,
    navigation: {
        nextEl: document.querySelector('.reviews-top .nav-arrow--next'),
        prevEl: document.querySelector('.reviews-top .nav-arrow--prev'),
    },
    pagination: {
        el: document.querySelector('.reviews-top .pagination'),
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        0: {
            spaceBetween: 8,
            slidesPerView: 1,
            centeredSlides: false,
        },
        992: {
            centeredSlides: true,
            slidesPerView: 2,
        },
    },

    thumbs: { // указываем на превью слайдер
        swiper: {
            el: document.querySelector('.reviews-top .reviews-text-slider'),
            spaceBetween: 0,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 600,
            allowTouchMove: false,
            watchSlidesProgress: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        }
    },
    on: {
        slideChange: function () {
            var slides_count = document.querySelectorAll(".reviews-top .reviews-text-slider .swiper-slide"); // <- add this
            let offer = document.querySelector('.reviews-top .count-number');
            console.log(offer);
            offer.innerHTML = '0' + (mySwiperReviewsTop.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
        }
    },
});

function change_reviews_top() {
    setTimeout(function () {
        var slides_count = document.querySelectorAll(".reviews-top .reviews-text-slider .swiper-slide"); // <- add this
        let offer_1 = document.querySelector('.reviews-top .count-number');
        console.log(offer_1);
        if (offer_1) {
            offer_1.innerHTML = '0' + (mySwiperReviewsTop.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
        }
    }, 1000);
}
change_reviews_top();

// Инициализация слайдера reviews-slider-bottom
const reviewsSliderBottom = document.querySelector('.reviews-bottom .reviews-image-slider');
var mySwiperReviewsBottom = new Swiper(reviewsSliderBottom, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: true,
    navigation: {
        nextEl: document.querySelector('.reviews-bottom .nav-arrow--next'),
        prevEl: document.querySelector('.reviews-bottom .nav-arrow--prev'),
    },
    pagination: {
        el: document.querySelector('.reviews-bottom .pagination'),
        clickable: true,
        type: 'bullets',
    },
    thumbs: { // указываем на превью слайдер
        swiper: {
            el: document.querySelector('.reviews-bottom .reviews-text-slider'),
            spaceBetween: 0,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 600,
            allowTouchMove: false,
            watchSlidesProgress: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        }
    },
    on: {
        slideChange: function () {
            var slides_count = document.querySelectorAll(".reviews-bottom .reviews-text-slider .swiper-slide"); // <- add this
            let offer = document.querySelector('.reviews-bottom .count-number');
            console.log(offer);
            offer.innerHTML = '0' + (mySwiperReviewsBottom.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
        }
    },
});
function change_reviews_bottom() {
    setTimeout(function () {
        var slides_count = document.querySelectorAll(".reviews-bottom .reviews-text-slider .swiper-slide"); // <- add this
        let offer_1 = document.querySelector('.reviews-bottom .count-number');
        console.log(offer_1);
        if (offer_1) {
            offer_1.innerHTML = '0' + (mySwiperReviewsBottom.activeIndex + 1) + '' + `<span>` + '0' + (slides_count.length) + `</span>`;
        }
    }, 1000);
}
change_reviews_bottom();

// Инициализация слайдера category-slider
document.querySelectorAll('.category-tabs .slider-wrapper').forEach(n => {
    const mySwiperCategories = new Swiper(n.querySelector('.category-slider'), {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        runCallbacksOnInit: true,
        navigation: {
            nextEl: n.querySelector('.nav-arrow--next'),
            prevEl: n.querySelector('.nav-arrow--prev'),
        },
        pagination: {
            el: n.querySelector('.pagination'),
            clickable: true,
            type: 'bullets',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
            },
            576: {
                spaceBetween: 20,
            },
        },
    });
});


// Инициализация слайдера system-bottom
const systemSlider = document.querySelector('.system-slider');
var mySwiperSystem = new Swiper(systemSlider, {
    slidesPerView: 4,
    spaceBetween: 22,
    speed: 800,
    navigation: {
        prevEl: document.querySelector('.system .nav-arrow--prev'),
        nextEl: document.querySelector('.system .nav-arrow--next'),
    },
    pagination: {
        el: document.querySelector('.system .pagination'),
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

// Инициализация слайдера doctor-slider
const doctorSlider = document.querySelector('.doctor-slider');
var mySwiperDoctor = new Swiper(doctorSlider, {
    slidesPerView: 'auto',
    spaceBetween: 8,
    speed: 800,
    navigation: {
        prevEl: document.querySelector('.doctor .nav-arrow--prev'),
        nextEl: document.querySelector('.doctor .nav-arrow--next'),
    },
    pagination: {
        el: document.querySelector('.doctor .pagination'),
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 'auto',
        },
    },
});

// Инициализация слайдера cert-slider
const certSlider = document.querySelector('.cert-slider');
var mySwiperCert = new Swiper(certSlider, {
    slidesPerView: 2,
    spaceBetween: 8,
    speed: 800,
    navigation: {
        prevEl: document.querySelector('.cert .nav-arrow--prev'),
        nextEl: document.querySelector('.cert .nav-arrow--next'),
    },
    pagination: {
        el: document.querySelector('.cert-slider .pagination'),
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
    },
});

// Инициализация слайдера cert-slider--lg
const certSliderLg = document.querySelector('.cert-slider--lg');
var mySwiperCert = new Swiper(certSliderLg, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 800,
    navigation: {
        prevEl: document.querySelector('.cert .nav-arrow--prev'),
        nextEl: document.querySelector('.cert .nav-arrow--next'),
    },
    pagination: {
        el: document.querySelector('.cert-slider--lg .pagination'),
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

// Инициализация слайдера contacts-page-slider
const contactsPageSlider = document.querySelector('.contacts-page-slider');
var mySwiperContactsPage = new Swiper(contactsPageSlider, {
    slidesPerView: 2,
    spaceBetween: 18,
    speed: 800,
    navigation: {
        prevEl: document.querySelector('.contacts-page .nav-arrow--prev'),
        nextEl: document.querySelector('.contacts-page .nav-arrow--next'),
    },
    pagination: {
        el: document.querySelector('.contacts-page .pagination'),
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        460: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 5,
        },
        1301: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
    },
});



// Comparison slider
var comparisonClicked = false;

function comparisonChange(wrap, e) {
    var csFront = wrap.find('.comparison-slider__back'),
        drag = wrap.find('.comparison-slider__drag'),
        posX;

    posX = ((e.pageX - wrap.offset().left) / wrap.innerWidth()) * 100;
    // posY = ((e.pageY - wrap.offset().top) / wrap.innerHeight()) * 100;

    if (posX <= 100) {
        csFront.css('width', posX + '%');
        drag.css('left', posX + '%');
    }
}

$('body').on('mousedown', '.comparison-slider', function () {
    comparisonClicked = true;
});
$('body').on('mouseup', '.comparison-slider', function () {
    comparisonClicked = false;
});
$('body').on('mousemove', '.comparison-slider', function (e) {
    if (comparisonClicked) comparisonChange($(this), e);
});
$('body').on('click', '.comparison-slider', function (e) {
    comparisonChange($(this), e)
});
// Comparison slider END

(function ($) {
    $(window).on("load", function () {

        /* Page Scroll to id fn call */
        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector: "#navigation-menu a"
        });

        /* demo functions */
        $("a[rel='next']").click(function (e) {
            e.preventDefault();
            var to = $(this).parent().parent("section").next().attr("id");
            $.mPageScroll2id("scrollTo", to);
        });

    });
})(jQuery);

let textMoreBtnAll = document.querySelectorAll('.text-more');
textMoreBtnAll.forEach(el => {
    el.addEventListener('click', () => {
        let elWrap = el.closest('.content-text-wraper');
        let elContent = elWrap.querySelector('.content-text--hide');
        elContent.classList.add('active');
        el.style.display = 'none';
    });
});

let catalogBtnLg = document.getElementById('btn-catalog--lg');
let catalogContentLg = document.querySelector('.catalog-modal');
let catalogCloseLg = document.getElementById('catalog-close-lg');
let bodyEl = document.querySelector('body');
catalogBtnLg.addEventListener('click', () => {
    catalogContentLg.classList.add('active');
    bodyEl.classList.add('hidden');
});
catalogCloseLg.addEventListener('click', () => {
    catalogContentLg.classList.remove('active');
    bodyEl.classList.remove('hidden');
});

let btnSmMenu = document.getElementById('btn-menu--sm');
let btnMenuClose = document.getElementById('menu-modal-close');
let menuModal = document.querySelector('.menu-modal');

btnSmMenu.addEventListener('click', () => {
    menuModal.classList.add('active');
    menuModalContent.classList.add('active');
    bodyEl.classList.add('hidden');
});

btnMenuClose.addEventListener('click', () => {
    menuServices.classList.remove('active');
    menuModal.classList.remove('active');
    bodyEl.classList.remove('hidden');
    document.querySelectorAll('.sub-menu').forEach(el => {
        el.classList.remove('active');
    });
});



let menuServicesBtn = document.getElementById('menu-item__button-services');
let menuModalContent = document.querySelector('.menu-modal-content');
let menuServices = document.querySelector('.menu-services');
menuServicesBtn.addEventListener('click', () => {
    menuModalContent.classList.remove('active');
    menuServices.classList.add('active');
});

let servicesBack = document.getElementById('services-back');
servicesBack.addEventListener('click', () => {
    menuModalContent.classList.add('active');
    menuServices.classList.remove('active');
});

// add menuArrowBtn
let menuItemHasChild = document.querySelectorAll('.menu-item-has-children');

menuItemHasChild.forEach(el => {
    let buttonMore = document.createElement('div');   
    let buttonBackSubcat = document.createElement('div');   
    let submenu = el.querySelector('.sub-menu');
    buttonMore.classList.add('menu-item__button');
    buttonBackSubcat.classList.add('menu-back');
    buttonBackSubcat.classList.add('menu-back--service');
    el.appendChild(buttonMore);
    submenu.prepend(buttonBackSubcat);
    buttonBackSubcat.textContent = 'Услуги';
    buttonMore.addEventListener('click', () => {
        submenu.classList.add('active');
    });
    buttonBackSubcat.addEventListener('click', () => {
        submenu.classList.remove('active');
    });
});

let mobileNavServ = document.querySelector('.mobile-nav__item-services');
mobileNavServ.addEventListener('click', () => {
    menuModal.classList.add('active');
    bodyEl.classList.add('hidden');
    menuServicesBtn.click();
});

// let arrowMenuAll = document.querySelectorAll('.menu-item__button');
// arrowMenuAll.forEach(el => {
//   let elPar = el.closest('li');
//   let elContent = elPar.querySelector('.sub-menu');
//   el.addEventListener('click', () => {
//     elContent.classList.toggle('active');
//   });
// });

// let btnCloseSubcat = document.querySelectorAll('.subcat-close');
// btnCloseSubcat.forEach(el => {
//   let elPar = el.closest('li');
//   let elContent = elPar.querySelector('.header__nav-subcat-wrapper ');
//   el.addEventListener('click', () => {
//     elContent.classList.toggle('active');
//   });
// });