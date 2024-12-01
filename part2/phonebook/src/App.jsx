// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Filter from "./components/Filter.jsx";
import Form from "./components/Form.jsx";
import NumberList from "./components/NumberList.jsx";

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);

  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleListUpdate = (newPersons) => {
    setPersons(newPersons);
    setFilteredPersons(newPersons);
  };

  const handleFilter = (searchQuery) => {
    if (!searchQuery) {
      setFilteredPersons(persons);
    } else {
      setFilteredPersons(
        persons.filter((person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Filter handleFilter={handleFilter} />

      <Form list={persons} handleList={handleListUpdate} />
      <NumberList list={filteredPersons} />
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
