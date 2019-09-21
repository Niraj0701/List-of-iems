import {firebase, auth, functions, database, storage} from '../firebase';

export const getUserInformation = () => {
    return new Promise((resolve, reject) => {
        database.ref('Equipments').on(
            'value',
            data => {
                let tempArray = Object.keys(data.val()).map(k => {
                    let tempItem = {
                        index: k,
                        item: data.val()[k],
                    };
                    return tempItem;
                });
                return resolve(tempArray);
            },
            error => reject(error),
        );
    });
};

export const getCheckpoints = id => {
    return new Promise((resolve, reject) => {
        let ref = database.ref('Checkpoints');
        ref.orderByChild('equipmentKey')
            .equalTo(id)
            .once('value',
                data => resolve(
                    Object.keys(data.val()).map(k => data.val()[k])),
                error => reject(error));
    });
};

export const getEquipementByIndex = (id) => {
    return new Promise((resolve, reject) => {
        let ref = database.ref('Checkpoint').child(id);
        ref.on('value', data => {
                console.log('&&&&&& : ', data.val());
                return resolve(data.val());
            },
            error => reject(error),
        );
    });
};
