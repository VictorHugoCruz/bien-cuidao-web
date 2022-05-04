import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

const BotonStyle = styledComponents.div`
  margin-top: 2rem;
  .button{
    font-size: 2.2rem;
    background-color: ${(props) => props.outline? 'transparent': 'var(--primary-dark)'};
    padding: .7rem 2rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--primary-dark);
    color: ${(props) => props.outline? 'var(--primary-dark)': 'var(--white)'};
  }
  @media only screen and (max-width: 768px){
    .button{
      font-size: 1.8rem;
    }
  }
`

export default function Boton({ 
  btnLink='test',
  btnText='test',
  outline= false}) {
  return (
    <BotonStyle outline={outline}>
      <Link 
        className='button'
        to={btnLink}
      >
        {btnText}
      </Link>
    </BotonStyle>
  )
}
