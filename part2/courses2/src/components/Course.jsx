const Header = ({ course_name }) => <h1>{course_name}</h1>;

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => <p>{`${name} ${exercises}`}</p>;

const Course = ({ course }) => {
  const { course_name, parts } = course;
  return (
    <>
      <Header course_name={course_name} />
      <Content parts={parts} />
    </>
  );
};

export default Course;
