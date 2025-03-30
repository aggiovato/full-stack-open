import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import anecdotesData from "../data/anecdotes.json";

const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState(anecdotesData);
  const [notification, setNotification] = useState("");

  const match = useMatch("/anecdote/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;

  const navigate = useNavigate();

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(
      `Anecdote ${
        anecdote.content.length > 30
          ? anecdote.content.slice(0, 30) + "..."
          : anecdote.content
      } added`
    );
    setTimeout(() => setNotification(""), 5000);
    navigate("/"); // redirect to home page
  };

  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return {
    anecdote,
    anecdotes,
    notification,
    addNew,
    vote,
  };
};

export default useAnecdotes;
