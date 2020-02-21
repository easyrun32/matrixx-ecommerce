import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBiH8-9EmbbSrir5KaJnvq83fhZw7IubWI",
  authDomain: "products-dbz.firebaseapp.com",
  databaseURL: "https://products-dbz.firebaseio.com",
  projectId: "products-dbz",
  storageBucket: "products-dbz.appspot.com",
  messagingSenderId: "654682328363",
  appId: "1:654682328363:web:7d2f42b5c434db2616496e",
  measurementId: "G-9T4VPNFD40"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
