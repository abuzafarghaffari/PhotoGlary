import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  xxxxxx
  xxxxxx
  xxxxxxx
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
