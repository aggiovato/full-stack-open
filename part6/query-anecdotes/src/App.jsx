import { useQuery } from "@tanstack/react-query";
import { getAnecdotes } from "./services/anecdotes";
// COMPONENTS
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Loading from "./components/Loading";
import Error from "./components/Error";

const App = () => {
  const {
    data: anecdotes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // Display while loading
  if (isLoading) return <Loading />;

  // Display if there is an error
  if (isError)
    return (
      <Error
        title="Anecdote service not available due to problems with the server :("
        message={error.message}
      />
    );

  return (
    <div>
      <h3 className="text-2xl font-bold">Anecdote app</h3>

      <div className="flex flex-col items-center justify-center my-4">
        <Notification />
        <AnecdoteForm />
        <div className="mt-6" />
        {anecdotes &&
          anecdotes.map((anecdote) => (
            <div
              className="w-full min-w-xs border border-gray-300 rounded-md shadow-md p-4 my-4"
              key={anecdote.id}
            >
              <div>{anecdote.content}</div>
              <div className="mt-4 flex items-center justify-end">
                has {anecdote.votes}{" "}
                <button
                  className="bg-gray-500 py-1 px-3 ml-2 rounded-md text-white text-sm shadow-md hover:bg-gray-700"
                  onClick={() => console.log("vote")}
                >
                  vote
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
