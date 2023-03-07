import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import CelularesCrud from "./CelularesCrud";
import CelularesForm from "./CelularesForm";
import JuegosCrud from "./JuegosCrud";
import JuegosForm from "./JuegosForm";
import Menu from "./Menu";
import Pie from "./Pie"

function App(){

  return(
    
    <BrowserRouter>
      <div style ={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"  }}>
        <Menu/>
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
        <Pie/>
      </div>
    </BrowserRouter>
  )
}

export default App