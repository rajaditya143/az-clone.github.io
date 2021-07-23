// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAvzQ5CvfiUfi9udmPqZb5swTKRcwYg29o",
    authDomain: "az-clone-c7850.firebaseapp.com",
    projectId: "az-clone-c7850",
    storageBucket: "az-clone-c7850.appspot.com",
    messagingSenderId: "831805603793",
    appId: "1:831805603793:web:4bca9768d5de18bc456af0",
    measurementId: "G-T0YJYH43KY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };