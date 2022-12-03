import React from 'react';
import vinos from './assets/vinos.jpg';
import cervezas from './assets/cervezas.jpg'
import './styles.css'

export const Galeria = () => {
  return (
        <div className="container">
            <h2>Galería</h2>
            <p>Bienvendo a 15 Grados.</p>
            <p>Contamos con selección de vinos y licores.</p>
            <div className="row">
                <div className="m-5 pb-5">
                    <div className="thumbnail">
                    <a href={"vinos.jpg"} target="_blank">
                        <img src={vinos} alt="Lights" />
                        <div className="caption">
                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        </div>
                    </a>
                    </div>
                </div>
                
                <div className="m-5 pb-5">
                    <div className="thumbnail">
                    <a href={"cervezas.jpg"} target="_blank">
                        <img src={cervezas} alt="Nature" />
                        <div className="caption">
                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
  )
}
