import React, { useEffect } from "react";
import '../Styles/Tabla.css';

function Tabla2({filas, campos, evento}){

    useEffect(() => {

    }, [])

    return(
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="thead-customs">
                    <tr>
                        <td className='col-2'>
                            <button className="create" onClick={() => evento()} data-bs-toggle="modal" data-bs-target="#juegosModal">Nuevo</button>
                            </td>
                        {campos.map((value, index) => {
                            return <th className="text-center align-middle" key={index}>{value}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    
                        {filas.map((value, index) => {
                            return <tr key={index}>
                                <td className='col-2 text-center'>
                                    <button className="edit" onClick={() => evento(Object.values(value)[0])} data-bs-toggle="modal" data-bs-target="#juegosModal">Editar</button>
                                    <button className="delete" onClick={() => evento(Object.values(value)[0], true)} data-bs-toggle="modal" data-bs-target="#juegosModal">Eliminar</button>   
                                </td>
                                {Object.values(value).map((value2, index2) => {
                                    return <td className="text-center align-middle" key={index2}>{value2}</td>
                                })}
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
        
    )
}


export default Tabla2