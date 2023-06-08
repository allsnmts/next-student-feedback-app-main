import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  MICROSOFT_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
} from './userActionTypes';
import {
  auth,
  microsoftProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from './userActions';
import { getDoc } from 'firebase/firestore';
import Router from 'next/router';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield getDoc(userRef);

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithMicrosoft() {
  yield microsoftProvider.setCustomParameters({
    prompt: 'select_account',
  });

  try {
    const { user } = yield signInWithPopup(auth, microsoftProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onMicrosoftSignInStart() {
  yield takeLatest(MICROSOFT_SIGN_IN_START, signInWithMicrosoft);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    try {
      const userRef = yield call(createUserProfileDocument, userAuth);
      const userSnapshot = yield getDoc(userRef);

      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (err) {
      yield put(signInFailure(err.message));
    }
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSignOut() {
  try {
    yield signOut(auth);
    yield put(signOutSuccess());
    yield Router.push({
      pathname: '/',
    });
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, userSignOut);
}

export function* userSagas() {
  yield all([
    call(onMicrosoftSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
