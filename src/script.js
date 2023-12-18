// home page 

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const paragraph = document.querySelector(".main__paragraph");

  const moveElement = function (element, e) {
    const boundingBox = element.getBoundingClientRect();
    const mouseX = e.clientX - boundingBox.left;
    const mouseY = e.clientY - boundingBox.top;

    const percentX = mouseX / boundingBox.width - 0.5;
    const percentY = mouseY / boundingBox.height - 0.5;

    const moveX = percentX * 10; 
    const moveY = percentY * 10; 

    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const isBurgerMenuElement = function (element) {
    return element === mobileMenu || mobileMenu.contains(element);
  };

  const addMoveListenersToButtons = function () {
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("mousemove", function (e) {
        moveElement(this, e);
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "translate(0, 0)";
      });
    });
  };

  document.addEventListener("mousemove", function (e) {
    if (isBurgerMenuElement(e.target)) {
      moveElement(e.target, e);
    } else {
      paragraph.style.transform = "translate(0, 0)";
    }
  });

  mobileMenu.addEventListener("mouseleave", function () {
    this.style.transform = "translate(0, 0)";
  });
  mobileMenu.addEventListener("click", addMoveListenersToButtons);
});

if (document.body.classList.contains('home')) {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkModeEnabled = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkModeEnabled);
  });
  const isDarkModeSaved = localStorage.getItem("darkMode");
  if (isDarkModeSaved === "true") {
    body.classList.add("dark-mode");
  }
}

// about page

document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
  const contentElements = document.querySelectorAll(".about-page__book img, .about-page__audio, .swiper-slide img, .swiper-slide p, iframe, p, .about-page__logo, .about-page__title");

  contentElements.forEach((element) => {
    element.addEventListener("mousemove", function (e) {
      const boundingBox = this.getBoundingClientRect();
      const mouseX = e.clientX - boundingBox.left;
      const mouseY = e.clientY - boundingBox.top;

      const percentX = mouseX / boundingBox.width - 0.5;
      const percentY = mouseY / boundingBox.height - 0.5;

      const moveX = percentX * 10; 
      const moveY = percentY * 10; 

      this.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", function () {
      this.style.transform = "translate(0, 0)";
    });
  });
});

// contact page 

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
  

  document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".contact__link");
    const buttons = document.querySelectorAll(".contact__button");

    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.classList.add("hovered");
      });
  
      link.addEventListener("mouseleave", function () {
        this.classList.remove("hovered");
      });
    });
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.classList.add("hovered");
      });
  
      button.addEventListener("mouseleave", function () {
        this.classList.remove("hovered");
      });
    });
  });
  

// education page 

const certificateSlider = document.getElementById('certificate-slider');
let currentSlide = 0;
const certificates = document.querySelectorAll('.education-certificate')
function showSlide(slideIndex) {
  certificates.forEach((certificate) => {
    certificate.style.display = 'none';
  })
  certificates[slideIndex].style.display = 'block';
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

document.getElementById('prev-btn').addEventListener('click', () => {
  clearInterval(slideInterval); 
  showPrevSlide();
});

document.getElementById('next-btn').addEventListener('click', () => {
  clearInterval(slideInterval); 
  showNextSlide();
});

// volunteer page 
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




  document.addEventListener("DOMContentLoaded", function() {
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
  
  
  
  
  