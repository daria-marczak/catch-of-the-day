import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClaY3kPL-dG6XtQChDvDYuuTq7-g-MWno",
  authDomain: "fishes-3a493.firebaseapp.com",
  databaseURL: "https://fishes-3a493.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; //named export

export default base; //default export

