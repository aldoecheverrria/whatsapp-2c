import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC532_fWMxa2xW8XGcI9lA5ukW3VRYH68I",
    authDomain: "whatsapp2-2df34.firebaseapp.com",
    projectId: "whatsapp2-2df34",
    storageBucket: "whatsapp2-2df34.appspot.com",
    messagingSenderId: "193889939132",
    appId: "1:193889939132:web:a81e5a5497338851b16ab9"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};