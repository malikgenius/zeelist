import { firebase, googleAuthProvider } from '../firebase/firebase';
import {history} from '../Router/AppRouter';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

// export const startLogin = () => {
//   return () => {
//     return firebase.auth().signInWithPopup(googleAuthProvider);
//   };
// };

export const startLogin = ({email, password}) => {
  // const { email, password } = values;
  return (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    // dont dispatch login our logout here but do it in index.js so when user visits our page at first our store will be updated.
    // .then((user) => {
    //   dispatch(login(user.uid));
    // })
    .catch((e) => {
      console.log(` Error Login: ${e}`);
    });
  };
    
  };


export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut()
    // dont dispatch login our logout here but do it in index.js so when user visits our page at first our store will be updated.
    // .then(() => {
    //   dispatch(logout());
    // });
    // .then(() => {
    //   history.push('/listview');
    // });
  };
};