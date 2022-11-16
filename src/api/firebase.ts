// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDHZXZuAJ157QIz1xuW6ylZeqoJv1kuRLE",
  authDomain: "todo-372d1.firebaseapp.com",
  projectId: "todo-372d1",
  storageBucket: "todo-372d1.appspot.com",
  messagingSenderId: "851363225319",
  appId: "1:851363225319:web:009affebf9944737888c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}