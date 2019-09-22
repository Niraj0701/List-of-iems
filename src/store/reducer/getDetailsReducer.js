import { AppActionTypes } from "../app.constatns";

export const GetDetailsReducer = (state= {}, action) =>{
	switch (action.type){
		case AppActionTypes.GET_CHECKPOINTS: {
			return {};
		};
		case  AppActionTypes.GOT_CHECKPOINTS_DETAILS: {
			return {...state,checkpointsDetails: action.information}
		};
		default:
			return state;
	}
};
