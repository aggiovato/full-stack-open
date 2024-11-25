import Table from "./Table";

const Statistics = ({ stats }) => {
  return (
    <>
      <h1>Statistics</h1>
      <Table stats={stats} />
    </>
  );
};

export default Statistics;
