import { useRef, useState, useEffect } from "react";

import ContactDialog from "@components/ContactDialog.jsx";

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
  const [activeContact, setActiveContact] = useState(null);

  useEffect(() => {
    activeContact && dialogRef.current?.showModal();
  }, [activeContact]); // keeps watching for changes in activeContact, so it fixes the first render problem due to the async nature of useState

  const handleContact = (contact) => {
    setActiveContact(contact);
  };

  if (!Array.isArray(list)) {
    console.error("Invalid prop 'list': expected an array, got:", list);
    return <p>No contacts available.</p>;
  }

  return (
    <>
      <ContactDialog
        ref={dialogRef}
        contactDetails={activeContact}
        handleClosure={setActiveContact}
        list={list}
      />
      <ListContainer>
        <ListTitle>Numbers</ListTitle>
        {list.map((contact) => {
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
