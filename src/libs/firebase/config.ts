import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

// Load .env variables
const firebaseConfig = {
  apiKey: "AIzaSyDXQIravq4O9HUluIOV_wOl3eaXulFxKAQ",
  authDomain: "fire-auth-51629.firebaseapp.com",
  projectId: "fire-auth-51629",
  storageBucket: "fire-auth-51629.appspot.com",
  messagingSenderId: "998529852073",
  appId: "1:998529852073:web:d5b573ca124b740131ffb8",
  measurementId: "G-2YMQET2PDF"
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);