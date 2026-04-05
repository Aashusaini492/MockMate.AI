
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "ai-smart-interview.firebaseapp.com",
  projectId: "ai-smart-interview",
  storageBucket: "ai-smart-interview.firebasestorage.app",
  messagingSenderId: "727662710320",
  appId: "1:727662710320:web:6086d0dc93eb70407b67f5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}