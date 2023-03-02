import React, {useEffect, useState} from "react";
import Menu from "./Menu"
import axios from "axios";

function JuegosForm({del, id}){

    const[titulo, setTitulo] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[plataforma, setPlataforma] = useState("")
    const[precio, setPrecio] = useState("")
    const[categoria, setCategoria] = useState("")
   

    useEffect(() =>{
        //console.log(id)
        if(id!=undefined)
            cargarJuego()
        else{
            setTitulo("")                 
            setDescripcion("")
            setPlataforma("")
            setPrecio("")
            setCategoria("")
            
        }
    },[id])

    async function cargarJuego(){
        try{
            const res = await axios("https://denny2023.azurewebsites.net/api/juegos/"+id)
            const data = await res.data

            console.log(data)
            setTitulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            setCategoria(data.categoria)
            
        }
        catch(error){
            if(error.response.status == 404){
                
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
        
        if(form.checkValidity() == false)
            form.classList.add('was-validated')
        else{
            if(id == undefined)
                guardar()
            else if(del != true)
                editar()
            else if(del == true)
                eliminar()
        }
    }

    async function eliminar(){
        try{
            const res = await axios({
                method: "DELETE",
                url: "https://denny2023.azurewebsites.net/api/juegos?id="+id
            })

            const data = await res.data

            alert(data.message)
            if(data.status == 1)
                document.querySelector("#btnClose").click()
        }
        catch(error){
            if(error.response.status == 404){
                alert("Juego no existe!")
                document.querySelector("#btnClose").click()
            }
            else
                alert(error)
        }
    }

    async function editar(){
        try{
            const juego = {
                juegoId: id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria,
               
            }

            const res = await axios({
                method: "PUT",
                url: "https://denny2023.azurewebsites.net/api/juegos",
                data: juego
            })

            const data = await res.data

            alert(data.message)
            if(data.status == 1)
                document.querySelector("#btnClose").click()
        }
        catch(error){
            alert(error)
        }
    }

    async function guardar(){
        try{
            const juego = {
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria,
            }
            
            const res = await axios({
                method: "POST",
                url: "https://denny2023.azurewebsites.net/api/juegos",
                data: juego
            })

            const data = await res.data

            alert(data.message)
            if(data.status==1)
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
            <h1>{id==undefined ? "Add" : del!=true ? "Edit" : "Delete"}</h1>
            

            {id!=undefined ?
                <div className="form-group">
                    <label className="form-label">Juego ID</label>
                    <input className="form-control" type="text" value={id} readOnly disabled></input>
                </div>
                :
                ""
            }
            
            
            <form id="formulario" className="needs-validation" noValidate>
                <div className="form-group mt-2">
                    <label className="form-label">Titulo:</label>
                    <input className="form-control" required type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} disabled={del==true ? true : false} />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Ingrese un Titulo</div>
                </div>
                <div className="form-group mt-2">
                    <label className="form-label">Descripcion:</label>
                    <input className="form-control" required type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} disabled={del==true ? true : false} />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Ingrese una descripcion</div>
                </div>
                <div className="form-group mt-2">
                    <label className="form-label">Plataforma</label>
                    <input className="form-control" required type="text" value={plataforma} onChange={(e) => setPlataforma(e.target.value)} disabled={del==true ? true : false} />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Ingrese una plataforma</div>
                </div>
                <div className="form-group mt-2">
                    <label className="form-label">Precio</label>
                    <input className="form-control" required type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} disabled={del==true ? true : false} />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Ingrese un precio</div>
                </div>
                <div className="form-group mt-2">
                    <label className="form-label">Categoria</label>
                    <input className="form-control" required type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} disabled={del==true ? true : false} />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Ingrese una categoria</div>
                </div>
                <div className="form-group mt-2">
                    <button className={`btn btn-${id == undefined ? "success" : del!=true ? "primary" : "danger"}`} onClick={(e) => enviar(e)}>{id == undefined ? "Guardar" : del!=true ? "Editar" : "Eliminar"}</button>
                    <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => cancelar(e)}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default JuegosForm