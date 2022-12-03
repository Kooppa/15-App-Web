import React from 'react'
import { useState, useEffect } from 'react';
import  DatosCarrito from './DatosCarrito';
import fetchCarritos from '../helpers/fetchCarritos';
import addCarrito from '../helpers/addCarrito';
import updateCarrito from '../helpers/updateCarrito';
import '../styles.css';

export const Carrito = () => {
    const [Carritos, setCarritos] = useState([]);

    const [showForm, setShowForm] = useState(false);


    let precio = 0
    Carritos.map(us => (
      precio = precio  + us.directory
    ))

    const apperForm = () => {
        setShowForm(!showForm);
    };

    const getCarrito = async() => {
      const data = await fetchCarritos();
      // console.log(data)
      for (const element of data) {
        setCarritos(Carritos => [...Carritos, element])
      }
    }

    useEffect(() => {
      getCarrito();
    }, [])


    function adding() {
      console.log("adding")
    }

  
      // const {counter1,counter2,counter3,counter4,counter5,counter6} = state;
    
  return (
        <>
        <h2>Items en el carrito</h2>
        <div>
          <table className='table'>
            <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Item</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
              {Carritos.map(us => (
                <DatosCarrito
                key= {us.id}
                value={us}
                />
              ))}
            <tr>
              <th scope="row"></th>
              <td></td>
              <td className='precio'>${precio}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          </table>
          <br />

          
           <br />
          <button className='carbut' onClick={apperForm}>Agregar Item</button>
          
        </div>
        <br />
        
        

           {showForm && (
        <form onSubmit={ev => {
          //ev.preventDefault();
          const name = ev.target.add1.value
          const directory = ev.target.add2.value
          
          addCarrito(name, directory);
        }}>
          <div className="form-group">
            <h5 >Agregar otro item:</h5>
            <label htmlFor="exampleInputEmail1">Nombre</label>
            <input name='add1' autoComplete='off' type="text" className="form-control" id="addName" aria-describedby="emailHelp" placeholder="Nombre"/ >
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Precio</label>
            <input name='add2' autoComplete='off' type="number" className="form-control" id="adddirectory" placeholder="Precio"/>
          </div>
          <button type="submit" className="btn btn-primary" >Agregar</button>
          </form>
           )}
        </>
  )
}