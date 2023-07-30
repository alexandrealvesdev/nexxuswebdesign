// Navbar Hamburger

const elements = {
    date: document.querySelector(".date"),

    scrollLinks: document.querySelectorAll(".navbar-list-link, .footer-link"),
    navbarListt: document.querySelector(".navbar-list"),
    togglee: document.querySelector(".navbar-button"),

    hiddenLeft: document.querySelectorAll('.hiddenLeft'),
    hiddenRight: document.querySelectorAll('.hiddenRight'),
    hiddenTop: document.querySelectorAll('.hiddenTop'),
    hiddenBottom: document.querySelectorAll('.hiddenBottom'),
}

elements.togglee.addEventListener("click", e => {
    elements.navbarListt.classList.toggle("navbar-list--show-links");
});

//Scroll Animation

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
          entry.target.classList.add('show')
          // } else {
          //     entry.target.classList.remove('show') 
      }
  })
})

elements.hiddenLeft.forEach((todosElementos) => myObserver.observe(todosElementos))
elements.hiddenRight.forEach((todosElementos) => myObserver.observe(todosElementos))
elements.hiddenTop.forEach((todosElementos) => myObserver.observe(todosElementos))
elements.hiddenBottom.forEach((todosElementos) => myObserver.observe(todosElementos))

elements.date.innerHTML = new Date().getFullYear() + ".";

// Navbar Background Scroll

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Carrossel

document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    showSlide(currentSlide);
  
    var slideInterval = setInterval(nextSlide, 5500);
  
    var prevArrow = document.querySelector(".carousel-arrow.prev");
    prevArrow.addEventListener("click", prevSlide);
  
    var nextArrow = document.querySelector(".carousel-arrow.next");
    nextArrow.addEventListener("click", nextSlide);
  
    function nextSlide() {
      hideSlide(currentSlide);
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      hideSlide(currentSlide);
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function showSlide(index) {
      slides[index].style.display = "block";
      slides[index].style.opacity = "1";
      slides[index].style.transition = "opacity 1s ease";
    }
  
    function hideSlide(index) {
      slides[index].style.opacity = "0";
      slides[index].style.transition = "opacity 1s ease";
    }
  });
  
  //Animation Scroll
  
  elements.scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        elements.navbarListt.classList.remove("navbar-list--show-links");

        const id = link.getAttribute("href");
        const element = document.querySelector(id);

        const position = element.offsetTop - 190;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

        e.preventDefault();
    });
});