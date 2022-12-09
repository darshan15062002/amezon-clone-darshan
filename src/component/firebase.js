

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC8FaLRt_Ehx9fqPpgvr3qG3QkXtqeJeJo",
    authDomain: "darshan--clone.firebaseapp.com",
    projectId: "darshan--clone",
    storageBucket: "darshan--clone.appspot.com",
    messagingSenderId: "829357448387",
    appId: "1:829357448387:web:8ad7f4bff8c6fad6be5676",
    measurementId: "G-GPS98WC4E5"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export  {db, auth};