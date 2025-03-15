import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// configuration for the Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyCh14qyzM_02_M51Fby89yk-CoBBaoLXYs",
  authDomain: "clone-fb0c9.firebaseapp.com",
  projectId: "clone-fb0c9",
  storageBucket: "clone-fb0c9.firebasestorage.app",
  messagingSenderId: "446263183649",
  appId: "1:446263183649:web:18331e35af558daf621660",
};

// Initialize the Firebase app with the configuration
const app = firebase.initializeApp(firebaseConfig);

// Get the auth instance which is used for authentication
export const auth = getAuth(app);

// Get the Firestore database instance
export const db = app.firestore();
