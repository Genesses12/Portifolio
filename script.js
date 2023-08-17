function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      if (rect.top < screenHeight) {
        element.classList.add('active');
      }
    });
  }

  document.addEventListener('scroll', animateOnScroll);
  animateOnScroll();