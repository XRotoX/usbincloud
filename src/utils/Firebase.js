import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// Don't steel my credentials :(
// They are kept just for demo purposes
const app = firebase.initializeApp({
    apiKey: "AIzaSyAPSH6j99d6SiO0Ugft8lk_gMlnabqLJ3U",
    authDomain: "flagquiz-42492.firebaseapp.com",
    databaseURL: "https://flagquiz-42492.firebaseio.com",
    projectId: "flagquiz-42492",
    storageBucket: "flagquiz-42492.appspot.com",
    messagingSenderId: "847220430562",
    appId: "1:847220430562:web:2d5d9b31ae31816b6670bb",
    measurementId: "G-FPQ4BMTJLN"
});

const fireDB = app.firestore()
export const database = {
    folders: fireDB.collection('folders'),
    files: fireDB.collection('files'),
    users: fireDB.collection('users'),
    formatDoc: doc => {
        return { id: doc.id, ...doc.data() }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const auth = app.auth()
export const storage = app.storage()

export default app
