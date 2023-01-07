import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { FIREBASE_CONFIG } from "../env";

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default firebase;
