import Course from "./components/Course.jsx";
import course_data from "./utils/data.json";

const App = () => {
  return <Course course={course_data} />;
};

export default App;
