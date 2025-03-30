import { Link } from "react-router-dom";
import ArrowIcon from "./icons/ArrowIcon";
import LinkIcon from "./icons/LinkIcon";

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div className="flex gap-10 justify-center items-center mt-8">
      <Link to="/">
        <ArrowIcon className="w-8 h-8 text-slate-500 hover:text-slate-600 cursor-pointer" />
      </Link>
      <div className="flex flex-col justify-center items-center bg-slate-200 px-8 py-6 rounded-2xl min-w-xs w-full max-w-xl shadow-md">
        <h2 className="text-xl font-bold text-slate-700">
          {anecdote?.content}
        </h2>
        <p className="mt-4">
          by{" "}
          <span className="font-semibold text-slate-600">
            {anecdote?.author}
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <p>
          has{" "}
          <span className="font-semibold text-slate-600 text-xl">
            {anecdote?.votes}
          </span>{" "}
          <button
            onClick={() => vote(anecdote?.id)}
            className="px-3 py-0 bg-slate-600 text-slate-100 rounded-lg hover:bg-slate-700 active:bg-slate-800"
          >
            {anecdote?.votes !== 1 ? "votes" : "vote"}
          </button>
        </p>
        <div className="flex justify-center items-center mt-4">
          <p className="pr-4">for more info visit the URL</p>
          <a href={anecdote?.info} target="_blank" rel="noreferrer">
            <LinkIcon className="w-8 h-8 text-slate-500 hover:text-slate-600 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Anecdote;
