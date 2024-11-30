import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const { course_name, parts } = course;
  return (
    <StyCourse>
      <Header course_name={course_name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </StyCourse>
  );
};

export default Course;

/**
 *
 * Styled components
 *
 */

const StyCourse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px;
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
