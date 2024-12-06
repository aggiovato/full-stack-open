import { useRef, useState, useEffect } from "react";

import ContactDialog from "@components/ContactDialog.jsx";
import MessageDialog from "@components/MessageDialog.jsx";

import {
  ListContainer,
  ListTitle,
  Number,
  NumberText,
  StyFaPhone,
  StyIoPerson,
} from "@styles/NumberList.styles.jsx";

const NumberList = ({ list }) => {
  const dialogRef = useRef(null);
  const messageRef = useRef(null);
  const [activeContact, setActiveContact] = useState(null);
  const [message, setMessage] = useState(null);
  const [contacts, setContacts] = useState(list);

  useEffect(() => {
    activeContact && dialogRef.current?.showModal();
  }, [activeContact]); // keeps watching for changes in activeContact, so it fixes the first render problem due to the async nature of useState

  useEffect(() => {
    setContacts(list);
  }, [list]); // updates the contacts when the list changes

  const handleContact = (contact) => {
    setActiveContact(contact);
  };

  const handleDeleteCompletion = (updatedList, message) => {
    setContacts(updatedList);
    setMessage(message);
  };

  return (
    <>
      <MessageDialog
        ref={messageRef}
        message={message}
        handleMessage={() => setMessage(null)}
        duration={4000}
      />
      <ContactDialog
        ref={dialogRef}
        contactDetails={activeContact}
        handleClosure={setActiveContact}
        handleDeleteCompletion={handleDeleteCompletion}
        list={contacts}
      />
      <ListContainer>
        <ListTitle>Numbers</ListTitle>
        {contacts.map((contact) => {
          if (!contact) return null;
          return (
            <Number key={contact.id} onClick={() => handleContact(contact)}>
              <NumberText>
                <StyIoPerson /> {contact.name}
              </NumberText>
              <NumberText>
                {contact.phone} <StyFaPhone />
              </NumberText>
            </Number>
          );
        })}
      </ListContainer>
    </>
  );
};

export default NumberList;
