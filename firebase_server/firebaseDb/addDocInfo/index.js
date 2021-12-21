import {
  doc,
  setDoc,
} from 'firebase/firestore';
import firebaseDb from '../initFirebaseDb';

const handleAddDocInfo = async (collectionInfo, docInfo, data) => {
  try {
    const docRef = doc(firebaseDb, collectionInfo, docInfo);

    // Add a new document in collection "cities"
    await setDoc(docRef, data);
  } catch (e) {
    console.error(e);
  }
};

export default handleAddDocInfo;
