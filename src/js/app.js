import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/circletype.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

new CircleType(document.querySelector('.video-text-btn__content'));


// Инициализация слайдера department-slider
document.querySelectorAll('.slider-wrapper').forEach(n => {
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
                console.log(offer);
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


