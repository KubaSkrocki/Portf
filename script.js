// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = e.target.getAttribute('href');
    const targetPos = document.querySelector(target).offsetTop;
    const duration = 1000;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const run = ease(elapsedTime, startPos, distance, duration);
      window.scrollTo(0, run);
      if (elapsedTime < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});

// Sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  const main = document.querySelector('main');
  const mainTop = main.offsetTop;
  const scrollTop = window.pageYOffset;

  if (scrollTop > mainTop - headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

});
