/* ==========================================================
   StartTour - app.js
========================================================== */

// ======================
// Navbar transparente
// ======================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ======================
// Scroll suave
// ======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const href = this.getAttribute("href");

        if (href === "#") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            return;

        }

        const destino = document.querySelector(href);

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ======================
// Inicializa AOS
// ======================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,
        once: true,
        easing: "ease-out-cubic"

    });

}

// ======================
// Swiper
// ======================

if (typeof Swiper !== "undefined") {

    new Swiper(".swiper", {

        loop: true,

        grabCursor: true,

        spaceBetween: 30,

        autoplay: {

            delay: 3000,
            disableOnInteraction: false

        },

        pagination: {

            el: ".swiper-pagination",
            clickable: true

        },

        navigation: {

            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"

        },

        breakpoints: {

            0: {
                slidesPerView: 1
            },

            768: {
                slidesPerView: 2
            },

            1200: {
                slidesPerView: 3
            }

        }

    });

}

// ======================
// Particles.js
// ======================

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 60
            },

            color: {
                value: "#ef4444"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.4
            },

            size: {
                value: 3
            },

            move: {
                enable: true,
                speed: 1.2
            },

            links: {
                enable: true,
                color: "#ef4444",
                opacity: 0.15
            }

        }

    });

}

// ======================
// Contador animado
// ======================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let value = 0;

    const speed = target / 80;

    const update = () => {

        value += speed;

        if (value < target) {

            counter.innerText = Math.floor(value);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => observer.observe(counter));

// ======================
// Botão voltar ao topo
// ======================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

Object.assign(topButton.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "#dc2626",
    color: "#fff",
    fontSize: "24px",
    display: "none",
    zIndex: "9999",
    transition: ".3s"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ======================
// Mobile menu toggle
// ======================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ======================
// Reveal manual
// ======================

const reveals = document.querySelectorAll(".reveal");

const reveal = () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.classList.add("active");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ======================
// Loader (opcional)
// ======================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});

// ======================
// Console
// ======================

console.log("%cStartTour", "color:#ef4444;font-size:30px;font-weight:bold;");
console.log("Projeto carregado com sucesso.");