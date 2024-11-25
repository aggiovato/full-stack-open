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

export default StatisticLine;
