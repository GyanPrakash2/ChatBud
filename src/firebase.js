// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import 'getFirestore' to use Firestore
import { getStorage } from "firebase/storage"; // Import 'getStorage' to use Storage


// Firebase configuration object with your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyCIl0nGBcB_tTXV_5480BT8ABBtWO1Tk3I",
  authDomain: "chatroom-4add8.firebaseapp.com",
  projectId: "chatroom-4add8",
  storageBucket: "chatroom-4add8.appspot.com",
  messagingSenderId: "827664099848",
  appId: "1:827664099848:web:e871ef96fa2c3ea28c3fbd",
  measurementId: "G-L41DDR89DH"
};

// Initialize the Firebase app using the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize the Firebase Authentication service
const auth = getAuth();

// Initialize the Firestore service and pass the initialized app as an argument
const db = getFirestore(app); // Use 'getFirestore' to initialize Firestore

// Initialize the Firebase Storage service and pass the initialized app as an argument
const storage = getStorage(app); // Use 'getStorage' to initialize Storage

// Initialize Firebase Analytics (if you are using it)
const analytics = getAnalytics(app);

// Export the initialized Firebase services for use in other files
export { app, auth, db, storage, analytics };