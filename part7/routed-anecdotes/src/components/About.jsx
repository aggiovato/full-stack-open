import { Link } from "react-router-dom";

const About = () => (
  <div>
    <h2 className="text-xl font-bold text-slate-700 text-center mb-6">
      About Anecdote App
    </h2>
    <p className="mb-6">According to Wikipedia:</p>

    <div className="flex flex-col justify-center items-center">
      <p className="px-8 py-4 mb-6 bg-slate-100 max-w-3xl rounded-2xl shadow-md">
        An anecdote is a brief, revealing account of an individual person or an
        incident. Occasionally humorous, anecdotes differ from jokes because
        their primary purpose is not simply to provoke laughter but to reveal a
        truth more general than the brief tale itself, such as to characterize a
        person by delineating a specific quirk or trait, to communicate an
        abstract idea about a person, place, or thing through the concrete
        details of a short narrative. An anecdote is a story with a point.
      </p>
    </div>

    <p className="font-semibold text-slate-500 text-center">
      {`Software engineering is full of excellent anecdotes, at this app you can
      find the best and `}
      <Link
        to={"/create"}
        className="font-bold text-slate-600 hover:text-slate-700 hover:underline"
      >
        add more
      </Link>
      .
    </p>
  </div>
);

export default About;
