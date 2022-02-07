import axios from "axios";

const BASE_URL = `https://swapi.dev/api/`;

export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
})
