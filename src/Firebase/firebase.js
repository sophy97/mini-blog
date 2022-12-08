// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8efL8teO2j_R_oV54IMnk4ILyh0GCZGE",
    authDomain: "prac-login-ce08b.firebaseapp.com",
    projectId: "prac-login-ce08b",
    storageBucket: "prac-login-ce08b.appspot.com",
    messagingSenderId: "628297989376",
    appId: "1:628297989376:web:7f16b33d3a983a1e1987e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
