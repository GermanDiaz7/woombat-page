import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

//component
import Form from "./Form";

//styles
import '../style/form.css'
import { useEffect, useRef, useState } from "react";
import image from "../img/form/form-image.jpeg"


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
                        <p>{t("contacto.informacion")}<a href="https://instaclone-steven.s3.us-west-1.amazonaws.com/politica-de-privacidad.pdf" target="_blank" rel="noopener noreferrer">{t("politica-datos.privacidad")}</a></p>
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
                <img src={image} alt="About Woombat" />
            </div>
        </Container>
     );
}
 
export default FormSection;