import { all, average, positive } from "../utils/helpers";

const StatisticLine = ({ text, value }) => (
  <li>
    <span>{text}: </span>
    {/* If the value is a percentage, we display it as a span with a % sign */}
    {text === "Positive" ? <span>{value} %</span> : <span>{value}</span>}
  </li>
);

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;

  const all_fb = all(good, neutral, bad);
  const average_fb = average(good, neutral, bad).toFixed(2);
  const positive_fb = positive(good, neutral, bad).toFixed(2);

  return (
    <>
      <h1>Statistics</h1>
      {/* If all feedbacks are 0, we display a message saying so */}
      {!all_fb ? (
        <p>No feedbacks given</p>
      ) : (
        <ul>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={all_fb} />
          <StatisticLine text="Average" value={average_fb} />
          <StatisticLine text="Positive" value={positive_fb} />
        </ul>
      )}
    </>
  );
};

export default Statistics;
