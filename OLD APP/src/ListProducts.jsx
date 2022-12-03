import React from 'react'
import { useEffect, useState } from 'react';
import { DatosProduct } from './DatosProduct';
import { fetchProducts } from "./helpers/fetchProducts";
// import DatosProduct from './DatosProduct';
export const ListProducts = () => {

    const [products, setProducts] = useState([]);

    const getProdu = async() => {
      const data = await fetchProducts();
      console.log(data)
      for (const element of data) {
        setProducts(products => [...products, element])
      }
      
    }

    useEffect( () => {
      getProdu();
    }, [])
    console.log(products)


  return (
    <>
        <h2>Inventario Actual</h2>

      <div>
        <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>

          {products.map(pro => (
            <DatosProduct
            key={pro.entry_id}
            value={pro}
            />
          ))}
        </tbody>
        </table>
      </div>


    </>

  )
}

export default ListProducts
