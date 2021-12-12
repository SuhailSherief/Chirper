// Imports
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Web app's firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFiiprztn5J9FQNb66Do6crfOJn1I0VUs",
    authDomain: "twitter-clone-763c0.firebaseapp.com",
    projectId: "twitter-clone-763c0",
    storageBucket: "twitter-clone-763c0.appspot.com",
    messagingSenderId: "1080307064196",
    appId: "1:1080307064196:web:3c26c7a3f30f5c6c7011d1"
  };

// Firebase Initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };