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
               
                <Route path="/juegos" element={<JuegosCrud />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default App