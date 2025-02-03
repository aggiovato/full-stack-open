import { useSelector, useDispatch, shallowEqual } from "react-redux";
// COMPONENTS
import AnecdoteForm from "./components/AnecdoteForm";
// REDUX ACTIONS CREATORS
import { vote } from "./reducers/anecdoteReducer";
// CSS
import "./App.css";

/******************************************************************************/

const App = () => {
  const anecdotes = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div className="root">
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div className="anecdote-card" key={anecdote.id}>
          <div className="anecdote-content">{anecdote.content}</div>
          <div className="anecdote-votes">
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm />
    </div>
  );
};

export default App;
