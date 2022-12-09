import API_ENDPOINT from '../globals/api-endpoint';
 
class RestaurantDbSource {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  
 	// static async upcomingMovies() {
	//   const response = await fetch(API_ENDPOINT.UPCOMING);
	//   const responseJson = await response.json();
	//   return responseJson.results;
	// }
 
  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
  
  static async menusRestaurant(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		const responseJson = await response.json();
		return responseJson.restaurant.menus;
	}
}
 
export default RestaurantDbSource;