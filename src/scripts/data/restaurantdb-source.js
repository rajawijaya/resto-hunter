import API_ENDPOINT from '../globals/api-endpoint';
import loaderHandler from '../utils/loader';

class RestaurantDbSource {
  static async homePage() {
    loaderHandler();
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    loaderHandler();
    return responseJson.restaurants;
  }

 	// static async upcomingMovies() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  static async detailResto(id) {
    loaderHandler();
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    loaderHandler();
    return response.json();
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
		   method: 'POST',
		   headers: {
		     'content-type': 'application/json',
		   },
		   body: JSON.stringify(data),
    });
    return response;
  }
}

export default RestaurantDbSource;
