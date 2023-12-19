// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCMqDj-U1hbgMsagf91uKe5ylewwW9gfCs",
//   authDomain: "belajar-next-js-2a616.firebaseapp.com",
//   projectId: "belajar-next-js-2a616",
//   storageBucket: "belajar-next-js-2a616.appspot.com",
//   messagingSenderId: "559696332336",
//   appId: "1:559696332336:web:3a5722090b72fd00b40ff5"
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SEEDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;