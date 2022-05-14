// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mt1ZCLaAcNFU4_Z6LO2NooycwmYMoWM",
  authDomain: "clone-3244f.firebaseapp.com",
  projectId: "clone-3244f",
  storageBucket: "clone-3244f.appspot.com",
  messagingSenderId: "255569239529",
  appId: "1:255569239529:web:cff0039c31ab940bf47f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

