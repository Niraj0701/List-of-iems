import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer/getListReducer';

export const appStore = createStore(rootReducer, applyMiddleware(thunk));
