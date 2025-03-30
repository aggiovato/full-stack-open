import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const navbar = [
    { name: "anecdotes", path: "/", text: "anecdotes" },
    { name: "create", path: "/create", text: "create new" },
    { name: "about", path: "/about", text: "about" },
  ];

  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path &&
    `border-b-2 border-slate-500 text-slate-800 bg-slate-200 ${
      path === "/" ? "rounded-bl-2xl" : ""
    }`;

  return (
    <div className="hidden md:flex justify-center gap-0 bg-slate-100 font-semibold text-slate-500 rounded-bl-2xl">
      {navbar.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`px-6 py-3 hover:text-slate-800 ${isActive(item.path)}`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
