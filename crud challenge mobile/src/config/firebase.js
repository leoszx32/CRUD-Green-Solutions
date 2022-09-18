import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCFeFmMQev1oaQd1mZ21LLXZyIAuyV7-Uc",
  authDomain: "challenge-mobile-c8fa0.firebaseapp.com",
  databaseURL: "https://challenge-mobile-c8fa0-default-rtdb.firebaseio.com",
  projectId: "challenge-mobile-c8fa0",
  storageBucket: "challenge-mobile-c8fa0.appspot.com",
  messagingSenderId: "427639550149",
  appId: "1:427639550149:web:37c969958520f442f180ac"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
