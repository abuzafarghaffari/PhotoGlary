import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGXpWj8rKE2GF6ITOPROaJconDk2IEu-U",
  authDomain: "firegram-93fd0.firebaseapp.com",
  projectId: "firegram-93fd0",
  storageBucket: "firegram-93fd0.appspot.com",
  messagingSenderId: "987528343193",
  appId: "1:987528343193:web:7b9a28265b6f9609f99208"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
