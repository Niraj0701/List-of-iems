import {AppActionTypes} from "../app.constatns";
import {GetDetailsReducer} from "./getDetailsReducer";
import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router';

export const GetListReducer = (state = {}, action) => {
	switch (action.type) {
		case AppActionTypes.GET_LIST:
			console.log('Got hit in the reducer ', action);
			return {};

		case  AppActionTypes.GOT_USER_INFORMATION:
			console.log('Got hit in the reducer ---- ', action);
			return {...state, listOfEquipments: action.listOfEquipments}

		default:
			return state;
	}
};

export const rootReducer = (history) => combineReducers(
	{
    router: connectRouter(history),
		getListReducer: GetListReducer,
		getDetailsReducer: GetDetailsReducer
	});
