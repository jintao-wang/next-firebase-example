import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import firebaseApp from '../../initializeApp';

const firebaseAuth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.languageCode = 'it';

if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
}

export default firebaseAuth;
export { googleAuthProvider };
