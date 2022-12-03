import React from 'react'
import { useState, useEffect } from 'react';
import updateCarrito from '../helpers/updateCarrito';
import delCarrito from '../helpers/delCarrito';

export const DatosCarrito = ({value}) => {
  
    const [showFormUp, setShowFormUp] = useState(false);

    const apperForm = () => {
      setShowFormUp(!showFormUp);
    };

    function update() {
      let id = value.id
      let name = namef.value
      let directory = directoryf.value
      console.log('id:',id,'name:', name,'directory:', directory)
      updateCarrito(id, name, directory);
      window.location.reload(false);
    }

    function del() {
      let id = value.id
      console.log(id)
      delCarrito(id);
      window.location.reload(false);
    }

  return (
    <>
    <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>${value.directory}</td>
      <td><button 
          onClick={apperForm} 
          >Update</button></td>
      <td><button 
          onClick={del} 
          // onClick={btnUp}
          >Delete</button></td>
    </tr>
    
    {showFormUp && (
          <tr>
            <th scope="row">{value.id}</th>
            <td><input autoComplete='off' id="namef" name="namef" type="text" /></td>
            <td><input autoComplete='off' id="directoryf" name="directoryf" type="number" /></td>
            <td><button 
                onClick={update} 
                >Send</button></td>
      
          </tr>
           )}
    </>
    


      
      
  )
}
export default DatosCarrito
