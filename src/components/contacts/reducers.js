import { List } from 'immutable';
import actionTypes from './actions-types';

const initialState = [{
  id: 0,
  firstName: 'Cyril',
  lastName: 'Vimard',
  phone: '0666778899',
  city: 'Paris'
}, {
  id: 1,
  firstName: 'toto',
  lastName: 'tutu',
  phone: '0666778899',
  city: 'Paris'
}];

/*
 ** CREATE Contact
 */
const addContact = (state, action) => List(state).push(action.contact).toJS();

/*
 ** DELETE Contact
 */
const deleteContact = (state, action) => List(state).remove(action.id);

/*
 ** EDIT Contact
 */
const editContact = (state, action) => {
  const updateContact = List(state).update(action.id, () => action);
  return List(state).set(updateContact).toJS();
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      console.log(action);
      return addContact(state, action);
    case actionTypes.DELETE_CONTACT:
      return deleteContact(state, action);
    case actionTypes.UPDATE_CONTACT:
      return editContact(state, action);
    default:
      return state;
  }
};
