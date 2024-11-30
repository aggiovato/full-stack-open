import { createGlobalStyle, styled } from "styled-components";

import Course from "./components/Course";
import courses_data from "./utils/data2.json";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Web development curriculum</h1>
      <CourseList>
        {courses_data.map((course) => (
          <StyCourse key={course.id} course={course} />
        ))}
      </CourseList>
    </>
  );
};

export default App;

/**
 * Global styles
 */

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin: 20px 0;
  }
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* En pantallas pequeñas, 1 columna */
  }
`;

const StyCourse = styled(Course)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    width: 100%; /* En pantallas pequeñas, cada carta ocupa toda la fila */
  }
`;
