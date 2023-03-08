import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';




// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    
        apiKey: "AIzaSyDUdM9VWwMm86KiBgyApqVsMuslHvCZKtQ",
        authDomain: "proyecto-de-prueba-8a14f.firebaseapp.com",
        projectId: "proyecto-de-prueba-8a14f",
        storageBucket: "proyecto-de-prueba-8a14f.appspot.com",
        messagingSenderId: "897242151795",
        appId: "1:897242151795:web:848c3fca51d9f3ab572306"
      
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



