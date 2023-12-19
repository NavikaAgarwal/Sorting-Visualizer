// Add animation to the header
const header = document.querySelector('header');
header.style.opacity = '0';

window.addEventListener('DOMContentLoaded', () => {
  header.style.transition = 'opacity 1s';
  header.style.opacity = '1';
});

// Add animation to the sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.style.transform = 'translateY(0)';
      section.style.opacity = '1';
    } else {
      section.style.transform = 'translateY(100px)';
      section.style.opacity = '0';
    }
  });
});
