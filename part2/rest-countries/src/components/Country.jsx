import { useEffect, useState } from "react";
import { getWeatherData, getWeatherIcon } from "../services/weather-data";

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherData(country.capital)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.log(error));
  }, [country]); // fetches the weather data for the country

  return (
    <>
      <div>
        <h2>{country.name.common}</h2>
        <p>
          <strong>Capital:</strong> {country.capital} <br />
          <strong>Area:</strong> {country.area} km²
        </p>
        <br />
        <p>
          <strong>Languages:</strong>
        </p>
        <ul>
          {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>
              {value} ({key})
            </li>
          ))}
        </ul>
        <br />
        <p>
          <strong>Flag:</strong>
        </p>
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          style={{ width: 200 }}
        />
      </div>
      <br />
      {weatherData && (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p>
            <strong> - Temperature:</strong> {weatherData.main.temp} °C <br />
            <strong> - Humidity:</strong> {weatherData.main.humidity} % <br />
            <strong> - Pressure:</strong> {weatherData.main.pressure} hPa <br />
            <strong> - Wind speed:</strong> {weatherData.wind.speed} m/s <br />
            <strong> - Description:</strong>{" "}
            {weatherData.weather[0].description}
          </p>
          <img
            src={getWeatherIcon(weatherData.weather[0].icon)}
            alt="Weather icon"
          />
        </div>
      )}
    </>
  );
};

export default Country;
