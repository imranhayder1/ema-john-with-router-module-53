// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from './firebase.init/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFP4POoDiIJ8vRPt_Qe-4NAJcRSqerCDo",
    authDomain: "ema-john-with-router-d6bf9.firebaseapp.com",
    projectId: "ema-john-with-router-d6bf9",
    storageBucket: "ema-john-with-router-d6bf9.appspot.com",
    messagingSenderId: "873910193448",
    appId: "1:873910193448:web:ffc108f564b92e4839941d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;