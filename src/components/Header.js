import { useTranslation } from 'react-i18next'

const Header = () => {

    const { t, i18n } =  useTranslation("global")

    return ( 
        <div>
            {t("navegacion.inicio")}
            <br />
            <button
                onClick={() => i18n.changeLanguage("es")}
            >ES</button>
            <button
                onClick={() => i18n.changeLanguage("en")}
            >EN</button>
        </div>
     );
}
 
export default Header;