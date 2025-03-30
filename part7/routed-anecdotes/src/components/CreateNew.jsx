import { useState } from "react";

const CreateNew = ({ addNew }) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");

  const formData = [
    { name: "content", label: "Content", value: content, fnSate: setContent },
    { name: "author", label: "Author", value: author, fnSate: setAuthor },
    { name: "info", label: "URL for more info", value: info, fnSate: setInfo },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(content.length > 0 && author.length > 0 && info.length > 0)) return;

    addNew({
      content,
      author,
      info,
      votes: 0,
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-700 text-center mb-6">
        Create a new Anecdote
      </h2>
      <form onSubmit={handleSubmit}>
        {formData.map((item) => (
          <div key={item.name} className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-500">
              {item.label}
            </label>
            <input
              name={item.name}
              value={item.value}
              onChange={(e) => item.fnSate(e.target.value)}
              className="min-w-sm px-2 py-2 mb-2 border-2 border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-amber-200 focus:shadow-outline-blue focus:ring-2 focus:ring-amber-100"
            />
          </div>
        ))}

        <button className="min-w-sm px-2 py-2 text-center bg-slate-600 text-slate-100 font-semibold rounded-lg mt-8 hover:bg-slate-700 active:bg-slate-800">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
