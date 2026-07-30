/* ==========================================================
   StartTour - slider.js
========================================================== */

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // HERO SLIDER
    // ==========================================

    if (document.querySelector(".heroSwiper")) {

        new Swiper(".heroSwiper", {

            effect: "fade",

            loop: true,

            speed: 1200,

            autoplay: {

                delay: 4500,

                disableOnInteraction: false

            },

            pagination: {

                el: ".hero-pagination",

                clickable: true

            }

        });

    }

    // ==========================================
    // DESTINOS
    // ==========================================

    if (document.querySelector(".destinosSwiper")) {

        new Swiper(".destinosSwiper", {

            slidesPerView: 1,

            spaceBetween: 25,

            loop: true,

            centeredSlides: true,

            grabCursor: true,

            autoplay: {

                delay: 3000,

                disableOnInteraction: false

            },

            pagination: {

                el: ".destinos-pagination",

                clickable: true

            },

            navigation: {

                nextEl: ".swiper-button-next",

                prevEl: ".swiper-button-prev"

            },

            breakpoints: {

                768: {

                    slidesPerView: 2

                },

                1200: {

                    slidesPerView: 3

                }

            }

        });

    }

    // ==========================================
    // GALERIA
    // ==========================================

    if (document.querySelector(".gallerySwiper")) {

        new Swiper(".gallerySwiper", {

            effect: "coverflow",

            centeredSlides: true,

            grabCursor: true,

            slidesPerView: "auto",

            loop: true,

            coverflowEffect: {

                rotate: 15,

                stretch: 0,

                depth: 180,

                modifier: 1,

                slideShadows: false

            },

            autoplay: {

                delay: 2500,

                disableOnInteraction: false

            }

        });

    }

    // ==========================================
    // AVALIAÇÕES
    // ==========================================

    if (document.querySelector(".reviewsSwiper")) {

        new Swiper(".reviewsSwiper", {

            slidesPerView: 1,

            loop: true,

            autoplay: {

                delay: 4000,

                disableOnInteraction: false

            },

            pagination: {

                el: ".reviews-pagination",

                clickable: true

            }

        });

    }

});