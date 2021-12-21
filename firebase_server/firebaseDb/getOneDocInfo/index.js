import {
  doc,
  getDoc,
} from 'firebase/firestore';
import firebaseDb from '../initFirebaseDb';

const handleGetOneDocInfo = async (collectionInfo, docInfo) => {
  try {
    const docRef = doc(firebaseDb, collectionInfo, docInfo);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (e) {
    console.error(e);
  }
};

export default handleGetOneDocInfo;
