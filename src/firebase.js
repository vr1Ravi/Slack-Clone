import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOc7NryMyke1hHQxoxHnJTjTLdvayXJO0",
  authDomain: "slack-clone-d875a.firebaseapp.com",
  projectId: "slack-clone-d875a",
  storageBucket: "slack-clone-d875a.appspot.com",
  messagingSenderId: "806989308307",
  appId: "1:806989308307:web:f22a4079ed4b4f8a444866",
  measurementId: "G-8SLN8JB07K",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// eslint-disable-next-line no-unused-vars
const provider = new GoogleAuthProvider();

export { db, auth };
