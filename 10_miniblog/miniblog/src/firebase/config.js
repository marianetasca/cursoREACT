import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAn47gHH0YnuaNQkFmGRjSOWSeSGDlOUfw",
    authDomain: "miniblog-b95f9.firebaseapp.com",
    projectId: "miniblog-b95f9",
    storageBucket: "miniblog-b95f9.firebasestorage.app",
    messagingSenderId: "612747305838",
    appId: "1:612747305838:web:6b36e228c9ee0b66d7177f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };