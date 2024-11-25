export const randomize = (limit) => Math.floor(Math.random() * limit);

export const getMostVotedKey = (votes) => {
  let mostVotedKey = Object.keys(votes)[0];
  let highestVote = votes[mostVotedKey];

  for (const key in votes) {
    if (votes[key] > highestVote) {
      mostVotedKey = key;
      highestVote = votes[key];
    }
  }

  return mostVotedKey;
};

/*export const getMostVotedKey = (votes) => {
  return Object.entries(votes).reduce(
    (mostVotedKey, [key, value]) =>
      value > votes[mostVotedKey] ? key : mostVotedKey,
    Object.keys(votes)[0]
  );
};*/
