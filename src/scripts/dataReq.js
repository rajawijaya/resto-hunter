import data from '../DATA.json';

const { restaurants } = data;
const cardWrap = document.querySelector('.card-wrapper');

export default function dataReq() {
  restaurants.forEach((d) => {
    cardWrap.innerHTML += `
      <div class="card" id="${d.id}">
        <img src="${d.pictureId}" alt="Restaurant Picture">
        <div class="card-detail">
          <p><img src="./images/icons/star-solid.svg" alt="ratings" width="10px"/>
          ${d.rating}
          </p>
          <p><img src="./images/icons/location-dot-solid.svg" alt="location" width="10px"/>
          ${d.city} 
          </p>
          <p class="resto-name">
            ${d.name} 
          </p>
          <p class="resto-desc">
            ${d.description}
          </p>
        </div>
        <button class="btn-read-more"></button>
      </div>
     `;

    const card = document.querySelectorAll('.card');
    const cardDetail = document.querySelectorAll('.card-detail');
    const readMore = document.querySelectorAll('.btn-read-more');

    for (let i = 0; i < card.length; i++) {
      readMore[i].addEventListener('click', () => {
        readMore[i].classList.toggle('active');
        card[i].classList.toggle('active');
        cardDetail[i].classList.toggle('active');
      });
    }
  });
}
