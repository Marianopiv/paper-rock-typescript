import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const useServices = () => {
  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

    const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const saveHighScore = async (
    uid: string,
    score: number,
    email: string
  ) => {
    // Crea referencia al documento
    const docRef = doc(db, `usuarios/${uid}`);
    //Actualiza el campo highscore del documento
    await setDoc(docRef, { highscore: score, email });
    //Obtener el highscore actualizado
    const updatedDoc = await getDoc(docRef);
  };
    

  return {signup,login,logout,saveHighScore}
}

export default useServices