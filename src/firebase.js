import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx_pD2gheJ7u_m7UBN3c870oGeilwMv_Q",
  authDomain: "copy-69e15.firebaseapp.com",
  projectId: "copy-69e15",
  storageBucket: "copy-69e15.appspot.com",
  messagingSenderId: "710968144290",
  appId: "1:710968144290:web:171b1fc5c40f56fc9582fb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
