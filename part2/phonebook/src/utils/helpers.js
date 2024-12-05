// Helpers

export const isAddedContact = (list, name) => {
  return list.some((item) => item.name === name);
}; // checks if the contact is already added, doesn't allow duplicates

const validatePhone = (phone) => {
  const phone_regex =
    /^\+?[0-9]{1,3}?[-. ]?\(?[0-9]{2,4}\)?[-. ]?[0-9]{3,4}[-. ]?[0-9]{3,4}$/;
  if (!phone) throw new Error("Phone number is required");
  if (!phone_regex.test(phone))
    throw new Error(`Phone number ${phone} is invalid`);
};

const validateName = (name) => {
  if (!name) throw new Error("Name is required");
  if (name.trim().length < 3 || name.trim().length > 30) {
    throw new Error("Name must be between 3 and 30 characters");
  }
};

export const isValidContact = (list, contact) => {
  validateName(contact.name);
  validatePhone(contact.phone);
}; // checks if the contact is valid (not empty and not already added)
