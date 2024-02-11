const firebase = require("firebase");

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDO0mq6Mok9xSzobRbNO1RPxD1_czY4X8Y",
    authDomain: "todo-app-f4d1a.firebaseapp.com",
    databaseURL: "todo-app-cp.firebaseapp.com",
    projectId: "todo-app-f4d1a",
    storageBucket: "todo-app-f4d1a.appspot.com",
    messagingSenderId: "1022341249783",
    appId: "1:1022341249783:web:3fb728407afb96055e71f2",
    measurementId: "G-E27NQGFLP0"
});

const db = firebaseApp.firestore();

module.exports = { db };
