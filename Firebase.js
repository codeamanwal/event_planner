

const firebaseConfig = {
  apiKey: "AIzaSyABxKoaMeyjWnobZ4603V1bPceC8MPnJ08",
  authDomain: "eventp-c8d20.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://eventp-c8d20-default-rtdb.firebaseio.com",
  projectId: "eventp-c8d20",
  storageBucket: "eventp-c8d20.appspot.com",
  messagingSenderId: "237275657082",
  appId: "1:237275657082:web:dc6c90ef82e69fb84e5cc3",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-X8BH9NV37E",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service


// Initialize Firebase
const analytics = getAnalytics(app);
const auth = firebase.auth();
const auth = firebase.database();
