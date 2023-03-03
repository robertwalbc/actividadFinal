import React, {useEffect, useState} from "react";
import axios from "axios";

//const[titulo, setTitulo] = useState("")
// const[descripcion, setDescripcion] = useState("")
// const[plataforma, setPlataforma] = useState("")
// const[precio, setPrecio] = useState("")
// const[categoria, setCategoria] = useState("")
function JuegosForm({del, id}){

  const paramIniciales =  {titulo:"", descripcion: "", plataforma:"", precio:"", categoria: ""}

  const[juego, setJuego] = useState(paramIniciales)
  
  useEffect(() =>{
    if(id !== undefined)
      cargarJuego()
    else{
      setJuego(paramIniciales)
    }
  },[])

  async function cargarJuego(){
    try{
      const res = await axios("https://denny2023.azurewebsites.net/api/juegos/" + id)
      const data = await res.data

      setJuego(data)
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
      const res = await axios.delete("https://denny2023.azurewebsites.net/api/juegos?id=" + id)
      const data = await res.data
    
      alert(data.message)
      if(data.status === 1)
        document.querySelector("#btnClose").click()
    }
    catch(error){
      if(error.response.status === 404){
        alert("Juego no existente!")
        document.querySelector("#btnClose").click()
      }
      else
        alert(error)
        
    }
  }

  async function editar(){
    try{
          
      const res = await axios.put(
        "https://denny2023.azurewebsites.net/api/juegos", 
        {...juego, juegoId: id,})
        
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
                
      const res = await axios.post("https://denny2023.azurewebsites.net/api/juegos", juego)
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
          <label className="form-label">Juego ID</label>
          <input className="form-control" type="text" value={id} readOnly disabled></input>
        </div>
        :
        ""
      }

      <form id="formulario" className="needs-validation" noValidate>
        <div className="form-group mt-2">
          <label className="form-label">titulo:</label>
          <input className="form-control" required type="text" value={juego.titulo} 
            onChange={(e) => setJuego({...juego, titulo: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese una marca</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Descripcion:</label>
          <input className="form-control" required type="text" value={juego.descripcion} 
            onChange={(e) => setJuego({...juego, descripcion: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese un modelo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Plataforma</label>
          <input className="form-control" required type="text" value={juego.plataforma} 
            onChange={(e) => setJuego({...juego, plataforma: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese un color</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">precio</label>
          <input className="form-control" required type="number" value={juego.precio} 
            onChange={(e) => setJuego({...juego, precio: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese un precio</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Categoria</label>
          <input className="form-control" required type="text" value={juego.categoria} 
            onChange={(e) => setJuego({...juego, categoria: e.target.value})} 
            disabled={del === true ? true : false} />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Ingrese una descripcion</div>
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

export default JuegosForm