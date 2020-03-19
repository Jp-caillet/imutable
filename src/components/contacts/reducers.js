import { fromJS } from 'immutable';
import actionTypes from './actions-types';

const initialState = {
  items: [{
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
  }]
};

const addContact = (state, action) => (
  fromJS(state)
    .setIn(['items'], action.contacts)
    .toJS()
);

const deleteContact = (state, id) => ({
  items: state.items.contact(id)
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      console.log(action);
      return addContact(state, action);
    case actionTypes.DELETE_CONTACT:
      return deleteContact(state, 1);
    default:
      return state;
  }
};
