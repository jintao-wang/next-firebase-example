import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import firebaseApp from '../../initializeApp';

const firebaseDb = getFirestore(firebaseApp);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(firebaseDb, 'localhost', 8080);
}

export default firebaseDb;
