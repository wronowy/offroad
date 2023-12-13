const myswiper = document.querySelector('.swiper').swiper;


const swiper = new Swiper('.mySwiper', {
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      
        1300: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }

  });

  swiper.slideNext();