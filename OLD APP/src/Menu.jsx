import React from 'react'
import { useState } from 'react';

export const Menu = (props) => {
    const [cName, setcName] = useState(["nav-link ", "nav-link "]);
    
    function ini() {
        props.btn1
        setcName(["nav-link active", "nav-link"])
        console.log("jalo ini")
    }

    function inv() {
        props.btn2
        setcName(["nav-link", "nav-link active"])
        console.log("jalo inv")
    }

  return (
    <ul className="nav nav-pills">
            <li className="nav-item">
              <a className={cName[0]} aria-current="page" 
              onClick={props.btn1}
              >Inicio</a>
            </li>
            <li className="nav-item">
              <a className={cName[1]} 
              onClick={props.btn2}
              >Inventario</a>
            </li>
    </ul>
  )
}

