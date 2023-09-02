import assignId from 'services/asignId';
import ACTIONS from './constants';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filtered: [],
};

export const productsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CONTACT:
      console.log(action.payload);
      if (
        state.contacts.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert('Contact already exists!');
      } else {
        const newContact = {
          name: action.payload.name,
          number: action.payload.number,
          id: assignId(state.contacts),
        };
        return { ...state, contacts: [...state.contacts, newContact] };
      }
      break;
    case ACTIONS.REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
      break;
    case ACTIONS.SET_FILTER:
      console.log(action.payload);
      return {
        ...state,
        filtered: action.payload,
      };

    default:
      return state;
  }
};
