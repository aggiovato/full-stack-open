export const all = (good, neutral, bad) => good + neutral + bad;

export const average = (good, neutral, bad) => {
  const total = all(good, neutral, bad);
  return total === 0 ? 0 : (good - bad) / total;
};

export const positive = (good, neutral, bad) => {
  const total = all(good, neutral, bad);
  return total === 0 ? 0 : (good / total) * 100;
};
