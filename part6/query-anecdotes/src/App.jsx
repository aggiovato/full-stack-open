import { useQuery } from "@tanstack/react-query";
import { getAnecdotes } from "./services/anecdotes";
import { NotificationProvider } from "./contexts/NotificationContext";
// COMPONENTS
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
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
    select: (data) => data.sort((a, b) => b.votes - a.votes),
    retry: false,
    refetchOnReconnect: true,
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
    <NotificationProvider>
      <h3 className="text-2xl font-bold">Anecdote app</h3>

      <div className="flex flex-col items-center justify-center my-4">
        <Notification />
        <AnecdoteForm />
        <hr className="w-full h-[3px] bg-gray-500 rounded-xl border-none my-6" />
        <AnecdoteList anecdotes={anecdotes} />
      </div>
    </NotificationProvider>
  );
};

export default App;
