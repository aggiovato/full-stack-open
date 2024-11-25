import { all, average, positive } from "../utils/helpers";

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;

  const all_fb = all(good, neutral, bad);
  const average_fb = average(good, neutral, bad).toFixed(2);
  const positive_fb = positive(good, neutral, bad).toFixed(2);

  return (
    <>
      <h1>Statistics</h1>
      {!all_fb ? (
        <p>No feedbacks given</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>All: {all_fb}</li>
          <li>Average: {average_fb}</li>
          <li>Positive: {positive_fb} %</li>
        </ul>
      )}
    </>
  );
};

export default Statistics;
