import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemDetail } from '../templates/template-creator';
import PostReview from '../../utils/reviewerPost'


const Detail = {
  async render() {
    return `
      <div class="detail-content"></div>
      
      <div class="menus">
        <div class="heading">Menu</div>
        <div class="food">
          <h3>Foods</h3>
        </div>
        <div class="drink">
          <h3>Drinks</h3>
        </div>
      </div>
      
      <div class="reviews">
        <form id="form">
          <h3>What do you think about this restaurant?</h3>
          <label for="Name">Name</label>
          <br>
          <input type="text" name="Name" id="Name" value="" />
          <br>
          <label for="Review">Review</label>
          <br>
          <textarea name="Review" id="Review" rows="8"></textarea>
          <button type="submit">Submit</button>
        </form>
        <table border="0">
          <thead>
            <th colspan="3">Customer Reviews</th>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailResto(url.id);
    const { restaurant } = resto
    const customerReviews = restaurant.customerReviews
    const menus = restaurant.menus
    const { foods, drinks } = menus
    const detailContainer = document.querySelector('.detail-content');
    const foodContainer = document.querySelector(".food")
    const drinkContainer = document.querySelector(".drink")
    const reviewContainer = document.querySelector(".reviews table tbody")
    const formContainer = document.querySelector("#form")
    
    
    detailContainer.innerHTML = createRestoItemDetail(restaurant);
    
    foods.forEach((food) => {
      foodContainer.innerHTML += `<p>${food.name}<p>`
    })
    
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += `<p>${drink.name}<p>`
    })
    customerReviews.forEach((review) => {
      reviewContainer.innerHTML += `
        <tr>
          <th>Name</th>
          <th>Review</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>${review.name}</td>
          <td>${review.review}</td>
          <td>${review.date}</td>
        </tr>
      `
    })
    
    form.addEventListener('submit', (e) => {
      const name = document.querySelector("#Name").value
      const review = document.querySelector("#Review").value
      if (name === '' && review === '') {
        alert('nama dan review tidak boleh kosong ')
        name = ''
        review = ''
      } else {
        PostReview(url, name, review)
        name = ''
        review = ''
      }
    })
    
  }
};
 
export default Detail;