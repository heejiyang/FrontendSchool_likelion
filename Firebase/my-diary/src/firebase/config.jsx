// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Firebase를 초기화합니다.
const app = initializeApp(firebaseConfig);
// firestore를 초기화합니다.
const appFireStore = getFirestore(app);
// firestore인증 초기화
const appAuth = getAuth();
// 타임 스탬프 초기화
const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp }