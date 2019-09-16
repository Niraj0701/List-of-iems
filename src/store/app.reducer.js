import { AppActionTypes } from "./app.constatns";
import {combineReducers} from 'redux';

const initialState = {
   name: '',
   listOfEquipments: {}
}

export const appReducer = (state= {}, action) =>{
   switch (action.type){
      case AppActionTypes.GET_LIST: {
         console.log('Got hit in the reducer ', action);
         return {};
      };
      case  AppActionTypes.GOT_USER_INFORMATION: {
          console.log('Got hit in the reducer ---- ', action);
          return {...state,listOfEquipments: action.listOfEquipments}
      };
      default:
         return state;
   }
};

export const rootReducer = combineReducers({appReducer: appReducer});