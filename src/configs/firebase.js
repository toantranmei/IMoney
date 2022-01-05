import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnPFufj_t_l_rcH8LRqMPcdalys17pKcc",
  authDomain: "imoney-97f99.firebaseapp.com",
  projectId: "imoney-97f99",
  storageBucket: "imoney-97f99.appspot.com",
  messagingSenderId: "511758090888",
  appId: "1:511758090888:web:0768ed3ad450dce1b6953d",
  measurementId: "G-XP0QVER025",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
