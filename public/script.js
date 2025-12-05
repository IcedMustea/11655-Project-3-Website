/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

/* ---------- TEA SLIDESHOW ---------- */

let slideIndex = 0;
let slideshowPaused = false;

function showSlides() {
  if (slideshowPaused) return;

  let slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Repeat every 4 seconds
  setTimeout(showSlides, 4000);
}

// Start slideshow
showSlides();

// Pause on hover
document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
  slideshowPaused = true;
});

// Resume when not hovering
document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
  slideshowPaused = false;
  showSlides();
});
