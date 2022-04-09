import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBc-3Xw9KqmhT99TjJyqnyXjRa4LMdUx7A",
    authDomain: "emajhon-1b2ee.firebaseapp.com",
    projectId: "emajhon-1b2ee",
    storageBucket: "emajhon-1b2ee.appspot.com",
    messagingSenderId: "646025344710",
    appId: "1:646025344710:web:b71ee6235e0679c34709c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;