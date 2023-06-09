import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIHFMwwQrrMWhQJA0h2PyR1jKQEDhVt5g",
  authDomain: "sentiment-analyzer-8b590.firebaseapp.com",
  projectId: "sentiment-analyzer-8b590",
  storageBucket: "sentiment-analyzer-8b590.appspot.com",
  messagingSenderId: "966109779808",
  appId: "1:966109779808:web:2741c02b6acd5936a73005",
  measurementId: "G-T1ZQDGCQF0"
};
// const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const microsoftProvider = new OAuthProvider('microsoft.com');

// microsoftProvider.setCustomParameters({
//   prompt: 'consent',
//   tenant: '',
//   client_id: ' 6fc362f9-4db9-4992-8a5d-778e8d13bbfd',
//   response_type: '',
//   redirect_uri: 'https://next-student-feedback.firebaseapp.com/__/auth/handler',
//   scope: ['user.read'],
//   response_mode: '',
// });

export const signInWithMicrosoftAsync = async () => {
  const res = await signInWithPopup(auth, microsoftProvider);

  try {
    const credential = OAuthProvider.credentialFromResult(res);
    const { accessToken, idToken } = credential;

    return credential;
  } catch (err) {
    return err;
  }
};

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = db.doc(`users/${userAuth.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return userRef;
// };
