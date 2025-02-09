import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../services/anecdotes";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const createAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(["anecdotes"], [...anecdotes, newAnecdote]);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (!content) return null;
    event.target.anecdote.value = "";
    console.log("new anecdote", content);
    createAnecdoteMutation.mutate(content);
  };

  return (
    <div className="w-full min-w-xs max-w-lg flex flex-col items-center justify-center bg-gray-200 p-4 my-4 border border-gray-300 rounded-md shadow-md">
      <h3 className="text-xl font-bold">Create new</h3>
      <form
        className="min-w-xs w-full px-6 flex flex-col items-center justify-center my-4"
        onSubmit={onCreate}
      >
        <input
          className="w-full text-base rounded-md px-4 py-2 bg-gray-100 border border-gray-300"
          name="anecdote"
        />
        <button
          className="mt-4 w-full text-base rounded-md px-6 py-1 bg-gray-500 text-white hover:bg-gray-700"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
