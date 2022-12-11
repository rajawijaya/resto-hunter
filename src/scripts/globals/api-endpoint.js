import CONFIG from './config';
 
const API_ENDPOINT = {
  HOME_PAGE: `${CONFIG.BASE_URL_LIST}`,
 	// UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	PICTURE: `${CONFIG.BASE_URL}/images/small/`,
  DETAIL: (id) => `${CONFIG.BASE_URL_DETAIL}/${id}`,
  REVIEW: `${CONFIG.BASE_URL_REVIEW}`
};
 
export default API_ENDPOINT;