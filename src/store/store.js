import thunk from 'redux-thunk';
import { rootReducer } from './reducer/getListReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

const reduxRouterMiddleware = routerMiddleware(createHashHistory());
const middleware = [thunk, reduxRouterMiddleware];

export const appStore = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);
