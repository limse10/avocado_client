import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNzPqjpkokdh2LJ2dQmK-sI3gLQM_vfdI",
  authDomain: "avocado-ac6d9.firebaseapp.com",
  projectId: "avocado-ac6d9",
  storageBucket: "avocado-ac6d9.appspot.com",
  messagingSenderId: "81954251631",
  appId: "1:81954251631:web:e59e8384beeaa214b3fe9a",
  measurementId: "G-3WH20CCKC7",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () => {
  const res = await auth.signInWithRedirect(googleProvider);
  // console.log(res);
};

export const logOut = async () => {
  auth.signOut();
};
