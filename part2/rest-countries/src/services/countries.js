import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";

export const getAllCountries = () => {
  return axios.get(BASE_URL).then((res) => res.data);
};

export const getCountryByName = (name) => {
  return axios.get(`${BASE_URL}${name}`).then((res) => res.data);
};
