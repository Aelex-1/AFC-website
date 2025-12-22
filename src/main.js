import '../styles/modern-noramlize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/footer.css';
import '../styles/components/home.css';
import '../styles/components/about.css';
import '../styles/components/franchise.css';
import '../styles/components/locations.css';
import '../styles/components/blogs.css';
import '../styles/components/extras.css';

import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/components/swiper.css';
import '../styles/utils.css';

import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

const navbar = document.getElementById('sidebar');
function openSidebar() {
    navbar.classList.add('show');

}
function closeSidebar() {
    navbar.classList.remove('show');
}
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;


const swiper = new Swiper('.home-swiper', {
    // Optional parameters
    loop: true,

    autoplay: {
    delay: 4000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const swiperBlogs = new Swiper('.blogs-swiper', {
    // loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: { 
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
})

const aboutSwiper = new Swiper('.about-swiper', {
    loop: true,

    autoplay: {
    delay: 4000,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    
})

document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      document.querySelectorAll("details").forEach((other) => {
        if (other !== details) {
          other.open = false;
        }
      });
    }
  });
});