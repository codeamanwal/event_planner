

const firebaseConfig = {
  apiKey: "AIzaSyABxKoaMeyjWnobZ4603V1bPceC8MPnJ08",
  authDomain: "eventp-c8d20.firebaseapp.com",
  databaseURL: "https://eventp-c8d20-default-rtdb.firebaseio.com",
  projectId: "eventp-c8d20",
  storageBucket: "eventp-c8d20.appspot.com",
  messagingSenderId: "237275657082",
  appId: "1:237275657082:web:dc6c90ef82e69fb84e5cc3",
  measurementId: "G-X8BH9NV37E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
