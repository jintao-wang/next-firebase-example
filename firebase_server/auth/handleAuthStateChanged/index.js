import { onAuthStateChanged } from 'firebase/auth';
import firebaseAuth from '../initAuth';

const handleAuthStateChanged = () => new Promise((resolve, reject) => {
  onAuthStateChanged(firebaseAuth, (user) => {
    resolve(user);
  });
});

export default handleAuthStateChanged;
