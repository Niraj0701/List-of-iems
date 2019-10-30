import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIazSiAIId2ByN8c0RX8_R71EdJJpV-lB1RDADq",
    authDomain: "setFilterQuery-technique-beeldi.firebaseapp.com",
    databaseURL: "https://test-technique-beeldi.firebaseio.com",
    projectId: "setFilterQuery-technique-beeldi",
    storageBucket: "setFilterQuery-technique-beeldi.appspot.com",
    messagingSenderId: "937748581892"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const functions = firebase.functions();
const database = firebase.database();
const storage = firebase.storage();

export {
    firebase,
    auth,
    functions,
    database,
    storage,
}; 
