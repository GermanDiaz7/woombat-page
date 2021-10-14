import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

//component
import Form from "./Form";
import { FaHandPointLeft } from "react-icons/fa";

//styles
import '../style/form.css'
import { useEffect, useRef, useState } from "react";
import {ReactComponent as Logo} from "../img/woombat_black.svg"


const FormSection = () => {

    const { t } = useTranslation("global");
    const [encender, setEncender] = useState(false)

    const activator = () => {
        if(encender === true) {
            setEncender(false)
        }else {
            setEncender(true)
        }
    }

    const verify = useRef()
    useEffect(() => {
        setEncender(verify.current.checked)
    },[])

    return ( 
        <Container className='content' id='contact'>
            <div className='form-section left-section'>
                <div className='auth-content'>
                    <h3>{t("politica-datos.titulo")}</h3>
                    <p>{t("politica-datos.autorizacion")}</p>
                    <br/>
                        <p>{t("contacto.informacion")}<a href={t("informacion.politica.url")} target="_blank" rel="noopener noreferrer">{t("politica-datos.privacidad")}</a></p>
                </div>
                <br />
                <div className='auth'>
                    <input ref={verify} onClick={activator} type="checkbox"/>
                    <p>{t("contacto.autorizacion")}</p>
                </div>
                <div className={!encender ? "formulario" : "formulario-on"}>
                    <Form encender={encender} setEncender={setEncender} verify={verify}/>
                </div>
            </div>

            <div className='form-section rigth-section'>
                <div className="contactUs-logo">
                    <Logo fill="#fff"/>
                </div>
                <div className="tx-contactUs">
                    <h2>
                    <FaHandPointLeft />
                    </h2>
                    <h1>Contactános</h1>
                </div>
            </div>
        </Container>
     );
}
 
export default FormSection;