
import styledComponents from 'styled-components'

const PStyle = styledComponents.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.8rem;
  @media only screen and (max-width: 768px){
    font-size: 1.4rem;
  }
`
export default function Texto({ children }) {
  return (
    <PStyle className='parrafo'>
      <p>
        {children}
      </p>
    </PStyle>
    )
}
