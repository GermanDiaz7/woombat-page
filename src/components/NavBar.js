import { useTranslation } from "react-i18next";

import {ReactComponent as Logo} from '../img/woombat_black.svg'

//styles
import "../style/NavBar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <div className="NavBar-Container">
      <div className='woombatLg'><Logo fill="#fff"/></div>
      <div>
          <a href='/'>{t("navegacion.inicio")}</a>
          <a href='/'>{t("navegacion.servicios")}</a>
          <a href='/'>{t("navegacion.nosotros")}</a>
          <a href='/'>{t("navegacion.clientes")}</a>
          <a href='/'>{t("navegacion.contacto")}</a>
          
      </div>
      <div>
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
    </div>
  );
};

export default Navbar;
