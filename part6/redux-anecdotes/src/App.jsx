// COMPONENTS
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
// CSS
import "./App.css";

/******************************************************************************/

const App = () => {
  return (
    <div className="root">
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
