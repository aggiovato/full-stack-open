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
}; // checks if the contact phone number is valid

const validateName = (name) => {
  if (!name) throw new Error("Name is required");
  if (name.trim().length < 3 || name.trim().length > 30) {
    throw new Error("Name must be between 3 and 30 characters");
  }
}; // checks if the contact name is valid

export const isValidContact = (list, contact) => {
  validateName(contact.name);
  validatePhone(contact.phone);
}; // checks if the contact is valid (not empty and not already added)

export const getTrimmedContact = (contact) => {
  return {
    ...contact,
    name: contact.name.trim(),
    phone: contact.phone.trim(),
  };
}; // trims the contact name and phone number

export const getContactId = (list, name) => {
  return list.find((item) => item.name === name).id || null;
}; // returns the id of the contact

export const updateContactList = (list, data) => {
  return list.map((item) => (item.id === data.id ? data : item));
}; // updates the contact in the list
