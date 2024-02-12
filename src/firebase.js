import { initializeApp } from "firebase/app"; // Import initializeApp function from 'firebase/app'
import { getFirestore } from "firebase/firestore"; // Import getFirestore function from 'firebase/firestore'



// Initialize Firebase with your configuration
const firebaseConfig  = {
    apiKey: "AIzaSyDO0mq6Mok9xSzobRbNO1RPxD1_czY4X8Y",
    authDomain: "todo-app-f4d1a.firebaseapp.com",
    databaseURL: "https://todo-app-f4d1a.firebaseapp.com",
    projectId: "todo-app-f4d1a",
    storageBucket: "todo-app-f4d1a.appspot.com",
    messagingSenderId: "1022341249783",
    appId: "1:1022341249783:web:3fb728407afb96055e71f2",
    measurementId: "G-E27NQGFLP0"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(firebaseApp);

export default db;