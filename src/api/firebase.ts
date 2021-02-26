import 'firebase/firestore';
import { Alert } from 'react-native';
import { User } from 'src/types/user';
import firebase from 'src/config/firebase';

type signInProps = {
  email: string;
  password: string;
};

type signUpProps = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: signInProps) => {
  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const { user } = userCredential;
  return user ? ({ name: user.displayName, email: user.email } as User) : null;
};

export const signUp = async ({ email, password }: signUpProps) => {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const { user } = userCredential;
  return user;
};

// export async function registration({
//   email,
//   password,
//   lastName,
//   firstName,
// }: registrationProps) {
//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//     const currentUser = firebase.auth().currentUser;

//     const db = firebase.firestore();
//     db.collection('users').doc(currentUser.uid).set({
//       email: currentUser.email,
//       lastName: lastName,
//       firstName: firstName,
//     });
//   } catch (err) {
//     Alert.alert('There is something wrong!!!!', err.message);
//   }
// }

// export async function signIn({ email, password }: singInProps) {
//   try {
//     await firebase.auth().signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     Alert.alert('There is something wrong!', err.message);
//   }
// }

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}
