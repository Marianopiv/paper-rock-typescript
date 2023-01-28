import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import Register from "../components/register/Register";
import Provider from "../context/Provider.js";
import Home from "../home/Home";
import useServices from "../hook/useServices";

const Rutas = () => {
  const [auth, setAuth] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Rutas;
