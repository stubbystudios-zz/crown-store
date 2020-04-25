import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAUaA2FGQnCMXQMlwjDqAPOYkY8SRk6QeY",
  authDomain: "crown-db-b28c5.firebaseapp.com",
  databaseURL: "https://crown-db-b28c5.firebaseio.com",
  projectId: "crown-db-b28c5",
  storageBucket: "crown-db-b28c5.appspot.com",
  messagingSenderId: "304156891199",
  appId: "1:304156891199:web:7d9941febf54a1a2c2408a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;