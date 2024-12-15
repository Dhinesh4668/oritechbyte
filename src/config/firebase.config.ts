import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLX-nUS1EU36oaNKwEkLVJlwPTVAsL3ZI",
  authDomain: "my-startup-c4f7f.firebaseapp.com",
  projectId: "my-startup-c4f7f",
  storageBucket: "my-startup-c4f7f.firebasestorage.app",
  messagingSenderId: "67466792499",
  appId: "1:67466792499:web:5675502d14322cfdc09d46",
  measurementId: "G-15K1FMFE2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics }
