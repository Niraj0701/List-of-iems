import {AppActionTypes} from "../app.constatns";
import {combineReducers} from 'redux/index';
import {GetDetailsReducer} from "./getDetailsReducer";

const initialState = {
	name: '',
	listOfEquipments: {}
}

export const GetListReducer = (state = {}, action) => {
	switch (action.type) {
		case AppActionTypes.GET_LIST: {
			console.log('Got hit in the reducer ', action);
			return {};
		}
			;
		case  AppActionTypes.GOT_USER_INFORMATION: {
			console.log('Got hit in the reducer ---- ', action);
			return {...state, listOfEquipments: action.listOfEquipments}
		}
			;
		default:
			return state;
	}
};

export const rootReducer = combineReducers(
	{
		getListReducer: GetListReducer,
		getDetailsReducer: GetDetailsReducer
	});
