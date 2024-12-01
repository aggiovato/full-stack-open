import { useState } from "react";
import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "../styles/Form-styles.jsx";
import { isAdded, isValidPhone } from "../utils/helpers.js";

const Form = ({ list, handleList }) => {
  const [newPerson, setNewPerson] = useState({ name: "", phone: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhone(newPerson.phone)) {
      alert(`The phone number ${newPerson.phone} is not valid`);
      setNewPerson((prevPerson) => ({ ...prevPerson, phone: "" }));
      return;
    }

    let trimmed_person = {
      ...newPerson,
      name: newPerson.name.trim(),
      phone: newPerson.phone.trim(),
    };

    const is_added = isAdded(list, trimmed_person);

    trimmed_person.name && trimmed_person.phone && !is_added
      ? handleList(list.concat(trimmed_person))
      : is_added
      ? alert(
          `${trimmed_person.name} with phone number ${trimmed_person.phone} is already added to phonebook`
        )
      : null;

    setNewPerson({ name: "", phone: "" });
  };

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setNewPerson({ ...newPerson, phone: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <FormTitle>Phonebook</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="name"
            type="text"
            placeholder="Name"
            value={newPerson.name}
            onChange={handleNameChange}
          />
          <FormInput
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={newPerson.phone}
            onChange={handlePhoneChange}
          />

          <FormButton type="submit">Add</FormButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
