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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="clients">
      Hola
    </div>
  );
};

export default Clients;
