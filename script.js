function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const preview_slides = document.getElementsByClassName("preview-slide");
  if (slides.length === 0) return;
  if (n > slides.length) return;
  if (n < 1) return; 

  for (let slide of slides) {
    slide.style.display = "none";
    slide.style.border = "none"
  }
  for (let preview_slide of preview_slides) {
    preview_slide.style.border = "none"
  }
  slides[n - 1].style.display = "block";
  preview_slides[n - 1].style.border = "black 2px solid"
}

function setSlide(n) {
  showSlides(n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(1);
});
