import { Routes, Route } from "react-router-dom";
/***** COMPONENTS *****/
import AnecdoteList from "../components/AnecdoteList";
import Anecdote from "../components/Anecdote";
import About from "../components/About";
import CreateNew from "../components/CreateNew";
/***** HOOKS *****/
import useAnecdotes from "../hooks/useAnecdotes";

const CRouter = () => {
  const { anecdote, anecdotes, notification, addNew, vote } = useAnecdotes();

  return (
    <>
      {notification && (
        <div className="flex justify-center items-center mb-2 text-center">
          <p className="px-8 py-4 bg-emerald-600 text-emerald-100 max-w-3xl rounded-xl shadow-lg">
            {notification}
          </p>
        </div>
      )}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/anecdote/:id"
          element={<Anecdote anecdote={anecdote} vote={vote} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
      </Routes>
    </>
  );
};

export default CRouter;
