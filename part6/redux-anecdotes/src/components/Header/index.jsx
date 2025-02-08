import Filter from "../Filter";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-2 items-center justify-between mb-2 md:flex-row lg:mb-6 sticky top-0 select-none bg-slate-200 border border-slate-300 rounded-b-2xl shadow-lg shadow-slate-300 px-6 md:px-10 py-2 md:py-6 z-30">
        <h1 className="text-2xl md:text-3xl font-bold my-2 md:my-0">
          Anecdotes
        </h1>
        <div className="mb-4 md:mb-0 w-full min-w-xs max-w-md md:w-auto px-4">
          <Filter />
        </div>
      </header>
    </>
  );
};

export default Header;
