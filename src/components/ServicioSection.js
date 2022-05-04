import React from "react";
import SectionTitle from "./SectionTitle";
import Texto from "./Texto";
import Boton from "./Boton";
import logo from "../assets/images/ic_bien_cuidado_logo-playstore.png";
import styledComponents from "styled-components";

const ServicioSectionStyle = styledComponents.div`
  padding: 10rem 0;
  .container{
    display: flex;
    aling-items: center;
    gap: 1.5rem;
    justify-content: flex-start;
    text-align: left;
  }

  .servicioSection__left,
  .servicioSection__rigth{
    flex: 1;
  }

  .servicioSection__rigth img{
    object-fit: contain;
  }

  .section-title{
    margin-top: 3rem;
    text-align: left;
  }
  .parrafo{
    margin-top: 2rem;
    margin-left: 0;
    color: var(--color-primary);
  }

  .servicioSection__buttons{
    display: flex;
    align-items: center;
    justify-contents: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px){
    .servicioSection__left{
      flex:4;
    }
    .servicioSection__rigth{
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px){
    .container{
      flex-direction: column;
      text-align: center;
    }
    .servicioSection__left,
    .servicioSection__rigth{
      width: 100%;
    }
    .section-title{
      text-align: center;
    }
    .parrafo{
      margin: 0 auto;
    }

    .servicioSection__buttons{
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a{
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function ServicioSection() {
  return (
    <ServicioSectionStyle>
      <div className="container">
        <div className="servicioSection__left">
          <SectionTitle subtitulo="Te presentamos a" titulo="bien cuidao" />

          <Texto>
            Descarga BIEN CUIDAO y estacionate donde quieras!!!
            <br></br>
            <br></br>
            Es una
            aplicación móvil que permite al usuario registrar sus parqueos o
            encontrar espacios disponibles en parqueos públicos y privados
          </Texto>
          <div className="servicioSection__buttons">
            <Boton
              btnLink="/contactanos"
              btnText="Contáctanos"
              outline="true"
            />
            <Boton btnLink="/parqueos" btnText="Parqueos" />
          </div>
        </div>
        <div className="servicioSection__rigth">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </ServicioSectionStyle>
  );
}
