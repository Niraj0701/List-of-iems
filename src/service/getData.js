import {
   firebase,
   auth,
   functions,
   database,
   storage,
} from "../firebase";

   export const getUserInformation = () => {
      return new Promise((resolve, reject)=> {
         database.ref('Equipments').on('value',
            data => {
               let tempArray = Object.keys(data.val()).map(function(k) { return data.val()[k] });
               return resolve(tempArray);
            },
            error => reject(error)
         );
      });
   }

   export const getUserInformation1 = () => { 
      return new Promise ((resolve, reject)=>{
         let ref = database.ref('Checkpoint').child("-LHXpVfII4J53rgKtuAi")
         ref.on('value', 
         data => resolve(data.val()), 
         error => reject(error));
      });
   }