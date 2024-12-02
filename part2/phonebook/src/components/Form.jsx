import { useState } from "react";

import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "@styles/Form.styles.jsx";

import { isAdded, isValidPhone } from "@helpers";

const Form = ({ list, handleList }) => {
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhone(newContact.phone)) {
      alert(`The phone number ${newContact.phone} is not valid`);
      setNewContact((prevPerson) => ({ ...prevPerson, phone: "" }));
      return;
    }

    let trimmed_person = {
      ...newContact,
      name: newContact.name.trim(),
      phone: newContact.phone.trim(),
      id: list.length + 1,
    };

    const is_added = isAdded(list, trimmed_person);

    trimmed_person.name && trimmed_person.phone && !is_added
      ? handleList(list.concat(trimmed_person))
      : is_added
      ? alert(
          `${trimmed_person.name} with phone number ${trimmed_person.phone} is already added to phonebook`
        )
      : null;

    setNewContact({ name: "", phone: "" });
  };

  const handleNameChange = (event) => {
    setNewContact({ ...newContact, name: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setNewContact({ ...newContact, phone: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <FormTitle>New contact</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="name"
            type="text"
            placeholder="Name"
            value={newContact.name}
            onChange={handleNameChange}
          />
          <FormInput
            id="phone"
            type="tel"
            placeholder="Phone number"
            value={newContact.phone}
            onChange={handlePhoneChange}
          />

          <FormButton type="submit">Add</FormButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
