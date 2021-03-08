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

const auth = firebase.auth();

export const signIn = async ({ email, password }: signInProps) => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  const { user } = userCredential;
  return user ? ({ name: user.displayName, email: user.email } as User) : null;
};

export const signUp = async ({ email, password }: signUpProps) => {
  const userCredential = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  const { user } = userCredential;
  return user;
};

export async function loggingOut() {
  try {
    await auth.signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}
