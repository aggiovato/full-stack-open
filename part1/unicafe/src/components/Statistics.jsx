import { all, average, positive } from "../utils/helpers";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td
      style={{
        paddingRight: "20px",
        fontWeight: "bold",
      }}
    >
      {text}
    </td>
    {/* If the value is a percentage*/}
    {/* we display it as a span with a % sign */}
    {text === "Positive" ? (
      <td align="right">{value} %</td>
    ) : (
      <td align="right">{value}</td>
    )}
  </tr>
);

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

const Statistics = ({ stats }) => {
  return (
    <>
      <h1>Statistics</h1>
      <Table stats={stats} />
    </>
  );
};

export default Statistics;
