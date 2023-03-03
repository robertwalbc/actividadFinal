import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Tabla from "./Tabla";
import JuegosForm from "./JuegosForm";

function JuegosCrud(){

  const[juegos, setJuegos] = useState()
  const[id, setId] = useState()
  const[del, setDel] = useState()

  function configuar(id, del){
    setId(id)
    setDel(del)
  }

  useEffect(() =>{
    obtenerJuegos()
  },[juegos])

  async function obtenerJuegos(){
    try{
      const res = await axios("https://denny2023.azurewebsites.net/api/juegos")
      const data = await res.data

      setJuegos(data)
    }
    catch(error){
      alert(error)
    }
  }

  return(
    <div>
      <Menu />
      <h1>Juegos</h1>
      {
        juegos === undefined ?
          <div className="spinner-border text-primary" role="status"><span>Loading...</span></div>
          :
          <Tabla filas={juegos} evento={configuar} controlador="juegos" 
            campos={["ID", "Titulo", "Descripcion", "Plataforma","Precio","Categoria"]} />
      }
                 
      <div className="modal fade" id="juegosModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Juegos</h1>
              <button 
                type="button" id="btnClose" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <JuegosForm id={id} del={del} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JuegosCrud