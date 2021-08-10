import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDy1YZiK6RxykL4do4-LY1XiRrPy7Y1lMI",
  authDomain: "facebook-yt-d3c9a.firebaseapp.com",
  projectId: "facebook-yt-d3c9a",
  storageBucket: "facebook-yt-d3c9a.appspot.com",
  messagingSenderId: "295175811988",
  appId: "1:295175811988:web:7b4c452b33fba1fca81581"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore();
const storage = firebase.storage();

export {db, storage};