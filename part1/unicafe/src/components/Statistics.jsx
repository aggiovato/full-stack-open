import { all, average, positive } from "../utils/helpers";

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;
  return (
    <>
      <h1>Statistics</h1>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>All: {all(good, neutral, bad)}</li>
        <li>Average: {average(good, neutral, bad).toFixed(2)}</li>
        <li>Positive: {positive(good, neutral, bad).toFixed(2)} %</li>
      </ul>
    </>
  );
};

export default Statistics;
