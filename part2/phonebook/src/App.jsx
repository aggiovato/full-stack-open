import { createGlobalStyle } from "styled-components";
import Form from "./components/Form.jsx";
import NumberList from "./components/NumberList.jsx";

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567" },
  ]);

  return (
    <div>
      <GlobalStyle />
      <Form list={persons} handleList={setPersons} />
      <NumberList list={persons} />
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
