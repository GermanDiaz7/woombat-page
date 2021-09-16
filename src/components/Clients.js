import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "../style/clients.css";
import "../style/slider.css";

import sb from "../img/clients/seguros-bolivar.png";
import dv from "../img/clients/davivienda.png";
import pj from "../img/clients/javeriana.png";
import ev from "../img/clients/everis.png";
import ej from "../img/clients/ejercito.png";
import cj from "../img/clients/coljuegos.png";
import mh from "../img/clients/minhacienda.png";
import bvc from "../img/clients/bvc.png";
import tuya from "../img/clients/tuya.png";
import cv from "../img/clients/comision.png";
import sfc from "../img/clients/sfc.png";

const Clients = () => {
  const { t } = useTranslation("global");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true
  };

  return (
    <div className="clients" id='clients'>
      <Container>
        <div className="clients-content">
          <div className="clients-content-left">
            <p className="subtitle text-center">{t("clientes.subtitulo")}</p>
            <h2 className="title-white text-center">{t("clientes.titulo")}</h2>
            <p className="text-white text-center">{t("clientes.texto")}</p>
          </div>
          <div className="clients-content-right">
            <div className="clients-content-client">
              <img src={sb} alt="Seguros Bolivar" />
            </div>

            <div className="clients-content-client">
              <img src={dv} alt="Davivienda" />
            </div>

            <div className="clients-content-client">
              <img src={pj} alt="Universidad Javeriana" />
            </div>

            <div className="clients-content-client">
              <img src={ev} alt="Everis" />
            </div>

            <div className="clients-content-client">
              <img src={ej} alt="Ejercito Nacional" />
            </div>

            <div className="clients-content-client">
              <img src={cj} alt="ColJuegos" />
            </div>

            <div className="clients-content-client">
              <img src={mh} alt="Ministerio de Hacienda" />
            </div>

            <div className="clients-content-client">
              <img src={bvc} alt="Bolsa de Valores" />
            </div>

            <div className="clients-content-client">
              <img src={tuya} alt="Tuya" />
            </div>

            <div className="clients-content-client">
              <img src={cv} alt="Comision de la Verdad" />
            </div>

            <div className="clients-content-client">
              <img src={sfc} alt="Superintendencia Financiera" />
            </div>
          </div>
        </div>
        <Slider {...settings} className="slider">
              <img src={sb} alt="Seguros Bolivar" />
              <img src={dv} alt="Davivienda" />
              <img src={pj} alt="Universidad Javeriana" />
              <img src={ev} alt="Everis" />
              <img src={ej} alt="Ejercito Nacional" />
              <img src={cj} alt="ColJuegos" />
              <img src={mh} alt="Ministerio de Hacienda" />
              <img src={bvc} alt="Bolsa de Valores" />
              <img src={tuya} alt="Tuya" />
              <img src={cv} alt="Comision de la Verdad" />
              <img src={sfc} alt="Superintendencia Financiera" />
            </Slider>
      </Container>
    </div>
  );
};

export default Clients;
