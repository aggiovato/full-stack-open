// HELPERS

/**
 * This function checks if the contact is already added,
 * doesn't allow duplicates
 *
 * @param {Array} list
 * @param {String} name
 * @returns {Boolean}
 */
export const isAddedContact = (list, name) => {
  return list.some((item) => item.name === name);
};

/************************************************************************ */

/**
 * This function checks if the contact phone number is valid:
 * required and follows the international format
 *
 * @param {String} phone
 * @returns {undefined}
 */
const validatePhone = (phone) => {
  const phone_regex =
    /^\+?[0-9]{1,3}?[-. ]?\(?[0-9]{2,4}\)?[-. ]?[0-9]{3,4}[-. ]?[0-9]{3,4}$/;

  if (!phone) throw new Error("Phone number is required");

  if (!phone_regex.test(phone))
    throw new Error(`Phone number ${phone} is invalid`);
};

/************************************************************************ */

/**
 * This function checks if the contact name is valid:
 * required and between 3 and 30 characters
 *
 * @param {String} name
 * @returns {undefined}
 */
const validateName = (name) => {
  if (!name) throw new Error("Name is required");

  if (name.trim().length < 3 || name.trim().length > 30) {
    throw new Error("Name must be between 3 and 30 characters");
  }
};

/************************************************************************ */

/**
 * This function checks if the contact is valid:
 * valid name and phone number
 *
 * @param {Object} contact
 */
export const isValidContact = (contact) => {
  validateName(contact.name);
  validatePhone(contact.number);
};

/************************************************************************ */

/**
 * This function trims the contact name and phone number
 *
 * @param {Object} contact
 * @returns {Object}
 */
export const getTrimmedContact = (contact) => {
  return {
    ...contact,
    name: contact.name.trim(),
    number: contact.number.trim(),
  };
};

/************************************************************************ */

/**
 * This function returns the id of the contact
 *
 * @param {Array} list
 * @param {String} name
 * @returns {Boolean}
 */
export const getContactId = (list, name) => {
  return list.find((item) => item.name === name).id || null;
};

/************************************************************************ */

/**
 * This function updates the contact in the list
 * by replacing it with the new data
 *
 * @param {Array} list
 * @param {Array} data
 * @returns {Array}
 */
export const updateContactList = (list, data) => {
  return list.map((item) => (item.id === data.id ? data : item));
};
