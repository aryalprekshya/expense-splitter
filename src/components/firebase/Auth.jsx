import { firebase, googleProvider } from "../firebase/Firebase";

//sign in with google account
export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      var credentials = result.credentials;
      var token = credentials.accessToken;
      var user = result.user;
    })
    .catch((error) => {
      console.log("Error signing with Google", error.message);
    });
};

//logOut from the website
export const Logout = () => {
  return firebase.auth().signOut();
};
