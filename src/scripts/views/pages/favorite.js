import FavoriteRestoIdb from '../../data/favorit-resto-idb';
import { createRestoItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div aria-label="explore" class="heading" id="exp">
        <p>Favorite</p>
        <div></div>
      </div>
      <div class="card-wrapper">
        <!--Card-->
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector('.card-wrapper');

    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default Favorite;
