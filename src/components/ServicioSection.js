import React from 'react'
import SectionTitle from './SectionTitle'
import Texto from './Texto'
import Boton from './Boton'
import logo from '../assets/images/ic_bien_cuidado_logo-playstore.png'

export default function ServicioSection() {
  return (
    <div>
      <div className="container">
        <div className="servicioSection__left">
          <SectionTitle 
            subtitulo='Te presentamos a'
            titulo='bien cuidao'
          />

          <Texto>
            Descarga BIEN CUIDAO y estacionate donde quieras!!!
          </Texto>
          <div className="servicioSection__buttons">
            <Boton btnLink='/contactanos' btnText='Contáctanos' outline='true' />
            <Boton btnLink='/parqueos' btnText='Parqueos'/>
          </div>
        </div>
        <div className="servicioSection__rigth">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}
