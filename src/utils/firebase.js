// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-upKZgLTNzngYrMfLpRQW1P8HoUl69gw",
  authDomain: "tmdb-c27e4.firebaseapp.com",
  projectId: "tmdb-c27e4",
  storageBucket: "tmdb-c27e4.appspot.com",
  messagingSenderId: "96544096063",
  appId: "1:96544096063:web:d96a9140fb551716a75d8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
