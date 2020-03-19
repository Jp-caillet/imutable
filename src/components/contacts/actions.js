import actionsTypes from './actions-types';
import store from '../../store';

/**
 * Add contact
 */
const addContact = (contacts) => ({
  type: actionsTypes.ADD_CONTACT,
  contacts
});

/**
 * Delete contact
 */
export const deleteContact = (id) => ({
  type: actionsTypes.DELETE_CONTACT,
  id
});

export const addContactV2 = (contact) => {
  const { items } = store.getState().contacts;
  const num = items[items.length - 1].id;
  const newC = contact;
  newC.id = num + 1;
  items.push(newC);
  store.dispatch(addContact(items));
};

export const deleteContactV2 = (contact) => {
  const { items } = store.getState().contacts;
  items.map((x) => {
    if (contact.id === x.id) {
      items.splice(items.indexOf(x), 1);
    }
    return null;
  });
  store.dispatch(addContact(items));
};

export const updateContactV2 = (contact) => {
  const { items } = store.getState().contacts;
  items.map((x) => {
    if (contact.id === x.id) {
      const newC = x;
      newC.firstName = contact.firstName;
      newC.lastName = contact.lastName;
      newC.lastName = contact.lastName;
      newC.phone = contact.phone;
      newC.city = contact.city;
    }
    return null;
  });
  store.dispatch(addContact(items));
};
