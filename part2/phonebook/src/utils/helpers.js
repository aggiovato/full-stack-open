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
