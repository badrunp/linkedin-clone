import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: 'linkedin-clone-fd649.firebaseapp.com',
  databaseURL: 'https://linkedin-clone-fd649-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'linkedin-clone-fd649',
  storageBucket: 'linkedin-clone-fd649.appspot.com',
  messagingSenderId: '16802500423',
  appId: '1:16802500423:web:d59414e8bd0c3b498f8662',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
