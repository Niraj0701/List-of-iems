import {AppActionTypes} from "./app.constatns";
import {getUserInformation, getCheckpoints} from "../service/getData";

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


const sorfByAlphabet = (listToBeSorted) => {
   return listToBeSorted.sort(function (a, b) {
      var nameA = a.item.name.toLowerCase(), nameB = b.item.name.toLowerCase();
      if (nameA < nameB)
         return -1;
      if (nameA > nameB)
         return 1;
      return 0
   });
};


export const asyncActionGetList = () => (dispatch => {
   dispatch(actionGetListOfEquipments());
   getUserInformation().then((information) => {
      information = sorfByAlphabet(information);
      dispatch(actionGotUserInformation(information))
   }).catch(error => {
      dispatch(actionGotUserInformationError(error));
   })
});

export const asyncActionGetCheckpointDetails = (id) => (dispatch => {
   getCheckpoints(id).then((information) => {
      dispatch(actionGotCheckpointsInformation(information))
   }).catch(error => {
      dispatch(actionGotUserInformationError(error));
   })
});
