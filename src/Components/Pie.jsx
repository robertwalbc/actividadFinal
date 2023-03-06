import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Pie.css"

function Pie(){
  return(
    <footer>        
      <div className="text-center">
        <section className=" bg-light justify-content-center pt-2 border-bottom">
          <div>
            <span id="contacto" >Conéctate con nosotros en las redes sociales:</span>
          </div><br />
         
          <div id="nombres" className="row">
            <div  id="col-1" className="col-12 col-sm-6 ">
              <p> <span className="m-4">Andrea Fortis</span> 
                <Link to="https://www.linkedin.com/in/andrea-fortis-0b14b8ab/" className="me-4 text-reset">
                  <i className="fab fa-linkedin logo1"></i>
                </Link> 
                <Link to="https://github.com/fortis-a" className="me-4 text-reset">
                  <i className="fab fa-github logo2"></i>
                </Link></p>

              <p> <span className="m-4">Guillermo Alas</span> 
                <Link to="https://www.linkedin.com/in/guillermo-alas" className="me-4 text-reset">
                  <i className="fab fa-linkedin logo1"></i>
                </Link> 
                <Link to="https://github.com/josealas1993" className="me-4 text-reset ">
                  <i className="fab fa-github logo2"></i>
                </Link></p>
            </div>
         
            <div  id="col-2" className="col-12 col-sm-6">
              <p> <span className="m-4">Robert Albeño</span> 
                <Link to="https://www.linkedin.com/in/robertwalb" className="me-4 text-reset">
                  <i className="fab fa-linkedin logo1"></i>
                </Link> 
                <Link to="https://github.com/robertwalbc" className="me-4 text-reset logo">
                  <i className="fab fa-github logo2"></i>
                </Link></p>

              <p> <span className="m-4">Karen Fuentes</span> 
                <Link to="https://www.linkedin.com/in/karen-fuentes-435670229" className="me-4 text-reset">
                  <i className="fab fa-linkedin logo1"></i>
                </Link> 
                <Link to="https://github.com/Ste2899" className="me-4 text-reset logo">
                  <i className="fab fa-github logo2"></i>
                </Link></p>
            </div>
          </div>
        </section>
  
        <div className="text-center mt-2">
          © 2023 Copyright:
          <p>Todos los derechos reservados</p>
        </div>
  
      </div>
    </footer> 

  )
}
export default Pie