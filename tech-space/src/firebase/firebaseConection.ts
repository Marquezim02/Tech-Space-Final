import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAPN0l3Zh0mBa5aJnWb1LArguzJS31azSk",
    authDomain: "tech-space-9a8da.firebaseapp.com",
    projectId: "tech-space-9a8da",
    storageBucket: "tech-space-9a8da.appspot.com",
    messagingSenderId: "948296324693",
    appId: "1:948296324693:web:ab61ab3eff83a4e81fa6dc",
    measurementId: "G-VV9P496J3F"
  };

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };