import HomePage from '../views/pages/home-page';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
 
export default routes;