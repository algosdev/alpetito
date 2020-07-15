const topScroller = document.querySelector('.top');
window.addEventListener('scroll', () => {
 let c = window.scrollY;
 if(c>800){
   topScroller.classList.add('active');
 }
 else {
   topScroller.classList.remove('active');
 }
});
var swiper = new Swiper('.swiper-container', {
  initialSlide: 2,
   loop: true,
   breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
          slidesPerView: 2,
          spaceBetween: 15
        },
      800: {
          slidesPerView: 3,
          spaceBetween: 30 
        }

  },
   pagination: {
     el: '.swiper-pagination',
     clickable: true
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
window.onload = function() {
    document.querySelector('#doc').style.visibility = 'visible';
    document.body.style.position = 'relative';
    document.querySelector('.load').style.display = 'none';
      };