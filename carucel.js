window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dots span');
    let slideIndex = 0;
  
    function showSlide(n) {
      slideIndex = n;
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
      });
    }
  
    function prevSlide() {
      if (slideIndex === 0) {
        showSlide(slides.children.length - 1);
      } else {
        showSlide(slideIndex - 1);
      }
    }
  
    function nextSlide() {
      if (slideIndex === slides.children.length - 1) {
        showSlide(0);
      } else {
        showSlide(slideIndex + 1);
      }
    }
  
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
  });
  