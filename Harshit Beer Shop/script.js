let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
//
const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
//
//  hamberger

const hamberger = document.querySelector(".hamberger");
const line1 = document.querySelector(".hamberger div:first-child");
const line2 = document.querySelector(".hamberger div:nth-child(2)");
const line3 = document.querySelector(".hamberger div:last-child");
const navMenu = document.querySelector(".nav-menu");

hamberger.addEventListener("click", function () {
  line1.classList.toggle("line1Active");
  line2.classList.toggle("line2Active");
  line3.classList.toggle("line3Active");
  navMenu.classList.toggle("nav-menu-Active");
});
