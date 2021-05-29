import firebase from 'firebase/app'
import 'firebase/auth'


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCkqz30johR6MrHmKUxufIJsdAWtAAUcQY",
    authDomain: "mychat-efdca.firebaseapp.com",
    projectId: "mychat-efdca",
    storageBucket: "mychat-efdca.appspot.com",
    messagingSenderId: "859774948876",
    appId: "1:859774948876:web:af44407590de1b57010029"
  }).auth()