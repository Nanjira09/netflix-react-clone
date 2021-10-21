import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };