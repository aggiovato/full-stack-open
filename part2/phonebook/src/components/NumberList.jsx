// EXTERNAL MODULES
import { useRef, useState, useEffect } from "react";

// EXTERNAL COMPONENTS
import ContactDialog from "@components/ContactDialog.jsx";
import MessageDialog from "@components/MessageDialog.jsx";

// STYLES
import {
  ListContainer,
  ListTitle,
  Number,
  NumberText,
  StyFaPhone,
  StyIoPerson,
} from "@styles/NumberList.styles.jsx";

/************************************************************************ */

// COMPONENT
const NumberList = ({ list, handleList }) => {
  // STATES
  const dialogRef = useRef(null); // -> keeps track of the dialog
  const messageRef = useRef(null); // -> keeps track of the pop-up message

  const [activeContact, setActiveContact] = useState(null);
  const [message, setMessage] = useState(null);

  // EFFECTS
  useEffect(() => {
    activeContact && dialogRef.current?.showModal();
  }, [activeContact]);
  // -> keeps watching for changes in activeContact
  // so it fixes the first render problem due to the async nature of useState

  // HANDLERS
  const handleContact = (contact) => {
    setActiveContact(contact);
  }; // -> handles the contact click

  const handleDeleteCompletion = (updatedList, message) => {
    handleList(updatedList);
    setMessage(message);
  }; // -> handles the deletion completion

  /************************************************************************ */

  return (
    <>
      {/* pop-up message */}
      <MessageDialog
        ref={messageRef}
        message={message}
        handleMessage={() => setMessage(null)}
        duration={4000}
      />
      {/* contact dialog */}
      <ContactDialog
        ref={dialogRef}
        contactDetails={activeContact}
        handleClosure={setActiveContact}
        handleDeleteCompletion={handleDeleteCompletion}
      />
      <ListContainer>
        <ListTitle>Numbers</ListTitle>
        {list.map((li) => {
          if (!li) return null;
          return (
            <Number key={li.id} onClick={() => handleContact(li)}>
              <NumberText>
                <StyIoPerson /> {li.name}
              </NumberText>
              <NumberText>
                {li.number} <StyFaPhone />
              </NumberText>
            </Number>
          );
        })}
      </ListContainer>
    </>
  );
};

export default NumberList;
