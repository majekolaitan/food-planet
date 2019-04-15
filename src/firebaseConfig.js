import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD6W7bGNVQuPpIt_XbRNKbGrinriO3JDAU",
    authDomain: "food-planet-242ed.firebaseapp.com",
    databaseURL: "https://food-planet-242ed.firebaseio.com",
    projectId: "food-planet-242ed",
    storageBucket: "food-planet-242ed.appspot.com",
    messagingSenderId: "2766685089"
  };
  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')