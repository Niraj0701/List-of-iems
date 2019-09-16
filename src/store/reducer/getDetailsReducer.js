import { AppActionTypes } from "../app.constatns";

export const GetDetailsReducer = (state= {}, action) =>{
	switch (action.type){
		case AppActionTypes.GET_CHECKPOINTS: {
			console.log('Got hit in the reducer ', action);
			return {};
		};
		case  AppActionTypes.GOT_CHECKPOINTS_DETAILS: {
			console.log('Got DETAILS ---- ', action);
			return {...state,checkpointsDetails: action.information}
		};
		default:
			return state;
	}
};
