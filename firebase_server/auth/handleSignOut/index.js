import {
  signOut,
} from 'firebase/auth';

import firebaseAuth from '../initAuth';

const handleSignOut = () => new Promise((resolve, reject) => {
  signOut(firebaseAuth).then(() => {
    resolve({
      code: 200,
      message: 'SignOut success',
    });
  }).catch((error) => {
    reject(error);
  });
});

export default handleSignOut;
