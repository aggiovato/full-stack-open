import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/name/";

export const getCountry = async (name) => {
  const res = await axios.get(`${baseUrl}${name}`);
  return res;
};
