import React, {useEffect, useState} from "react";
import axios from "axios";

function CelularesForm({del, id}){

  const paramIniciales =  {marca:"", modelo: "", color:"", precio:"", descripcion: "", operadora: ""}

  const[celular, setCelular] = useState(paramIniciales)
  // const[marca, setMarca] = useState("")
  // const[modelo, setModelo] = useState("")
  // const[color, setColor] = useState("")
  // const[precio, setPrecio] = useState("")
  // const[descripcion, setDescripcion] = useState("")
  // const[operadora, setOperadora] = useState("")

  useEffect(() =>{
    //console.log(id)
    if(id !== undefined)
      cargarCelular()
    else{
      setCelular(paramIniciales)
      // setMarca("")
      // setModelo("")
      // setColor("")
      // setPrecio("")
      // setDescripcion("")
      // setOperadora("")
    }
  },[id])

  async function cargarCelular(){
    try{
      const res = await axios("https://denny2023.azurewebsites.net/api/celulares/" + id)
      const data = await res.data

      setCelular(data)
      // console.log(data)
      // setMarca(data.marca)
      // setModelo(data.modelo)
      // setColor(data.color)
      // setPrecio(data.precio)
      // setDescripcion(data.descripcion)
      // setOperadora(data.operadora)
    }
    catch(error){
      if(error.response.status === 404){
                
        document.querySelector("#btnClose").click()
      }
      else
        alert(error)
            
    }
  }

  function enviar(e){
    e.preventDefault()
    e.stopPropagation()
    const form = document.querySelector("#formulario")
        
    if(form.checkValidity() === false)
      form.classList.add("was-validated")
    else{
      if(id === undefined)
        guardar()
      else if(del !== true)
        editar()
      else if(del === true)
        eliminar()
    }
  }

  async function eliminar(){
    try{
      const res = await axios.delete("https://denny2023.azurewebsites.net/api/celulares?id=" + id)
      const data = await res.data

      alert(data.message)
      if(data.status === 1)
        document.querySelector("#btnClose").click()
    }
    catch(error){
      if(error.response.status === 404){
        alert("Celuar no existente!")
        document.querySelector("#btnClose").click()
      }
      else
        alert(error)
    }
  }

  async function editar(){
    try{
      
      const res = await axios.put(
        "https://denny2023.azurewebsites.net/api/celulares", 
        {...celular, celularId: id,})
    
      const data = await res.data

      alert(data.message)
      if(data.status === 1)
        document.querySelector("#btnClose").click()
    }
    catch(error){
      alert(error)
    }
  }

  async function guardar(){
    try{
       
      const res = await axios.post("https://denny2023.azurewebsites.net/api/celulares", celular)
      const data = await res.data

      alert(data.message)
      if(data.status === 1)
        document.querySelector("#btnClose").click()
    }
    catch(error){
      alert(error)
    }
  }

  function cancelar(e){
    e.preventDefault()
    e.stopPropagation()
  }

  return(
    <div>
      <h1>{id === undefined ? "Add" : del !== true ? "Edit" : "Delete"}</h1>
            

      {id !== undefined ?
        <div className="form-group">
          <label className="form-label">Celular ID</label>
          <input className="form-control" type="text" value={id} readOnly disabled></input>
        </div>
        :
        ""
      }
            
            
      <form id="formulario" className="needs-validation" noValidate>
        <div className="form-group mt-2">
          <label className="form-label">Marca:</label>
          <input className="form-control" required type="text" value={celular.marca} 
            onChange={(e) => setCelular({...celular, marca: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese una marca</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Modelo:</label>
          <input className="form-control" required type="text" value={celular.modelo} 
            onChange={(e) => setCelular({...celular, modelo: e.target.value})} disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese un modelo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Color</label>
          <input className="form-control" required type="text" value={celular.color} 
            onChange={(e) => setCelular({...celular, color: e.target.value})} disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese un color</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">precio</label>
          <input className="form-control" required type="text" value={celular.precio} 
            onChange={(e) => setCelular({...celular, precio: e.target.value})} disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese un precio</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">descripcion</label>
          <input className="form-control" required type="text" value={celular.descripcion} 
            onChange={(e) => setCelular({...celular, descripcion: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese una descripcion</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">operadora</label>
          <input className="form-control" required type="text" value={celular.operadora} 
            onChange={(e) => setCelular({...celular, operadora: e.target.value})}
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese una operadora</div>
        </div>
        <div className="form-group mt-2">
          <button className={`btn btn-${id === undefined ? "success" : del !== true ? "primary" : "danger"}`} 
            onClick={(e) => enviar(e)}>{id === undefined ? "Guardar" : del !== true ? "Editar" : "Eliminar"}</button>
          <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => cancelar(e)}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default CelularesForm