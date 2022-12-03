import React, { useEffect, useState } from "react";
import { Menu } from "./pages/Menu";
import { Login } from './pages/Login';
import { Galeria } from './Galeria';
import { Carrito } from './pages/Carrito';
import { User } from "./pages/User";
import { Item } from "./pages/Item";
import './styles.css'

function App() {

  const [state, setstate] = useState("Galeria")
  
  useEffect(() => {
    setstate(window.localStorage.getItem('count'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', state);
  }, [state]);

  return (
    <>
      <Menu 
      btn1={ () => setstate('Log In')}
      btn2={ () => setstate('Galeria')}
      btn3={ () => setstate('Carrito')}
      btn4={ () => setstate('Inventario')}
      btn5={ () => setstate('Registro')}
      />

      <br />
      <div className='container'>
        {state === "Log In" && (
          <Login 
          btn2={ () => setstate('Galeria')}
          />
        )}
        
        {state === "Galeria" && (
          <Galeria />
        )}

        {state === "Carrito" && (
          <Carrito />
        )}

        {state === "Inventario" && (
          <Item />
        )}
        
        {state === "Registro" && (
          <User  />
        )}
      
      </div>
      
    </>
  )
}

export default App
