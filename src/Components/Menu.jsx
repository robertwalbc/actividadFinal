import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Menu.css"

function Menu(){

  return(
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">  
          <img className="me-2" src="./img/logo.png" width="30"
            height="30" alt="Logo" />                
          <Link to="/" className="navbar-brand">Actividad Evaluada</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pb-2 pb-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-3">
                            
              <li className="nav-item">
                <Link to="/celulares" className="nav-link active">Celulares</Link>
              </li>
              <li className="nav-item">
                <Link to="/juegos" className="nav-link active">Juegos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Menu