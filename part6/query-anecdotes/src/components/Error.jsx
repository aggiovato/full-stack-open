const Error = ({
  title = "Something went wrong",
  message = "An unexpected error occurred.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-red-700 px-4">
      <div className="text-6xl">⚠️</div>
      <h2 className="text-xl text-center font-bold mt-4">{title}</h2>
      <p className="mt-2 text-lg text-center max-w-md">{message}</p>

      <button
        className="mt-6 bg-red-700 text-white px-4 py-2 rounded-md shadow hover:bg-red-800 transition-all"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
