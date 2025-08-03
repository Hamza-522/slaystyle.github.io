window.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.querySelector('.toggle-menu');
    const mainDiv = document.querySelector('.main');
    const navbar = document.querySelector('.navbar');

    toggleMenu.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            mainDiv.classList.toggle('move-left');
            navbar.classList.toggle('move-right');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            mainDiv.classList.remove('move-left');
            navbar.classList.remove('move-right');
        }
    });
});


// Get all required elements
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');

// Add click event listeners to the arrow buttons
prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Create dots and add click event listeners
slides.forEach((slide, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

let currentSlide = 0;

// Initialize the slider
showSlide(currentSlide);

// Function to show a specific slide
function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index % slides.length;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Function to show the previous slide
function showPrevSlide() {
  showSlide(currentSlide - 1);
}

// Function to show the next slide
function showNextSlide() {
  showSlide(currentSlide + 1);
}

// Automatic slide change
setInterval(showNextSlide
