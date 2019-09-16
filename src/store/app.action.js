import { AppActionTypes } from "./app.constatns";
import { getUserInformation, getCheckpoints } from "../service/getData";

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

export const actionCheckpoints = (id) => ({
   type: AppActionTypes.GET_CHECKPOINTS,
   id
});

export const actionGotCheckpointsInformation = (information) => ({
   type: AppActionTypes.GOT_CHECKPOINTS_DETAILS,
   information
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

export const asyncActionGetCheckpointDetails = (id) => (dispatch => {
   dispatch(actionCheckpoints());
   getCheckpoints(id).then((information) => {
      console.log('22222: ', information);
      dispatch(actionGotCheckpointsInformation(information))
   }).catch(error => {
      console.log('ERROR: ', error);
      dispatch(actionGotUserInformationError(error));
   })
});
