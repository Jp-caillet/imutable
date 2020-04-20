import actionsTypes from './actions-types';

/**
 * Add contact
 */
export const addContact = (contact) => ({
  type: actionsTypes.ADD_CONTACT,
  contact
});


/**
 * DELETE CONTACT
 */
export const deleteContact = (id) => ({
  type: actionsTypes.DELETE_CONTACT,
  id
});
/**
 * UPDATE CONTACT
 */
export const updateContact = (contact) => ({
  type: actionsTypes.UPDATE_CONTACT,
  contact
});
