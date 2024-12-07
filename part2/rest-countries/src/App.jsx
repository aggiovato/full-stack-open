import { useState, useEffect } from "react";
import { getAllCountries } from "./services/countries";

import Country from "./components/Country.jsx";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
    const results = allCountries.filter((country) =>
      country.name.common
        .trim()
        .toLowerCase()
        .includes(event.target.value.trim().toLowerCase())
    );
    return results.length <= 10 ? setCountries(results) : setCountries(null);
  };

  return (
    <div>
      Find countries <input type="text" onChange={handleChange} />
      {country && (
        <>
          {countries && countries.length === 1 ? (
            <Country country={countries[0]} />
          ) : countries ? (
            countries.map((country) => (
              <p key={country.name.common}>{country.name.common}</p>
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
