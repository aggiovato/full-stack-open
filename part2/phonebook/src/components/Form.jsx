import { useState, useRef, useEffect } from "react";

import MessageDialog from "./MessageDialog";

import {
  FormContainer,
  FormTitle,
  FormInput,
  FormButton,
} from "@styles/Form.styles.jsx";

import {
  isValidContact,
  isAddedContact,
  getContactId,
  getTrimmedContact,
  updateContactList,
} from "@helpers";

import { addContact, updateContact } from "@services/contacts";

const Form = ({ list, handleList }) => {
  const [newContact, setNewContact] = useState({ name: "", phone: "" });
  const [message, setMessage] = useState(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const trmContact = getTrimmedContact(newContact);
      const { name: trmName, phone: trmPhone } = trmContact;
      isValidContact(list, trmContact);

      if (isAddedContact(list, trmName)) {
        const isPuttable = window.confirm(
          `${trmName} is already added to phonebook, do you want to replace the old number with ${trmPhone}?`
        );
        if (!isPuttable) return;
        const trmId = getContactId(list, trmName);

        updateContact(trmContact, trmId)
          .then((data) => {
            handleList(updateContactList(list, data));
            setMessage({
              type: "success",
              message: `Contact has been updated successfully`,
            });
          })
          .catch((error) => {
            error.code === "ERR_BAD_REQUEST"
              ? setMessage({
                  type: "error",
                  message: `Contact has been deleted from the server`,
                })
              : setMessage({ type: "error", message: error.message });
            console.log(error);
          });
      } else {
        addContact(trmContact)
          .then((data) => {
            handleList(list.concat(data));
            setMessage({
              type: "success",
              message: `New contact has been added successfully`,
            });
          })
          .catch((error) => {
            error.code === "ERR_BAD_REQUEST"
              ? setMessage({
                  type: "error",
                  message: `Contact has already been added`,
                })
              : setMessage({ type: "error", message: error.message });
            console.log(error);
          });
      }
    } catch (error) {
      setMessage({ type: "error", message: error.message });
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
      <MessageDialog
        ref={messageRef}
        message={message}
        handleMessage={() => setMessage(null)}
        duration={4000}
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
