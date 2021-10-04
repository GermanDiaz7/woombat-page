//styles
import "../style/burger-menu.css"

//icons
import { BsList } from "react-icons/bs";
import { useState } from "react";

//traslator
import { useTranslation } from "react-i18next";


const BurgerMenu = () => {

    //funcion de traduccion
    const { t, i18n } = useTranslation("global");


    const [display, setDsiplay] = useState(false)

    
    //manejo de estados y duncion para cambiar los idiomas
    const hanldeSwitch = () => {
        if(display) {
            setDsiplay(false)
        }else {
            setDsiplay(true)
        }
    }

    const Lenguage = (valor) => {
        if(valor.target.value === "ES") {
            i18n.changeLanguage("es")
        }else {
            i18n.changeLanguage("en")
        }
        setDsiplay(false)
    }

    const desertMenu = () => {
        setDsiplay(false)
    }

    return ( 
        <div className='burger-menu'>
            <BsList onClick={hanldeSwitch} className= 'icon'/>
            <div className={display ? "on" : "off"}>
                <div className='burger-content'>
                    <select onChange={Lenguage}>
                        <option>ES</option>
                        <option>EN</option>
                    </select>
                    <a onClick={desertMenu} href="#presentation">{t("navegacion.inicio")}</a>
                    <a onClick={desertMenu} href="#serivices">{t("navegacion.servicios")}</a>
                    <a onClick={desertMenu} href="#allies">{t("navegacion.aliados")}</a>
                    <a onClick={desertMenu} href="#about">{t("navegacion.nosotros")}</a>
                    <a onClick={desertMenu} href="#clients">{t("navegacion.clientes")}</a>
                    <a onClick={desertMenu} href="#contact">{t("navegacion.contacto")}</a>
                    </div>
            </div>
        </div>
     );
}
 
export default BurgerMenu;