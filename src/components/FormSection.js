import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

//component
import Form from "./Form";

//styles
import '../style/form.css'
import { useState } from "react";


const FormSection = () => {

    const { t } = useTranslation("global");
    const [encender, setEncender] = useState(false)

    const activator = (e) => {
        if(encender === true) {
            setEncender(false)
        }else {
            setEncender(true)
        }
    }

    return ( 
        <Container className='content' id='contact'>
            <div className='form-section left-section'>
                <div className='auth-content'>
                    <h3>Autorización de tratamiento de Datos Personales</h3>
                    <p>Autorizo a Woombatcg Consulting Group SAS para que los datos personales recolectados
                        sean utilizados a fin de dar trámite a mi solicitud de contacto, enviarme información acerca
                        de sus productos y servicios y para fines publicitarios al hacer uso del botón Enviar. Estos
                        datos pueden ser compartidos con aliados de negocio para efectos de información
                        comercial sobre productos y servicios ofrecidos. Usted tiene derecho a conocer, actualizar
                        y rectificar sus datos y este derecho lo puede ejercer a través de la cuenta de correo
                        protecciondedatos@woombatcg.com. Para mayor información puede consultar nuestra
                        Política de privacidad en www.woombatcg.com.
                    </p>
                    <br/>
                        <p>{t("contacto.informacion")}<a href="https://instaclone-steven.s3.us-west-1.amazonaws.com/politica-de-privacidad.pdf" target="_blank" rel="noopener noreferrer">LEER POLITICA</a></p>
                </div>
                <br />
                <div className='auth'>
                    <input onClick={activator} type="checkbox"/>
                    <p>{t("contacto.autorizacion")}</p>
                </div>
                <Form encender={encender}/>
            </div>

            <div className='form-section rigth-section'>
                
            </div>
        </Container>
     );
}
 
export default FormSection;