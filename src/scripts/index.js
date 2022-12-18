import 'regenerator-runtime';
import '../styles/main.scss';
import navBarHandler from './navBarHandler';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburg-menu'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  navBarHandler();
  swRegister();
});
