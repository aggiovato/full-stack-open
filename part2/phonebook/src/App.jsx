import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

import Filter from "@components/Filter.jsx";
import Form from "@components/Form.jsx";
import NumberList from "@components/NumberList.jsx";

const SERVER_URL = "http://localhost:3001/contacts";
const SERVER_URL_CLOUDFLARED =
  " https://cave-rocket-considered-tutorials.trycloudflare.com/contacts";
// Temporary deployed server on Cloudflare
/**
 * To use this service you need to install (on windows):
 *
 * winget install -e --id Cloudflare.cloudflared
 *
 * and then run:
 *
 * cloudflared tunnel --url <YOUR_SERVER_URL>
 *
 */

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    axios
      .get(SERVER_URL)
      .then((response) => {
        setContacts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

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
