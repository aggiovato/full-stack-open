/***** HOOKS *****/
import useField from "../hooks/useField";
import formData from "../data/formData.json";

const CreateNew = ({ addNew }) => {
  const fieldsObj = {
    content: useField("text", "content"),
    author: useField("text", "author"),
    info: useField("text", "info"),
  };

  const fieldsArr = Object.values(fieldsObj);

  const data = formData.map((item) => ({
    ...item,
    type: fieldsObj[item.name].type,
    value: fieldsObj[item.name].value,
    fnSate: fieldsObj[item.name].onChange,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldsArr.every((field) => field.value.length === 0)) return;

    addNew({
      content: fieldsObj.content.value,
      author: fieldsObj.author.value,
      info: fieldsObj.info.value,
      votes: 0,
    });
  };

  const handleReset = () => {
    fieldsArr.forEach((field) => field.reset());
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-700 text-center mb-6">
        Create a new Anecdote
      </h2>
      <form onSubmit={handleSubmit}>
        {data.map((item) => (
          <div key={item.name} className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-500">
              {item.label}
            </label>
            <input
              name={item.name}
              value={item.value}
              type={item.type}
              onChange={item.fnSate}
              className="min-w-sm px-2 py-2 mb-2 border-2 border-slate-400 rounded-md shadow-sm focus:outline-none focus:border-amber-200 focus:shadow-outline-blue focus:ring-2 focus:ring-amber-100"
            />
          </div>
        ))}

        <div className="flex justify-center items-center mt-4 gap-4">
          <button className="min-w-3xs px-2 py-2 text-center bg-slate-600 text-slate-100 font-semibold rounded-lg mt-8 hover:bg-slate-700 active:bg-slate-800">
            Create
          </button>
          <button
            className="min-w-3xs px-2 py-2 text-center bg-gray-200 text-gray-700 font-semibold rounded-lg mt-8 hover:bg-gray-300 active:bg-gray-400"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNew;
