const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-6 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
