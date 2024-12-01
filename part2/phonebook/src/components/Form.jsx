import { useState } from "react";
import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "../styles/Form-styles.jsx";
import { isAdded } from "../utils/helpers.js";

const Form = ({ list, handleList }) => {
  const [newName, setNewName] = useState(""); // State to store the new name

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const trimmed_name = newName.trim(); // Remove spaces from the beginning and end of the string
    const is_added = isAdded(list, trimmed_name); // Check if the name is already in the list
    trimmed_name && !is_added
      ? handleList(list.concat({ name: trimmed_name }))
      : is_added
      ? alert(`${trimmed_name} is already added to phonebook`)
      : null;

    setNewName(""); // Reset the form
  };

  return (
    <>
      <FormContainer>
        <FormTitle>Phonebook</FormTitle>
        <form onSubmit={handleSubmit}>
          <div>
            <FormInput
              id="name"
              type="text"
              placeholder="Write your name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <FormButton type="submit">Add</FormButton>
          </div>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
