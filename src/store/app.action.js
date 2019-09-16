import { AppActionTypes } from "./app.constatns";
import { getUserInformation } from "../service/getData";

export const actionGetListOfEquipments = () => ({
   type: AppActionTypes.GET_LIST
});

export const actionGotUserInformation = (listOfEquipments) => ({
   type: AppActionTypes.GOT_USER_INFORMATION,
   listOfEquipments  
});

export const actionGotUserInformationError = (userInformationError) => ({
   type: AppActionTypes.GOT_USER_INFORMATION_ERROR,
   userInformationError
});



export const asyncActionGetList = () => (dispatch => {
   dispatch(actionGetListOfEquipments());
   getUserInformation().then((information) => {
      console.log('Information: ', information);
      dispatch(actionGotUserInformation(information))
   }).catch(error => {
      console.log('ERROR: ', error);
      dispatch(actionGotUserInformationError(error));
   })
});