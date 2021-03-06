import {homeApi} from "../api/api";

const MAIN_PAGE = 'MAIN_PAGE';
const PEOPLE_PAGE = 'PEOPLE_PAGE';
const FILMS_PAGE = 'FILMS_PAGE';
const SPECIES_PAGE = 'SPECIES_PAGE';
const VEHICLES_PAGE = 'VEHICLES_PAGE';
const STARSHIPS_PAGE = 'STARSHIPS_PAGE';
const PLANETS_PAGE = 'PLANETS_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_PLANETS_PAGE = 'SET_CURRENT_PLANETS_PAGE';
const PLANET_FILTER = 'PLANET_FILTER';

export const FILTERS = {
  ALL: "all",
  GRAVITY: "gravity",
  CLIMATE: "climate",
}

const initialState = {
  contentMenu: '',
  people: {},
  films: {},
  planets: {},
  species: {},
  vehicles: {},
  starships: {},
  currentPage: 1,
  currentPlanetPage: 1,
  filter: FILTERS.ALL
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_PAGE:
      return {
        ...state,
        contentMenu: action.mainData
      }

    case PEOPLE_PAGE:
      return {
        ...state,
        people: action.payload
      }

    case PLANETS_PAGE:
      return {
        ...state,
        planets: action.payload
      }

    case FILMS_PAGE:
      return {
        ...state,
        films: action.payload
      }

    case SPECIES_PAGE:
      return {
        ...state,
        species: action.payload
      }

    case VEHICLES_PAGE:
      return {
        ...state,
        vehicles: action.payload
      }

    case STARSHIPS_PAGE:
      return {
        ...state,
        starships: action.payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_CURRENT_PLANETS_PAGE:
      return {
        ...state,
        currentPlanetPage: action.currentPlanetPage
      }

    case PLANET_FILTER:
      return {
        ...state,
        filter: action.filter
      }

    default:
      return state
  }
}

export const getMainPage = (mainData) => ({
  type: MAIN_PAGE,
  mainData: mainData
})
export const getPeoplePage = (payload) => ({
  type: PEOPLE_PAGE,
  payload: payload
})
export const getPlanetsPage = (payload) => ({
  type: PLANETS_PAGE,
  payload: payload
})
export const getFilmsPage = (payload) => ({
  type: FILMS_PAGE,
  payload: payload
})
export const getSpeciesPage = (payload) => ({
  type: SPECIES_PAGE,
  payload: payload
})
export const getVehiclesPage = (payload) => ({
  type: VEHICLES_PAGE,
  payload: payload
})
export const getStarshipsPage = (payload) => ({
  type: STARSHIPS_PAGE,
  payload: payload
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})
export const setCurrentPlanetsPage = (currentPlanetPage) => ({
  type: SET_CURRENT_PLANETS_PAGE,
  currentPlanetPage: currentPlanetPage
})
export const planetFilter = (filter) => ({
  type: PLANET_FILTER,
  filter: filter
})

export const getMainContent = () => async (dispatch) => {
  const response = await homeApi.getHomePage();
  dispatch(getMainPage(response.data));
}
export const getPeoplePageContent = (currentPage) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  const response = await homeApi.getPeoplePage(currentPage);
  dispatch(getPeoplePage(response.data));
}
export const getPlanetsPageContent = (currentPlanetPage) => async (dispatch) => {
  const response = await homeApi.getPlanetsPage(currentPlanetPage);
  dispatch(setCurrentPlanetsPage(currentPlanetPage))
  dispatch(getPlanetsPage(response.data));
}
export const getFilmsPageContent = () => async (dispatch) => {
  const response = await homeApi.getFilmsPage();
  dispatch(getFilmsPage(response.data));
}
export const getSpeciesPageContent = () => async (dispatch) => {
  const response = await homeApi.getSpeciesPage();
  dispatch(getSpeciesPage(response.data));
}
export const getVehiclesPageContent = () => async (dispatch) => {
  const response = await homeApi.getVehiclesPage();
  dispatch(getVehiclesPage(response.data));
}
export const getStarshipsPageContent = () => async (dispatch) => {
  const response = await homeApi.getStarshipsPage();
  dispatch(getStarshipsPage(response.data));
}
