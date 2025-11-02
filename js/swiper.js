const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    lockClass: 'swiper-button'
  },

    slidesPerView: 'auto',
    spaceBetween: 14,
  
});