Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked restaurant', ({ I }) => {
  I.dontSeeElement('.card');
});


Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.card', 3);
  I.seeElement('.btn-see-detail');
  const firstRestaurant = locate('.btn-see-detail').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.card', 3);
  I.seeElement('.card');
});


Scenario('Unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card');
  I.amOnPage('/');

  I.waitForElement('.card', 3);
  I.seeElement('.btn-see-detail');
  const firstRestaurant = locate('.btn-see-detail').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  I.waitForElement('.card', 3);
  I.seeElement('.card');
  I.seeElement('.btn-see-detail');
  I.click(locate('.btn-see-detail').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});

