/******HOOKS********/
import useField from "../hooks/useField";
import useResource from "../hooks/useResource";

const PersonSection = () => {
  const { reset: resetName, ...nameProps } = useField("text");
  const { reset: resetNumber, ...numberProps } = useField("text");
  const [persons, personService] = useResource("http://localhost:3005/persons");

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    personService.create({ name: nameProps.value, number: numberProps.value });
    resetName();
    resetNumber();
  };

  return (
    <>
      {/* PERSONS SECTION */}
      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...nameProps} /> <br />
        number <input {...numberProps} />
        <button>create</button>
      </form>

      {/* PERSONS LIST */}
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </>
  );
};

export default PersonSection;
