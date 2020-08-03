const topScroller = document.querySelector('.top');
window.addEventListener('scroll', () => {
  let c = window.scrollY;
  if (c > 800) {
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
let first = (localStorage.getItem("first") === null) ? true : localStorage.getItem("first");
if (first == true) {
  setTimeout(() => {
    if (first) {
      window.onload = whenOnload();
      localStorage.setItem('first', 'false');
    }
  }, 5300);
}
else {
  whenOnload();
}
function whenOnload() {
  console.log("Loaded");
  document.querySelector(".preload-cont").style.display = "none";
  document.querySelector("body").style.position = "relative";
}