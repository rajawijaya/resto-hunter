Feature('likeRestaurant');

Scenario('test something',  ({ I }) => {
    I.amOnPage('/');
    I.seeElement(".jumbotron");
});
