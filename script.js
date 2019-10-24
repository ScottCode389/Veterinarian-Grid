//  SLIDESHOW

var slideIndex = 1;
var millis = 7000;
var interval;

startSlides();

function startSlides() {
  pauseSlides();
  nextSlide();
  interval = setInterval(nextSlide, millis);
}

function resumeSlides() {
  nextSlide();
}

function pauseSlides() {
  clearInterval(interval);
}

function nextSlide() {
  showSlide();
  slideIndex++;
}

function plusSlides(n) {
  clearInterval(interval);
  slideIndex += n;
  nextSlide();
  interval = setInterval(nextSlide, millis);
}

function currentSlide(n) {
  clearInterval(interval);
  slideIndex = n + 1;
  nextSlide();
  interval = setInterval(nextSlide, millis);
}

function showSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//  MODAL

var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("modal-btn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
modalBtn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Mobile Navigation

// when you click on "menu-toggle" toggle the .nav class to mobile-nav
// when you click on "menu-toggle" toggle back to "is-active"


