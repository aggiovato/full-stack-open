/******HOOKS********/
import useField from "../hooks/useField";
import useResource from "../hooks/useResource";

const NoteSection = () => {
  const { reset: resetContent, ...contentProps } = useField("text");
  const [notes, noteService] = useResource("http://localhost:3005/notes");

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    noteService.create({ content: contentProps.value });
    resetContent();
  };

  return (
    <>
      {/* NOTES SECTION */}
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...contentProps} />
        <button>create</button>
      </form>

      {/* NOTES LIST */}
      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}
    </>
  );
};

export default NoteSection;
