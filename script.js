var swipe = new Swiper(".myswipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay:{
      delay:1000,
    },
    mousewheel:true,
    keyboard:{
      enable:true,
    },
    loop:true,
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });