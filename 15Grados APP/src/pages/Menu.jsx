import React from 'react'
import { useState } from 'react';
import botella from '../assets/botella blanca-03.png'
import '../styles.css';

export const Menu = (props) => {
    const [cName, setcName] = useState(["nav-link ", "nav-link "]);

  return (
    <ul className="nav nav-pills ese">
            <li className="nav-item">
              <button className={cName[0]} 
              onClick={props.btn1}
              >LogIn</button>
            </li>
            <li className="nav-item">
              <button className={cName[0]} 
              onClick={props.btn2}
              >Inicio</button>
            </li>
            <li className="nav-item">
              <button className={cName[0]} 
              onClick={props.btn3}
              >Carrito</button>
            </li>
            <li className="nav-item">
              <button className={cName[1]} 
              onClick={props.btn4}
              >Invetario</button>
            </li>
            <li className="nav-item">
              <button className={cName[1]} 
              onClick={props.btn5}
              >Registro de usuarios</button>
            </li>
            <li className="nav-item derecha">
              <img src={botella} alt="botella" />
            </li>
            
    </ul>
  )
}
