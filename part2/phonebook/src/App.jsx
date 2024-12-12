// EXTERNAL MODULES
import { useEffect, useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

// EXTERNAL COMPONENTS
import Navbar from "@components/Navbar.jsx";
import Filter from "@components/Filter.jsx";
import Form from "@components/Form.jsx";
import NumberList from "@components/NumberList.jsx";

// SERVICES
import { getAllContacts } from "@services/contacts";

const App = () => {
  // STATES
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  // EFFECTS
  useEffect(() => {
    getAllContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  // -> loads the contacts from the server

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);
  // -> updates the filtered contacts when the contacts change

  // HANDLERS
  const handleListUpdate = (newContacts) => {
    setContacts(newContacts);
    setFilteredContacts(newContacts);
  }; // -> updates the contacts list and the filtered contacts

  const handleFilter = (searchQuery) => {
    if (!searchQuery) {
      setFilteredContacts(contacts);
    } else {
      setFilteredContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        )
      );
    }
  }; // -> searches the query in the contacts list

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Filter handleFilter={handleFilter} />
      <Form list={contacts} handleList={handleListUpdate} />
      <NumberList list={filteredContacts} handleList={handleListUpdate} />
    </div>
  );
};

export default App;

/**
 * Global styles
 */
const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #444;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
