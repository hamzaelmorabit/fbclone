import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCNS5OPMOLf10n48VkSFVO2itgEcDAAcy8",
  authDomain: "facebook-2-3db8e.firebaseapp.com",
  projectId: "facebook-2-3db8e",
  storageBucket: "facebook-2-3db8e.appspot.com",
  messagingSenderId: "524348946988",
  appId: "1:524348946988:web:4ab9b7073c9729703b6f89",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
