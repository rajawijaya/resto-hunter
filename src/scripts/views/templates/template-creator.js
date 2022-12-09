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
 
 
 const createRestoItemDetail = (resto) => {
  
  return `
  <div class="resto-info">
    <div class="resto-title">
      <h2 class="title-resto">${resto.name}</h2>
      <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="resto title">
    </div>
    <div class="detail-resto">
      <table border="0">
        <tr>
          <th>Rating</th>
          <td>: ${resto.rating}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>: ${resto.city}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>: ${resto.address}</td>
        </tr>
      </table>
    </div>
  </div>
  <h4>Description :</h4>
  <br>
  <p>${resto.description}</p>

 `

}


 export { createRestoItem, createRestoItemDetail }