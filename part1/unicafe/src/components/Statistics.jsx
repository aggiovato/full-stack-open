const Statistics = ({ stats }) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
    </>
  );
};

export default Statistics;
