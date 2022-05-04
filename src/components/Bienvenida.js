import React from 'react'
import styled from 'styled-components'


const BienvenidaStyle = styled.div`
  margin-top: 100px;
  height: 100vh;
`
export default function Bienvenida() {
  return (
    <BienvenidaStyle>
      <div className='container'>
        <h1 className='bienvenida__heading'>
          <span>Hola esto es un span</span>
          <span>Bien cuidao</span>
        </h1>
        <div className='mapa__bienvenida'>

        </div>
      </div>
    </BienvenidaStyle>
  )
}
