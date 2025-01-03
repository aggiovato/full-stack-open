import Button from "./Button";

const Feedback = ({ onFeedback }) => {
  // onFeedback is a reference to the function passed as a prop so it prints the handleFeedback definition
  return (
    <>
      <h1>Give feedback</h1>
      <Button text="good" onClick={onFeedback("good")} />
      <Button text="neutral" onClick={onFeedback("neutral")} />
      <Button text="bad" onClick={onFeedback("bad")} />
    </>
  );
};

export default Feedback;
