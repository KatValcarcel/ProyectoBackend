import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getServerInfo } from "./services/user.service";
import { Index } from "./views/Index";
import { Register } from "./views/Register";
import { Contacto } from "./views/Contacto";
import { Login } from "./views/Login";
import { RegistrarMascota } from "./views/RegistrarMascota";
import { RutaPrivada } from "./RutaPrivada";

function App() {
  useEffect(() => {
    async function funcion() {
      const data = await getServerInfo()
      console.log(data);
    }
    funcion()
  }, [])

  return (<Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro-mascota" element={<RegistrarMascota />} />
      <Route
        path="/contacto"
        element={
          <RutaPrivada>
            <Contacto />
          </RutaPrivada>
        }
      />
    </Routes>
  </Router>);
}

export default App;
