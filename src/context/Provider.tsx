import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { FullUsers } from "../interface/interfaces";

export const ProvContext = createContext({});

export const useAuth = () => {
  const context = useContext(ProvContext);
  return context;
};

const Provider = ({ children }: any) => {
  const [user, setUser] = useState<FullUsers | any>(null);
  const [loading, setLoading] = useState(true);
  const [fullUsers, setFullUsers] = useState<FullUsers[] | any>([]);
  

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsuscribe();
  }, []);

  const obtenerUsuarios = async () => {
    const usus = await getDocs(collection(db, `usuarios`));
    console.log(usus.docs);
    const resultado = usus.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setFullUsers(resultado);
  };



  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <>
      <ProvContext.Provider
        value={{
          user,
          loading,
          obtenerUsuarios,
          fullUsers,
        }}
      >
        {children}
      </ProvContext.Provider>
    </>
  );
};

export default Provider;
