import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/ic_bien_cuidado_logo-playstore.png'
import { MdClose, MdMenu } from 'react-icons/md'

const NavMenuStyles = styled.nav`
  position: fixed;
  z-index:100;
  top: 0;
  left: 0;
  width:100%;
  height: 90px;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-dark);
  .nav-container {
    margin: 0 auto;
    width: 90%;
    display: flex;
    align-items:center;
    justify-content: space-between;

    img{
      width: 180px;
      height: 70px;
      object-fit: cover;
      border-radius: 12px;
      margin-left:0;
    }

    .nav-container-element{
      width: 100%;
      padding-right:0;
      overflow: hidden;
    }

    ul{
      width:90%;
      margin: 0 auto;
      padding-right:0;
      text-align: end;
      li {
        display: inline-block;
        border-radius: 8px;
        transition: .3s ease background-color;
        &:hover{
          background-color: var(--color-primary)
        }
      }
      a{
        display: inline-block;
        font-family: 'RobotoMono Regular';
        padding: 1rem 2rem;
        font-size: 2rem;
        color: var(--white);
        outline: none;
      }

      .active{
        background-color: var(--white);
        color: var(--primary-dark);
        border-radius: 12px;
      }
    }
    .mobile-menu-icon{
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 4rem;
      cursor: pointer;
      display: none;
      outline: none;
      *{
        pointer-events:none;
      }
    }

    .closeNavIcon{
      display: none;
    }
    @media only screen and (max-width: 900px){
      img{
        display: none;
      }

      .nav-container{
        height: 90px;
        align-items: center;
        justify-content: center;
      }
    }
    @media only screen and (max-width: 768px){
      .hide-item{
        transform: translateY(calc(-100% - var(--top)))
      }
      .mobile-menu-icon{
        display: block;
      }
      img{
        display: none;
      }

      .navItems{
        --top: 1rem;
        transition: .3 ease transform;
        background-color: var(--color-primary);
        padding: 2rem;
        width: 90%;
        max-width: 300px;
        border-radius:12px;
        position: absolute;
        right: 1rem;
        top: var(--top);
        .closeNavIcon{
          display: block;
          width: 3rem;
          margin: 0 0 0 auto;
          cursor: pointer;
            *{
              pointer-events: none;
            }
          }
        li{
          display:block;
          margin-bottom: 1rem;
        }
      }
      
    }
  }
`
function NavMenu() {

  const [showNav, setShowNav] = useState(false)
  return (
    <NavMenuStyles>
      <div className='nav-container'>
        <div className='image-container'>
          <img src={logo} alt='Logo Bien cuidao'/>
        </div>
        
        <div className='mobile-menu-icon'
          onClick={()=>setShowNav(!showNav)}
          role='button'
          onKeyDown={()=>setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
        <div className='nav-container-element'>
          <ul className={!showNav? 'navItems hide-item': 'navItems'}>
            <div className='closeNavIcon'
              onClick={()=>setShowNav(!showNav)}
              role='button'
              onKeyDown={()=>setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
            <li>
              <NavLink to='/'
              onClick={()=>setShowNav(!showNav)}
              role='button'
              onKeyDown={()=>setShowNav(!showNav)}
              tabIndex={0}
              >Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/servicio' 
              onClick={()=>setShowNav(!showNav)}
              role='button'
              onKeyDown={()=>setShowNav(!showNav)}
              tabIndex={0}
              >Servicio</NavLink>
            </li>
            <li>
              <NavLink to='/parqueos'
              onClick={()=>setShowNav(!showNav)}
              role='button'
              onKeyDown={()=>setShowNav(!showNav)}
              tabIndex={0}
              >Parqueos</NavLink>
            </li>
            <li>
              <NavLink to='/contactanos'
              onClick={()=>setShowNav(!showNav)}
              role='button'
              onKeyDown={()=>setShowNav(!showNav)}
              tabIndex={0}
              >Contactanos</NavLink>
            </li>
          </ul>
        </div>
      </div> 
    </NavMenuStyles>
  )
}

export default NavMenu
