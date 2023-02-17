import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, //rename this with your own api key from firebase
  authDomain: "spacepark-f6c46.firebaseapp.com",
  projectId: "spacepark-f6c46",
  storageBucket: "spacepark-f6c46.appspot.com",
  messagingSenderId: "657707527178",
  appId: import.meta.env.VITE_API_ID, //replace this with your own app id.
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
