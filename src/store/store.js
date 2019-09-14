import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './app.reducer';

export const appStore = createStore(rootReducer, applyMiddleware(thunk));