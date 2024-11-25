// This function is used to calculate the total number of feedbacks
export const all = (good, neutral, bad) => good + neutral + bad;

// This function is used to calculate the average of feedbacks
export const average = (good, neutral, bad) => {
  const total = all(good, neutral, bad);
  return total === 0 ? 0 : (good - bad) / total;
};

// This function is used to calculate the percentage of positive feedbacks
export const positive = (good, neutral, bad) => {
  const total = all(good, neutral, bad);
  return total === 0 ? 0 : (good / total) * 100;
};
