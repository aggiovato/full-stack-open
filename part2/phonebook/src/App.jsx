import { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Filter from "@components/Filter.jsx";
import Form from "@components/Form.jsx";
import NumberList from "@components/NumberList.jsx";

import contactData from "@data";

const App = () => {
  const [contacts, setContacts] = useState(contactData);

  const [filteredContacts, setFilteredContacts] = useState(contacts);

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
      <NumberList list={filteredContacts} />
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

/*const AppContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin: 0px 300px;

  @media (max-width: 768px) {
    /* Tablet */
/*padding: 20px 25px;
    max-width: 90%;
  }*/

/*@media (max-width: 480px) {
    /* Mobile */
/*flex-direction: column;
    align-items: stretch;
    padding: 5px 5px;
    margin: 0px 0px;
  }
`;*/
