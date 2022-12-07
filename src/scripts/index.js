import 'regenerator-runtime';
import '../styles/main.scss';
import navBarHandler from './navBarHandler.js'
import App from './views/app';
 
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
  navBarHandler()
});

