import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const ICONS_BASE_URL = "https://openweathermap.org/img/wn";
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherData = (city) => {
  return axios
    .get(`${BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
    .then((res) => res.data);
};

export const getWeatherIcon = (icon) => {
  return `${ICONS_BASE_URL}/${icon}@2x.png`;
};
