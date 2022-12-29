import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorit-resto-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
 
  beforeEach(() => {
    addLikeButtonContainer();
  });
  
  
  
  it('should show the like button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });
    
    expect(document.querySelector('[aria-label="like this movie"'))
        .toBeTruthy()
  });
  
  it('should not show the unlike button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this movie"]'))
        .toBeFalsy();
  });
  
  it('should not show the unlike button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });
    
    FavoriteRestoIdb.deleteResto(1);
  });
  
  it('should not add a resto again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1,
      },
    });
    
    await FavoriteRestoIdb.putResto({ id: 1 });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);
    
    FavoriteRestoIdb.deleteResto(1);
  });
  
  xit('should not add a resto when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {},
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
  });
});