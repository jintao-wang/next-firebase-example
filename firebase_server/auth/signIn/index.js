import {
  signInWithRedirect,
} from 'firebase/auth';

import firebaseAuth, { googleAuthProvider } from '../initAuth';

const signIn = async ({
  type = 'google',
}) => {
  switch (type) {
    case 'google':
      return signInWithRedirect(firebaseAuth, googleAuthProvider);
    default:
      return null;
  }
};

export default signIn;
