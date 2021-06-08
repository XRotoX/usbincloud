import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"


// apiKey: "AIzaSyBs0k-8Ymf2dk0L_mWXzHdOGFZKwa67hS8",
//     authDomain: "stockage-gestion-de-fichiers.firebaseapp.com",
//     projectId: "stockage-gestion-de-fichiers",
//     storageBucket: "stockage-gestion-de-fichiers.appspot.com",
//     messagingSenderId: "835938768153",
//     appId: "1:835938768153:web:1463b3b0c8f7f28722a188",
//     measurementId: "G-VS435NX6LW"


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