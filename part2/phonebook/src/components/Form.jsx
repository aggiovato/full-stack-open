import { useState } from "react";

import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "@styles/Form.styles.jsx";

import isValidContact from "@helpers";

import { addContact } from "@services/contacts";

const Form = ({ list, handleList }) => {
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const trimmed_contact = {
        ...newContact,
        name: newContact.name.trim(),
        phone: newContact.phone.trim(),
      }; // id is not needed, it will be added by the server
      if (isValidContact(list, trimmed_contact)) {
        addContact(trimmed_contact)
          .then((data) => handleList(list.concat(data)))
          .catch((error) => console.log(error));
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setNewContact({ name: "", phone: "" });
    }
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
