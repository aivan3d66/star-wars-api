import axios from "axios";

const BASE_URL = `https://swapi.dev/api/`;

export const instance = axios.create({
  baseURL: BASE_URL,
})


export const homeApi = {
  getHomePage() {
    return instance.get(BASE_URL);
  },
  getPeoplePage(currentPage) {
    return instance.get(`people/?page=${currentPage}`)
  },
  getPlanetsPage(currentPage) {
    return instance.get(`planets/?page=${currentPage}`)
  },
  getFilmsPage() {
    return instance.get(`films/`)
  },
  getSpeciesPage() {
    return instance.get(`species/`)
  },
  getVehiclesPage() {
    return instance.get(`vehicles/`)
  },
  getStarshipsPage() {
    return instance.get(`starships/`)
  },
}
