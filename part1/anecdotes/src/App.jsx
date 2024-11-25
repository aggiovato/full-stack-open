import { useState } from "react";
import { anecdotes } from "./utils/data";
import { randomize } from "./utils/helpers";

const App = () => {
  const [selected, setSelected] = useState(0);

  // Handle clicking the button
  // We generate a random number between 0 and the length of the anecdotes array
  const handleClick = () => {
    let random;
    do {
      random = randomize(anecdotes.length);
    } while (random === selected);
    setSelected(random);
  };

  return (
    <>
      <h1>A random anecdote</h1>
      <button onClick={handleClick}>Next anecdote</button>

      <p>{anecdotes[selected]}</p>
    </>
  );
};

export default App;
