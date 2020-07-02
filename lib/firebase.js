import * as firebase from 'firebase/app';
import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: 'AIzaSyAPr55APpnid8bxmYeBT32Slz_HOnTBsQs',
    authDomain: 'ptmfoundation-8c7fd.firebaseapp.com',
    databaseURL: 'https://ptmfoundation-8c7fd.firebaseio.com',
    projectId: 'ptmfoundation-8c7fd',
    storageBucket: 'ptmfoundation-8c7fd.appspot.com',
    messagingSenderId: '864000579543',
    appId: '1:864000579543:web:183ae0b1c5b4ad670a9d92',
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default firebase.firestore();
