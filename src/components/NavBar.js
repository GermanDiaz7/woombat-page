import { useTranslation } from "react-i18next";

import { ReactComponent as Logo } from "../img/woombat_black.svg";


//styles
import "../style/navbar.css";

const Navbar = ({bgState}) => {

  const { t, i18n } = useTranslation("global");

  return (

    <div className="nb-container">
    <div className={!bgState ? "navbar-container bg-transparent" : "navbar-container bg-navbar"}>
        <div className="woombatLg">
          <a href="#presentation" ><Logo height="100" width="150" fill="#fff" /></a>
        </div>
      <div className='navbar-sections'>
        <div className='navbar-sections-navegation'>
          <a href="#presentation">{t("navegacion.inicio")}</a>
          <a href="#serivices">{t("navegacion.servicios")}</a>
          <a href="#allies">{t("navegacion.aliados")}</a>
          <a href="#about">{t("navegacion.nosotros")}</a>
          <a href="#clients">{t("navegacion.clientes")}</a>
          <a href="#contact">{t("navegacion.contacto")}</a>
        </div>
        <div className='translation-content'>
          <span className='translation-btn' onClick={() => i18n.changeLanguage("es")}>| ES</span>
          <span className='translation-btn' onClick={() => i18n.changeLanguage("en")}>| EN</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
