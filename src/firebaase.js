// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdMyIhlix_fYfrKX4kyd39r_1ya-vbmDU",
  authDomain: "myfirstproject-be834.firebaseapp.com",
  projectId: "myfirstproject-be834",
  storageBucket: "myfirstproject-be834.firebasestorage.app",
  messagingSenderId: "773100745041",
  appId: "1:773100745041:web:249a176cfcb7e2ab976370",
  measurementId: "G-X557KQ2Q9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
