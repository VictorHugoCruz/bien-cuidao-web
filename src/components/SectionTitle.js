import React from 'react'
import styledComponents from 'styled-components'

const SectionTitleStyle = styledComponents.div`
  text-align: center;
  p{
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }

  h2{
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: .5rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px){
    p{
      font-size: 1.2rem;
    }

    h2{
      font-size: 3.8rem;
    }
  }
`

export default function SectionTitle({ 
  subtitulo = 'Este es un subtitulo',
  titulo = 'Este es un titulo'
}) {
  return (
    <SectionTitleStyle className='section-title'>
      <p>{subtitulo}</p>
      <h2>{titulo}</h2>
    </SectionTitleStyle>
  )
}
