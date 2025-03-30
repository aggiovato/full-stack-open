const Footer = () => (
  <div>
    Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
    See{" "}
    <button
      onClick={() =>
        window.open(
          "https://github.com/aggiovato/full-stack-open/tree/main/part7/routed-anecdotes"
        )
      }
    >
      <img
        src="https://github.com/aggiovato.png"
        alt="github profile picture"
        width={30}
        height={30}
      />
    </button>{" "}
    for the source code.
  </div>
);

export default Footer;
