import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemDetail } from '../templates/template-creator';


const Detail = {
  async render() {
    return `
      <div class="detail-content"></div>
      
      <div class="menus">
        <div class="heading">Menus</div>
        <div class="food">
          <h3>Food</h3>
        </div>
        <div class="drink">
          <h3>Drink</h3>
          <p id="drink"></p>
        </div>
      </div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailResto(url.id);
    const detailContainer = document.querySelector('.detail-content');
    const foodContainer = document.querySelector(".food")
    const drinkContainer = document.querySelector(".drink")
    const menus = resto.restaurant.menus
    const { foods, drinks } = menus
    foods.forEach((food) => {
      foodContainer.innerHTML += `<p>${food.name}<p>`
    })
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += `<p>${drink.name}<p>`
    })
    detailContainer.innerHTML = createRestoItemDetail(resto.restaurant);
  }
};
 
export default Detail;