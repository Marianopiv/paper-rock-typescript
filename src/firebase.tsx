// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth/"
import {getFirestore} from "firebase/firestore"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9gFA_X1kD4KC5O60OyjvNmLfcvs8NPj0",
  authDomain: "paper-rock-scissors-851b1.firebaseapp.com",
  projectId: "paper-rock-scissors-851b1",
  storageBucket: "paper-rock-scissors-851b1.appspot.com",
  messagingSenderId: "1091492835606",
  appId: "1:1091492835606:web:a95a023793cbff59f82037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);

//Hacer custom hook useServices, y armar un context para el usuario.Investigar los metodos del firestore mirar tutoriales, como agregar usuarios, modificar, eliminar en esa db, como autenticar usuarios, registro login.FIRESTORE Y AUTENTICACION, si entiendo todo eso armo un contexto de usuarios, y hacer interfaz como me pasó jova.