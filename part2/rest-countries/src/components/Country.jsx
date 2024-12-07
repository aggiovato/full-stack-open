const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <br />
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
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
  );
};

export default Country;
