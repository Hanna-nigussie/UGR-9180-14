// home page 
      document.addEventListener("DOMContentLoaded", function () {
        const darkModeToggle = document.getElementById("darkModeToggle");
        const mainContent = document.getElementById("mainContent");

        darkModeToggle.addEventListener("change", function () {
          if (darkModeToggle.checked) {
            mainContent.classList.add("bg-dark", "text-light");
            mainContent.classList.remove("bg-light", "text-dark");
          } else {
            mainContent.classList.remove("bg-dark", "text-light");
            mainContent.classList.add("bg-light", "text-dark");
          }
        });

        const burgerBtn = document.querySelector(".navbar-toggler");
        const navbarNav = document.querySelector(".navbar-collapse");

        burgerBtn.addEventListener("click", function () {
          navbarNav.classList.toggle("show");
        });
      });
    

    //   about page 


    
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


//   contact page 




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
        const buttons = document.querySelectorAll(".btn");

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


    //   education page 

    
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
        currentSlide =
          (currentSlide - 1 + certificates.length) % certificates.length;
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
    
    // voulenteer page 

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
        