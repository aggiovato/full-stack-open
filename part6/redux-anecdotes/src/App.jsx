import { useSelector, useDispatch, shallowEqual } from "react-redux";

// REDUX ACTIONS CREATORS
import { vote, create } from "./reducers/anecdoteReducer";
// CSS
import "./App.css";

/******************************************************************************/

const App = () => {
  const anecdotes = useSelector((state) => state, shallowEqual);
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    if (!content) return;
    event.target.content.value = "";
    dispatch(create(content));
  };

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

      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
