import navBarHandler from './navBarHandler';
import '../styles/main.scss';
import dataReq from './dataReq';

document.addEventListener('DOMContentLoaded', () => {
  navBarHandler();
  dataReq();
});
