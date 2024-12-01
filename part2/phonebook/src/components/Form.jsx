import { useState } from "react";
import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "../styles/Form-styles.jsx";

const Form = ({ list, handleList }) => {
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add new person to the list if not empty
    newName && handleList(list.concat({ name: newName }));

    // Reset the form
    setNewName("");
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
