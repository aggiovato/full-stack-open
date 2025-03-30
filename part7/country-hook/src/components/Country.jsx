const Country = ({ country }) => {
  if (country === null) return null;
  if (country.found === false) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.name.common} </h3>
      <div>capital: {country.capital} </div>
      <div>population: {country.population}</div>
      <img
        src={country.flags.svg}
        height="70"
        alt={`flag of ${country.name.common}`}
      />
    </div>
  );
};

export default Country;
