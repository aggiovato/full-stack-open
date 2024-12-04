import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

import Filter from "@components/Filter.jsx";
import Form from "@components/Form.jsx";
import NumberList from "@components/NumberList.jsx";

import { getAllContacts } from "@services/contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    getAllContacts()
      .then((data) => setContacts(data))
      .catch((error) => console.log(error));
  }, []); // loads the contacts from the server

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]); // updates the filtered contacts when the contacts change

  const handleListUpdate = (newContacts) => {
    setContacts(newContacts);
    setFilteredContacts(newContacts);
  };

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
  };

  return (
    <div>
      <GlobalStyle />
      <Filter handleFilter={handleFilter} />
      <Form list={contacts} handleList={handleListUpdate} />
      <NumberList list={filteredContacts || []} />
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
  }
`;
