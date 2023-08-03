import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

 const firebaseConfig = {
  apiKey: "AIzaSyD74yxKg1T-JBV9Q-wTQM6w0GdO8_Xy-tI",
  authDomain: "quiz-37ed9.firebaseapp.com",
  projectId: "quiz-37ed9",
  storageBucket: "quiz-37ed9.appspot.com",
  messagingSenderId: "859468007857",
  appId: "1:859468007857:web:3375649cb5036a0345d590",
  measurementId: "G-7VDKZZB8RW"
 };

 const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app); 