import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Tabla from "./Tabla";
import CelularesForm from "./CelularesForm"

function CelularesCrud(){

  const[celulares, setCelulares] = useState()
  const[id, setId] = useState()
  const[del, setDel] = useState()

  function configuar(id, del){
    setId(id)
    setDel(del)
  }

  useEffect(() =>{
    obtenerCelulares()
  },[celulares])

  async function obtenerCelulares(){
    try{
      const res = await axios("https://denny2023.azurewebsites.net/api/celulares")
      const data = await res.data

      setCelulares(data)
    }
    catch(error){
      alert(error)
    }
  }

  return(
    <div>
      <Menu />
      <h1>Celulares</h1>
      {
        celulares === undefined ?
          <div className="spinner-border text-primary" role="status"><span>Loading...</span></div>
          :
          <Tabla 
            filas={celulares} evento={configuar} 
            controlador="celulares" campos={["ID", "Marca", "Modelo", "Color","Precio","Descripcion","Operadora"]} />
      }
            
      <div className="modal fade" id="celularesModal" 
        tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Celulares</h1>
              <button type="button" id="btnClose" className="btn-close" data-bs-dismiss="modal" 
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <CelularesForm id={id} del={del} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CelularesCrud