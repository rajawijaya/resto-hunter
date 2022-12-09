import CONFIG from '../../globals/config';
 
 const createRestoItem = (resto) => {
  return `
      <div class="card" id="${resto.id}">
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Restaurant Picture">
        <div class="card-detail">
          <p><img src="./images/icons/star-solid.svg" alt="ratings" width="10px"/>
          ${resto.rating}
          </p>
          <p><img src="./images/icons/location-dot-solid.svg" alt="location" width="10px"/>
          ${resto.city} 
          </p>
          <p class="resto-name">
            ${resto.name} 
          </p>
          <p class="resto-desc">
            ${resto.description}
          </p>
        </div>
        <a href="#/detail/${resto.id}" class="btn-see-detail">
          <button class="btn-read-more"></button>
        </a>
      </div>
   `
 }
 
 export { createRestoItem }