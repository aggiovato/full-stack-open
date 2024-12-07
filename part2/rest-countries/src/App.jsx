import { useState, useEffect } from "react";
import { getAllCountries } from "./services/countries";

import Country from "./components/Country.jsx";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => console.log(error));
  }, []); // loads the countries from the server

  const handleChange = (event) => {
    setQuery(event.target.value);
    const results = allCountries.filter((country) =>
      country.name.common
        .trim()
        .toLowerCase()
        .includes(event.target.value.trim().toLowerCase())
    );

    return results.length <= 10 ? setCountries(results) : setCountries(null);
  };

  const handleCountryClick = (country) => () => setCountries([country]);

  return (
    <div>
      Find countries <input type="text" onChange={handleChange} />
      {query && (
        <>
          {countries && countries.length === 1 ? (
            <Country country={countries[0]} />
          ) : countries ? (
            countries.map((country) => (
              <p key={country.name.common}>
                {country.name.common}{" "}
                <button onClick={handleCountryClick(country)}>show</button>
              </p>
            ))
          ) : (
            <p>Too many matches, specify another filter</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
