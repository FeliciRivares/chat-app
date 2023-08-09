import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDw9XwZvVzJthKRW1zp0hqKVd1Cqp9wPQs",
  authDomain: "chat-app-ec755.firebaseapp.com",
  projectId: "chat-app-ec755",
  storageBucket: "chat-app-ec755.appspot.com",
  messagingSenderId: "502764994257",
  appId: "1:502764994257:web:1bdebafad13398ee748ff0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const provider = new GoogleAuthProvider()