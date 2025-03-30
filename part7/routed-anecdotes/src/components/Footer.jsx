import GithubIcon from "./icons/GithubIcon";

const Footer = () => (
  <div className="flex justify-center items-center w-full py-8 px-6 text-slate-50 bg-slate-700 rounded-t-2xl mt-6">
    <p className="text-center px-8">
      Anecdote app for{" "}
      <a
        href="https://fullstackopen.com/"
        target="_blank"
        rel="noreferrer"
        className="text-amber-300 hover:text-amber-400 underline"
      >
        Full Stack Open
      </a>
    </p>
    <div className="flex justify-center items-center gap-2">
      <p>Visit</p>
      <button
        onClick={() =>
          window.open(
            "https://github.com/aggiovato/full-stack-open/tree/main/part7/routed-anecdotes"
          )
        }
      >
        <GithubIcon className="w-6 h-6 cursor-pointer hover:text-amber-300" />
      </button>{" "}
      <p>for the source code.</p>
    </div>
  </div>
);

export default Footer;
