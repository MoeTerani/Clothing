import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD6Ur6f1TCbIdU29JF3-P_t_kzJMhGZYsU',
  authDomain: 'crown-db-78d9d.firebaseapp.com',
  databaseURL: 'https://crown-db-78d9d.firebaseio.com',
  projectId: 'crown-db-78d9d',
  storageBucket: '',
  messagingSenderId: '162017352079',
  appId: '1:162017352079:web:67a404c650d53223'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
