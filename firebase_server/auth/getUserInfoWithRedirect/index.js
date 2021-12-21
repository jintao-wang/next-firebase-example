import {
  getRedirectResult,
  GoogleAuthProvider,
} from 'firebase/auth';
import firebaseAuth from '../initAuth';

const getUserInfoWithRedirect = () => new Promise((resolve, reject) => {
  getRedirectResult(firebaseAuth)
    .then((result) => {
      const { user } = result;
      resolve(user);
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const { email } = error;
    const credential = GoogleAuthProvider.credentialFromError(error);
    const errorRes = {
      errorCode,
      errorMessage,
      email,
      credential,
    };
    reject(errorRes);
  });
});

export default getUserInfoWithRedirect;
