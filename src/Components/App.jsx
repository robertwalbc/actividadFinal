import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import CelularesCrud from "./CelularesCrud";
import CelularesForm from "./CelularesForm";
import JuegosCrud from "./JuegosCrud";
import JuegosForm from "./JuegosForm";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celulares" element={<CelularesCrud />} />
        <Route path="/celular/Add" element={<CelularesForm />} />
        <Route path="/celular/Edit/:id" element={<CelularesForm />} />
        <Route path="/celular/Delete/:id" element={<CelularesForm del={true} />} />
        <Route path="/juegos" element={<JuegosCrud />} />
        <Route path="/juego/Add" element={<JuegosForm />} />
        <Route path="/juego/Edit/:id" element={<JuegosForm />} />
        <Route path="/juego/Delete/:id" element={<JuegosForm del={true} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App