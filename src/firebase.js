// const firebaseConfig = {
//     apiKey: "AIzaSyBx5GelLkd5T0vlw091m12QU1yOamLPnto",
//     authDomain: "todo-app-cp-2bf82.firebaseapp.com",
//     databaseURL: "https://todo-app-cp-2bf82.firebaseio.com",
//     projectId: "todo-app-cp-2bf82",
//     storageBucket: "todo-app-cp-2bf82.appspot.com",
//     messagingSenderId: "237142878703",
//     appId: "1:237142878703:web:1a06708653a045aa71ae1a",
//     measurementId: "G-T2GNZPQGMD"
//   };

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1e_2PSWPP-p42uoBusH2H_UC9FORL89c",
    authDomain: "todoapp-d4593.firebaseapp.com",
    databaseURL: "https://todoapp-d4593.firebaseio.com",
    projectId: "todoapp-d4593",
    storageBucket: "todoapp-d4593.appspot.com",
    messagingSenderId: "1021606946043",
    appId: "1:1021606946043:web:abb4f81fbf7c3b60bb3c5e",
    measurementId: "G-MJZ1VGSGYT"
      });
const db = firebaseApp.firestore();

export default db;