import Course from "./components/Course.jsx";
//import course_data from "./utils/data.json";
import courses_data from "./utils/data2.json";

const App = () => {
  return (
    <>
      {courses_data.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
