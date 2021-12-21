import { connectStorageEmulator, getStorage } from 'firebase/storage';
import firebaseApp from '../initializeApp';

const firebaseStorage = getStorage(firebaseApp);

if (process.env.NODE_ENV === 'development') {
  connectStorageEmulator(firebaseStorage, 'localhost', 9199);
}

export default firebaseStorage;
