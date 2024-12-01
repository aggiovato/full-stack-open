// Helpers

export const isAdded = (list, person) => {
  return list.some(
    (item) => item.name === person.name && item.phone === person.phone
  );
};

export const isValidPhone = (phone) => {
  return /^\+?[\d]{1,13}([-. ]?[\d]{1,13})*$/.test(phone);
};
