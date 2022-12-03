
import ListProducts from './ListProducts';
import { Galeria } from './Galeria';
import { Menu } from './Menu'
import { useState } from 'react';
import postData from "./helpers/fetchProducts copy";

function App() {

  postData();

  const [state, setstate] = useState("Galeria")

  return (
    <>
      <Menu 
      btn1={ () => setstate('Galeria')}
      btn2={ () => setstate('Inventario')}
      />

      <hr />
      <div>
        {state === "Galeria" && (
          <Galeria />
        )}
        
        {state === "Inventario" && (
          <ListProducts  />
        )}
      
      </div>
      
    </>
  )
}

export default App
