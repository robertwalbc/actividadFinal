import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import CelularesCrud from "./CelularesCrud";
import CelularesForm from "./CelularesForm";
function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/celulares" element={<CelularesCrud />} />
                <Route path="/celular/Add" element={<CelularesForm />} />
                <Route path="/celular/Edit/:id" element={<CelularesForm />} />
                <Route path="/celular/Delete/:id" element={<CelularesForm del={true} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App