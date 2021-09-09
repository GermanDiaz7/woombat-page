import { useTranslation } from "react-i18next";

import { ReactComponent as Logo } from "../img/woombat_black.svg";

//styles
import "../style/navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <div className="navbar-container">
        <div className="woombatLg">
          <Logo fill="#fff" />
        </div>
      <div className='navbar-sections'>
        <div className='navbar-sections-navegation'>
          <a href="/">{t("navegacion.inicio")}</a>
          <a href="/">{t("navegacion.servicios")}</a>
          <a href="/">{t("navegacion.nosotros")}</a>
          <a href="/">{t("navegacion.clientes")}</a>
          <a href="/">{t("navegacion.contacto")}</a>
        </div>
        <div className='translation-content'>
          <span className='translation-btn' onClick={() => i18n.changeLanguage("es")}>| ES</span>
          <span className='translation-btn' onClick={() => i18n.changeLanguage("en")}>| EN</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
