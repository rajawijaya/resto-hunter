import { openDB } from 'idb';
import CONFIG from '../globals/config';
 
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

Menyiapkan Fungsi Operations DB
Untuk persiapan awal, mari kita buat nilai konstan baru pada src -> scripts -> globals -> config.js sebagai nama database, versi, dan nama object store yang akan kita gunakan. Silakan sesuaikan kode di config.js seperti berikut..

src -> scripts -> globals -> config.js
const CONFIG = {
  KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'MovieCatalogue-V1',
  DATABASE_NAME: 'movie-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
};
 
export default CONFIG;
Karena kita akan menggunakan library idb, mari pasang terlebih dahulu package tersebut pada proyek Movie Catalogue dengan menggunakan perintah:

npm install idb
Selanjutnya kita buat fungsi serupa dengan CacheHelper yang berfungsi untuk membantu proses operations DB lebih mudah dilakukan. Silakan buat berkas JavaScript baru dengan nama favorite-movie-idb.js dan simpan pada src -> scripts -> data.

dos:ebaaf8e24093cde1c808033b34fa1ed220220609144521.png
Di dalamnya kita tuliskan kode untuk membuka/membuat database serta object store dengan nama, dan version yang sudah kita tetapkan pada config.js.

src -> scripts -> data -> favorite-movie-idb.js
import { openDB } from 'idb';
import CONFIG from '../globals/config';
 
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
 
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
 
const FavoriteMovieIdb = {
  async getMovie(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllMovies() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putMovie(movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  },
  async deleteMovie(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};


export default FavoriteMovieIdb;