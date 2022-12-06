const hamburgMenu = document.querySelector('.hamburg-menu');
const ul = document.querySelector('nav ul');
const jumb = document.querySelector('.jumbotron-animation');
const discover = document.querySelector('.discover');
const open = hamburgMenu.classList;
const mediaQ = window.matchMedia('(min-width: 768px)');

export default function navBarHandler() {
  if (mediaQ.matches) {
    discover.setAttribute('tabindex', '0');
  } else {
    discover.setAttribute('tabindex', '2');
  }
  hamburgMenu.addEventListener('click', () => {
    hamburgMenu.classList.toggle('open');
    ul.classList.toggle('active');
    jumb.classList.toggle('active');
  });

  hamburgMenu.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      hamburgMenu.classList.toggle('open');
      ul.classList.toggle('active');
      jumb.classList.toggle('active');
      if (open === 'hamburg-menu open') {
        discover.setAttribute('tabindex', '0');
      } else {
        discover.setAttribute('tabindex', '2');
      }
    }
  });
}
