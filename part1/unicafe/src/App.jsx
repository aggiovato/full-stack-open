import { useState } from "react";

import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";

const App = () => {
  // Initial state for statistics
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Handle feedback from pressing buttons
  const handleFeedback = (type) => () => {
    console.log(type);
    setStats((prevStats) => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  return (
    <>
      {/* handleFeedback is initially passed as a reference through the prop onFeedback */}
      <Feedback onFeedback={handleFeedback} />
      <Statistics stats={stats} />
    </>
  );
};

export default App;
