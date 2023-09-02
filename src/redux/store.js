import { combineReducers } from 'redux';
import contacsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contacsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
