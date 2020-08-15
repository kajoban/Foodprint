import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCPlD_dapctBEjPYXYzZ2loxdDipC9RSBA",
    authDomain: "carbon-foodprint.firebaseapp.com",
    databaseURL: "https://carbon-foodprint.firebaseio.com",
    projectId: "carbon-foodprint",
    storageBucket: "carbon-foodprint.appspot.com",
    messagingSenderId: "790557919400",
    appId: "1:790557919400:web:3908ec4d46ebf79e9b5a9d",
    measurementId: "G-FNDLHSFFRL"
};
let app = Firebase.initializeApp(config);
export const db = app.database();