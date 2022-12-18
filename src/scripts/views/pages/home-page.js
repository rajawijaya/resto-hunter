import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItem } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    
    <!--Hero Image/Jumbotron-->
    <div class="jumbotron">
      <h1>Find Your Dream Restaurant</h1>
      <p>This is where you can find the best restaurants around you </p>
      <a href="#exp" class="discover">Discover Now </a>
    </div>
    
    <!--About Us-->
    <div aria-label="about-us" id="about-us" class="heading">
      <p>About Us</p>
      <div></div>
    </div>
    <div class="green-area">
      <div class="about-us">
        <img src="./images/heros/hero-image_1.jpg" alt="about hero" >
        <p>
          Here you can search, browse, explore, and find the best restaurants ever. visit and feel the sensation of eating at a place to eat that you have never felt.
        </p>
      </div>
    </div>
    
    <!--Explore-->
    <div aria-label="explore" class="heading" id="exp">
      <p>Explore</p
      <div></div>
    </div>
    <div class="card-wrapper">
      <!--Card-->
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const restos = await RestaurantDbSource.homePage();
    const restoContainer = document.querySelector('.card-wrapper');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItem(resto);
    });

    const hamburgMenu = document.querySelector('.hamburg-menu');
    const discover = document.querySelector('.discover');
    const open = hamburgMenu.classList;
    const mediaQ = window.matchMedia('(min-width: 768px)');

    if (mediaQ.matches) {
      discover.setAttribute('tabindex', '0');
    } else {
      discover.setAttribute('tabindex', '2');
    }

    if (open === 'hamburg-menu open') {
      discover.setAttribute('tabindex', '0');
    } else {
      discover.setAttribute('tabindex', '2');
    }
  },
};

export default HomePage;
