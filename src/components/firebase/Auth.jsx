import { firebase, googleProvider } from "../firebase/Firebase";

//sign in with google account
const signInWithGoogle = () => {
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

export default signInWithGoogle;
