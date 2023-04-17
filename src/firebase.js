// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABMu95mIvFRK_w-31TUn06T1jsvuCpsw0",
  authDomain: "realtor-clone-react-d0991.firebaseapp.com",
  projectId: "realtor-clone-react-d0991",
  storageBucket: "realtor-clone-react-d0991.appspot.com",
  messagingSenderId: "351108773279",
  appId: "1:351108773279:web:127ee89132891c630739aa"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore()