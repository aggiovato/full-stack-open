import StatisticLine from "./StatisticLine";

import { all, average, positive } from "../../utils/helpers";

const Table = ({ stats }) => {
  const { good, neutral, bad } = stats;

  const all_fb = all(good, neutral, bad);
  const average_fb = average(good, neutral, bad).toFixed(2);
  const positive_fb = positive(good, neutral, bad).toFixed(2);

  return (
    <>
      {/* If all feedbacks are 0*/}
      {/* we display a message saying so */}
      {!all_fb ? (
        <p>No feedbacks given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all_fb} />
            <StatisticLine text="Average" value={average_fb} />
            <StatisticLine text="Positive" value={positive_fb} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
