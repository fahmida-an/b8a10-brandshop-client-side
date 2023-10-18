// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD71MAYTbuOHHGILk5l3BI7mC1bTxSpxlQ",
  authDomain: "b8a10-brandshop-client-s-353c1.firebaseapp.com",
  projectId: "b8a10-brandshop-client-s-353c1",
  storageBucket: "b8a10-brandshop-client-s-353c1.appspot.com",
  messagingSenderId: "247477837752",
  appId: "1:247477837752:web:9605cd1fa668cda253b94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;