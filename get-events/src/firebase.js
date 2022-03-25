import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRoadACn3ULbSqj_4Rush7IKshvlfc-Lc",
    authDomain: "getevents-ff2ae.firebaseapp.com",
    projectId: "getevents-ff2ae",
    storageBucket: "getevents-ff2ae.appspot.com",
    messagingSenderId: "29968359986",
    appId: "1:29968359986:web:4bf633783dbcbc3f01d22b",
    measurementId: "G-HLJS26CRML"
  };



  const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}