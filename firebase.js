// Import the functions you need form the SDKs you need
import { initializeApp, getApps } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();
//const analytics = getAnalytics(app);

export { app, db, storage}