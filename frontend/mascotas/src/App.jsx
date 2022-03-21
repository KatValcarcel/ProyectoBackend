import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getServerInfo } from "./services/user.service";
import { Index } from "./views/Index";
import { Register } from "./views/Register";
import { Login } from "./views/Login";

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
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>);
}

export default App;
