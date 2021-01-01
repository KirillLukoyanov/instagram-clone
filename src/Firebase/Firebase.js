import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKaMBQ7KUDwMjWfIy2p-7rw5Y3KMq1F8M",
  authDomain: "instagram-clone-3a238.firebaseapp.com",
  projectId: "instagram-clone-3a238",
  storageBucket: "instagram-clone-3a238.appspot.com",
  messagingSenderId: "213384381799",
  appId: "1:213384381799:web:20ea3846fa84b93d55dbc2",
  measurementId: "G-JHRZW9Z2D7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
