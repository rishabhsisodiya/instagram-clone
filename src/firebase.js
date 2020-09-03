import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHtUx4HY7habv0RW3wgjYvuCz6WyjOXsU",
  authDomain: "i-nstagram.firebaseapp.com",
  databaseURL: "https://i-nstagram.firebaseio.com",
  projectId: "i-nstagram",
  storageBucket: "i-nstagram.appspot.com",
  messagingSenderId: "994658189131",
  appId: "1:994658189131:web:d2f7591671b2495153b2ce",
  measurementId: "G-H263108Q97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage= firebase.storage();

export { db, auth, storage };

