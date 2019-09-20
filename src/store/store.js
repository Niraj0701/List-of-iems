import thunk from 'redux-thunk';
import { rootReducer } from './reducer/getListReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import {createBrowserHistory} from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const middleware = [thunk, reduxRouterMiddleware];
const enhancers = [];
const initialState = {};

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

export const appStore = createStore(
	rootReducer(history),
  initialState,
	composedEnhancers
);

