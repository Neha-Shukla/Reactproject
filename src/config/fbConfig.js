import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDDDMQeX-fXParZDPMyMTDnRpxEWqsio78",
    authDomain: "project-ec916.firebaseapp.com",
    databaseURL: "https://project-ec916.firebaseio.com",
    projectId: "project-ec916",
    storageBucket: "project-ec916.appspot.com",
    messagingSenderId: "584264201787",
    appId: "1:584264201787:web:c3af9d5db39a36dcf18e1e",
    measurementId: "G-3BN45LYCLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});
  export default firebase;