 import firebase from "firebase/app";
 import "firebase/firestore";
// //////import * as firebase from 'firebase/app';
// ////// import'firebase/firestore';
const firebaseConfig = {
   apiKey: "AIzaSyDziiIkdp6cywALqwTOf_COvnzG4AgvejI",
   authDomain: "oishii-chef-meal-kit.firebaseapp.com",
   projectId: "oishii-chef-meal-kit",
   storageBucket: "oishii-chef-meal-kit.appspot.com",
   messagingSenderId: "508355869044",
   appId: "1:508355869044:web:e97ba1195f57a3dc125421"
 };

 const app = firebase.initializeApp(firebaseConfig)

 export const getFirestore = () => {
     return firebase.firestore(app)
 }







//  firebase.initializeApp(firebaseConfig);

//  export const projectFirestore = firebase.firestore();

// const app = firebase.initializeApp(firebaseConfig)

// export const getFirestore = () => {
//     return firebase.firestore(app)
// };

// import{initializeApp} from 'firebase/app';
// import{getFirestore} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDziiIkdp6cywALqwTOf_COvnzG4AgvejI",
//   authDomain: "oishii-chef-meal-kit.firebaseapp.com",
//   projectId: "oishii-chef-meal-kit",
//   storageBucket: "oishii-chef-meal-kit.appspot.com",
//   messagingSenderId: "508355869044",
//   appId: "1:508355869044:web:e97ba1195f57a3dc125421"
// };

// const app = initializeApp(firebaseConfig);

// export const getData = () => getFirestore(app);