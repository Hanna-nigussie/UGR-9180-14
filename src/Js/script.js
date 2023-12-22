

// Home Page
const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");

burgerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("-translate-y-full");
});

closeBtn.addEventListener("click", function () {
  navMenu.classList.toggle("-translate-y-full");
});

function toggleDarkMode() {
  const body = document.body;
  const header = document.querySelector(".header");
  const mainTitle = document.querySelector(".main__title");
  const mainParagraph = document.querySelector(".main__paragraph");
  const quoteSpan = document.getElementById("quote-span");

  body.classList.toggle("dark");
  header.classList.toggle("bg-white");
  mainTitle.classList.toggle("text-white");
  mainParagraph.classList.toggle("text-white");
  quoteSpan.classList.toggle("text-white");
}

// About Page
function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  content.classList.toggle("hidden");
}

var swiper1 = new Swiper("#photography_carousel_1", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper("#photography_carousel_2", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function toggleContent(elementId) {
  var expandableContent = document.getElementById(elementId);
  var fullContent = expandableContent.querySelector('.expandable-content > p > span');
  var button = expandableContent.querySelector('.expandable-content > button');

  if (fullContent.style.display === "none" || fullContent.style.display === "") {
    fullContent.style.display = "inline";
    button.innerText = "Read Less";
  } else {
    fullContent.style.display = "none";
    button.innerText = "Read More";
  }
}

// Education Page
const certificateSlider = document.getElementById("certificate-slider");
let currentSlide = 0;
const certificates = document.querySelectorAll(".education-certificate");
function showSlide(slideIndex) {
  certificates.forEach((certificate) => {
    certificate.style.display = "none";
  });
  certificates[slideIndex].style.display = "block";
  currentSlide = slideIndex;
}
function showNextSlide() {
  currentSlide = (currentSlide + 1) % certificates.length;
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide = (currentSlide - 1 + certificates.length) % certificates.length;
  showSlide(currentSlide);
}

const slideInterval = setInterval(showNextSlide, 3000);

document.getElementById("prev-btn").addEventListener("click", () => {
  clearInterval(slideInterval);
  showPrevSlide();
});

document.getElementById("next-btn").addEventListener("click", () => {
  clearInterval(slideInterval);
  showNextSlide();
});

// Volunteer Page
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".volunteer-page__link");

  readMoreButtons.forEach((button) => {
    button.addEventListener("mousemove", function (e) {
      const boundingBox = this.getBoundingClientRect();
      const mouseX = e.clientX - boundingBox.left;
      const mouseY = e.clientY - boundingBox.top;

      const percentX = mouseX / boundingBox.width - 0.5;
      const percentY = mouseY / boundingBox.height - 0.5;

      const moveX = percentX * 10;
      const moveY = percentY * 10;

      this.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translate(0, 0)";
    });
  });

  const backToHomeLink = document.querySelector(".volunteer-page__back-link");

  backToHomeLink.addEventListener("mousemove", function (e) {
    const boundingBox = this.getBoundingClientRect();
    const mouseX = e.clientX - boundingBox.left;
    const mouseY = e.clientY - boundingBox.top;

    const percentX = mouseX / boundingBox.width - 0.5;
    const percentY = mouseY / boundingBox.height - 0.5;

    const moveX = percentX * 10;
    const moveY = percentY * 10;

    this.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  backToHomeLink.addEventListener("mouseleave", function () {
    this.style.transform = "translate(0, 0)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainers = document.querySelectorAll(".testimonial-slider");

  testimonialContainers.forEach(container => {
    let currentIndex = 0;
    const testimonialSlides = container.querySelectorAll(".testimonial-slide");
    const totalSlides = testimonialSlides.length;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;

      testimonialSlides.forEach(slide => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    }, 5000);
  });
});

function toggleReadMore(descriptionId, button) {
  const expandableContent = document.getElementById(descriptionId);
  const fullDescription = expandableContent.querySelector('.full-description');

  if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
    fullDescription.style.display = 'inline';
    button.textContent = 'Read Less';
  } else {
    fullDescription.style.display = 'none';
    button.textContent = 'Read More';
  }
}

// Contact Page
document.addEventListener("DOMContentLoaded", function () {
  const growElements = document.querySelectorAll(".grow-hover");

  growElements.forEach((element) => {
    element.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.1)";
    });

    element.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all the required fields");
    return false;
  }

  return true;
}
