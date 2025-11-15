let navbar = document.querySelector(".head .navbar"); // Changed from .header to .head
let menuBtn = document.querySelector("#menu");
let menuIcon = document.querySelector("#menu i"); // Get the icon element

menuBtn.onclick = () => {
  // Toggle the icon class for visual change (optional, but good practice)
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times"); // Assuming 'fa-times' is the close icon
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }

  navbar.classList.toggle("active");
};

window.onscroll = () => {
  // Reset the navbar and icon on scroll
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
};

// Removed the 'themeBtn' logic as it's not present in the HTML/CSS and is not needed

// Initialize Gallery Swiper
var swiperGallery = new Swiper(".gallery-slider", {
  // Changed variable name to avoid conflict
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// Initialize Review Swiper (if review section is added later)
var swiperReview = new Swiper(".review-slider", {
  // Changed variable name
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  delay: 400,
  once: true, // Optional: Makes animations only happen once
});
