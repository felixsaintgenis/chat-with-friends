import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBAAh8FGF8qbF8exvp4OhWGVh5YNZFZdW0",
  authDomain: "chat-with-friends-bbf59.firebaseapp.com",
  databaseURL: "https://chat-with-friends-bbf59.firebaseio.com",
  projectId: "chat-with-friends-bbf59",
  storageBucket: "chat-with-friends-bbf59.appspot.com",
  messagingSenderId: "81204155814",
  appId: "1:81204155814:web:148b27a157d364fd53eb67"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
