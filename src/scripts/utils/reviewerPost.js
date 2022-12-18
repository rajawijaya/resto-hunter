import RestaurantDbSource from '../data/restaurantdb-source';

const PostReview = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  RestaurantDbSource.addReview(dataReview);

  const reviewContainer = document.querySelector('.reviews table tbody');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const newReview = `
        <tr>
          <th>Name</th>
          <th>Review</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>${name}</td>
          <td>${review}</td>
          <td>${date}</td>
        </tr>
      `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
