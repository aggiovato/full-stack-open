import { useMutation, useQueryClient } from "@tanstack/react-query";
import { voteAnecdote } from "../../services/anecdotes";
import { useNotification } from "../../contexts/NotificationContext";

const AnecdoteCard = ({ anecdote }) => {
  const queryClient = useQueryClient();
  const { dispatchNotification } = useNotification();

  const voteAnecdoteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: (updatedAnecdote) => {
      queryClient.setQueryData(["anecdotes"], (oldAnecdotes) => {
        if (!oldAnecdotes) return [];

        const newAnecdotes = oldAnecdotes.map((anecdote) =>
          anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
        );
        return newAnecdotes.sort((a, b) => b.votes - a.votes);
      });
      dispatchNotification({ type: "SHOW", payload: "Voted!" });
      let timeout;
      timeout = setTimeout(() => {
        if (timeout) clearTimeout(timeout);
        dispatchNotification({ type: "HIDE" });
        timeout = null;
      }, 5000);
    },
  });

  const handleVote = (anecdote) => {
    voteAnecdoteMutation.mutate(anecdote);
  };
  return (
    <div
      className="relative flex justify-between gap-3 w-full min-w-xs border border-gray-300 rounded-md shadow-md p-4 my-4"
      key={anecdote.id}
    >
      <div>{anecdote.content}</div>

      <div className="flex flex-col items-center md:flex-row md:justify-end gap-1.5 md:gap-2 self-end">
        <span className="min-w-[70px] text-gray-700 text-sm text-center md:text-end md:order-1">
          has {anecdote.votes}
        </span>
        <button
          className="bg-gray-500 py-1 px-3 rounded-md text-white text-sm shadow-md hover:bg-gray-700 md:order-2"
          onClick={() => handleVote(anecdote)}
        >
          vote
        </button>
      </div>
    </div>
  );
};

export default AnecdoteCard;
