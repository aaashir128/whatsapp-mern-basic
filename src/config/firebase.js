import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXa19viPwMpZbnC8wLXurTzAvasKXG3Fw",
  authDomain: "whatsapp-mern-alpha.firebaseapp.com",
  projectId: "whatsapp-mern-alpha",
  storageBucket: "whatsapp-mern-alpha.appspot.com",
  messagingSenderId: "431277355317",
  appId: "1:431277355317:web:335f9564c47f564b641c7c",
  measurementId: "G-CFDVK9MK28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const gProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { auth, gProvider, fbProvider, storage };
export default db;
