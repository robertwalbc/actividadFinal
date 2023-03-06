import React, { useEffect } from "react";
import '../Styles/Tabla.css';

function Tabla({filas, campos, controlador, evento}){

  useEffect(() => {

  }, [])

  return(
    <div className="table-responsive table-margin">
      <table className="table table-hover table-bordered">
        <thead className="thead-customs">
          <tr>
            <td className='col-2'>
              <button className="create" onClick={() => evento()} data-bs-toggle="modal" 
                data-bs-target={`#${controlador}Modal`}>Nuevo</button>
            </td>
            {campos.map((value, index) => {
              return <th className="text-center align-middle" key={index}>{value}</th>
            })}
          </tr>
        </thead>
        <tbody>
                    
          {filas.map((value, index) => {
            return <tr key={index}>
              <td className='text-center col-2'>
                <button 
                  className="edit" onClick={() => evento(Object.values(value)[0])} 
                  data-bs-toggle="modal" data-bs-target={`#${controlador}Modal`}>Editar</button>
                <button 
                  className="delete" onClick={() => evento(Object.values(value)[0], true)} 
                  data-bs-toggle="modal" data-bs-target={`#${controlador}Modal`}>Eliminar</button>
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

export default Tabla