const CInput = ({ name, placeholder }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-2 focus:ring-slate-500  transition-all duration-200 focus:outline-none"
    />
  );
};

export default CInput;
