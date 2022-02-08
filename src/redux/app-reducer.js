import {homeApi} from "../api/api";

const MAIN_PAGE = 'MAIN_PAGE';
const PEOPLE_PAGE = 'PEOPLE_PAGE';
const FILMS_PAGE = 'FILMS_PAGE';
const SPECIES_PAGE = 'SPECIES_PAGE';
const VEHICLES_PAGE = 'VEHICLES_PAGE';
const STARSHIPS_PAGE = 'STARSHIPS_PAGE';
const PLANETS_PAGE = 'PLANETS_PAGE';

const initialState = {
  contentMenu: '',
  people: {},
  films: {},
  planets: {},
  species: {},
  vehicles: {},
  starships: {},
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

    default:
      return state
  }
}

export const getMainPage = (mainData) => ({
  type: MAIN_PAGE,
  mainData: mainData
})

export const getMainContent = () => async (dispatch) => {
  const response = await homeApi.getHomePage();
  dispatch(getMainPage(response.data));
}
