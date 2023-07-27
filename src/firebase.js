// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoIfnwbjXii55Wz4CdbYqGa-qaYYCT9RA",
  authDomain: "react-firebase-blog-c4390.firebaseapp.com",
  projectId: "react-firebase-blog-c4390",
  storageBucket: "react-firebase-blog-c4390.appspot.com",
  messagingSenderId: "159561417679",
  appId: "1:159561417679:web:b6017b8fe7396b2541c8ba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
