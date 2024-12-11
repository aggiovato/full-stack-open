// EXTERNAL MODULES
import { useState, useRef } from "react";

// EXTERNAL COMPONENTS
import MessageDialog from "./MessageDialog";

// STYLES
import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "@styles/Form.styles.jsx";

// HELPERS
import {
  isValidContact,
  isAddedContact,
  getContactId,
  getTrimmedContact,
  updateContactList,
} from "@helpers";

// SERVICES
import { addContact, updateContact } from "@services/contacts";

/************************************************************************ */

// COMPONENT
const Form = ({ list, handleList }) => {
  // STATES
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [message, setMessage] = useState(null);
  const messageRef = useRef(null);

  // HANDLERS
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // DATA TRATEMENT
      // trims the contact name and phone number
      const trmContact = getTrimmedContact(newContact);
      const { name: trmName, number: trmPhone } = trmContact;

      // checks if the contact is valid
      // not empty, long enough and valid phone number

      isValidContact(trmContact);

      // checks if the contact is already added
      if (isAddedContact(list, trmName)) {
        const isPuttable = window.confirm(
          `${trmName} is already added to phonebook, do you want to replace the old number with ${trmPhone}?`
        );

        if (!isPuttable) return;

        const trmId = getContactId(list, trmName);

        // PUT CONTACT /api/persons/:id
        updateContact(trmContact, trmId)
          .then((data) => {
            handleList(updateContactList(list, data));
            setMessage({
              type: "success",
              message: `Contact has been updated successfully`,
            });
          })
          .catch((error) => {
            setMessage({ type: "error", message: error.message });
          });
      } else {
        // POST CONTACT /api/persons
        addContact(trmContact)
          .then((data) => {
            handleList(list.concat(data));
            setMessage({
              type: "success",
              message: `New contact has been added successfully`,
            });
          })
          .catch((error) => {
            setMessage({ type: "error", message: error.message });
          });
      }
    } catch (error) {
      // VALIDATION ERROR
      setMessage({ type: "error", message: error.message });
    } finally {
      // RESETS THE FORM
      setNewContact({ name: "", number: "" });
    }
  }; // -> handles the form submission

  const handleNameChange = (event) => {
    setNewContact({ ...newContact, name: event.target.value });
  }; // -> handles the name change

  const handlePhoneChange = (event) => {
    setNewContact({ ...newContact, number: event.target.value });
  }; // -> handles the phone number change

  /************************************************************************ */
  return (
    <>
      <MessageDialog
        ref={messageRef}
        message={message}
        handleMessage={() => setMessage(null)}
        duration={3000}
      />
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
            id="number"
            type="tel"
            placeholder="Phone number"
            value={newContact.number}
            onChange={handlePhoneChange}
          />

          <FormButton type="submit">Add</FormButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
