import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-tut-97d3f.firebaseapp.com",
  projectId: "next-tut-97d3f",
  storageBucket: "next-tut-97d3f.appspot.com",
  messagingSenderId: "550500517548",
  appId: "1:550500517548:web:11a690ca2dad67fe060109",
  measurementId: "G-G95CRWY5KN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);