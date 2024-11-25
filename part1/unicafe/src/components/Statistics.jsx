import { all, average, positive } from "../utils/helpers";

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all(good, neutral, bad)}</p>
      {/* toFixed(2) rounds to 2 decimal places */}
      <p>Average: {average(good, neutral, bad).toFixed(2)}</p>
      <p>Positive: {positive(good, neutral, bad).toFixed(2)} %</p>
    </>
  );
};

export default Statistics;
