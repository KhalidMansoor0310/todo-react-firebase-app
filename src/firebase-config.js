import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAgXDqzUMOApvm48eD6irVIryF40sQ5dDM",
  authDomain: "todo-list-f8f02.firebaseapp.com",
  projectId: "todo-list-f8f02",
  storageBucket: "todo-list-f8f02.appspot.com",
  messagingSenderId: "1051648677609",
  appId: "1:1051648677609:web:d68e4b9c8e16fc29018278",
  measurementId: "G-B5G9S1J3ZC"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
