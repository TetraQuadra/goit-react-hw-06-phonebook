import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { productsReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: productsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
