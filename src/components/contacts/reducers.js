import actionTypes from './actions-types';
import Imut from './Imutable';

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
const addContact = (state, action) => {
  const im = new Imut();
  return im.list(state).push(action.contact).toJS();
};

/*
 ** DELETE Contact
 */
const deleteContact = (state, action) => {
  const im = new Imut();
  return im.list(state).delete(action.id).toJS();
};


/*
 ** EDIT Contact
 */
const editContact = (state, action) => {
  const im = new Imut();
  return im.list(state).update(action.contact).toJS();
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      console.log(action);
      return addContact(state, action);
    case actionTypes.DELETE_CONTACT:
      console.log(action);
      return deleteContact(state, action);
    case actionTypes.UPDATE_CONTACT:
      console.log(action);
      return editContact(state, action);
    default:
      return state;
  }
};
