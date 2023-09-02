import ACTIONS from './constants';

export const addContact = ({ name, number }) => {
  return {
    type: ACTIONS.ADD_CONTACT,
    payload: {
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: ACTIONS.REMOVE_CONTACT,
    payload: id,
  };
};

export const setFilter = filtered => {
  return {
    type: ACTIONS.SET_FILTER,
    payload: filtered,
  };
};
