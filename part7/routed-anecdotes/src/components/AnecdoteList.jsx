import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-700 text-center mb-6">
        Anecdotes
      </h2>
      <ul className="flex flex-col gap-2 text-slate-500 font-semibold ml-10">
        {anecdotes.map((anecdote) => (
          <Link
            to={`/anecdote/${anecdote.id}`}
            key={anecdote.id}
            className="w-full px-8 py-4 bg-slate-200 max-w-3xl rounded-2xl hover:bg-slate-300 hover:text-slate-700 hover:shadow-md"
          >
            {anecdote.content}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
