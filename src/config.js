import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "spacepark-f6c46.firebaseapp.com",
  projectId: "spacepark-f6c46",
  storageBucket: "spacepark-f6c46.appspot.com",
  messagingSenderId: "657707527178",
  appId: "1:657707527178:web:5f8dd943bdc24d9e2543f3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
