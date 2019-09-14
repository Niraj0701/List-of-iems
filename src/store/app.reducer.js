import { AppActionTypes } from "./app.constatns";
import {combineReducers} from 'redux';

const initialState = {
   name: ''
}

export const appReducer = (state= initialState, action) =>{
   switch (action.type){
      case AppActionTypes.GET_ITEM:
         console.log('Got hit in the reducer ', action);
         return {};
      default:
         return state;
   }
};

export const rootReducer = combineReducers({appReducer: appReducer});