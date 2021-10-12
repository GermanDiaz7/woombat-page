import '../style/form.css';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Form = ({encender, setEncender}) => {

    const { t } = useTranslation("global");

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        rank: '',
        message: ''
    })
    const expresionRegular =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/

    const { name, company, email, rank, message } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name.trim() || !company.trim() || !rank.trim() || !message.trim()) {
            toast.error(t('notifiacion.formulario.texto'))
            return
        }

        if(!expresionRegular.test(email)) {
            toast.error(t('notifiacion.formulario.email'))
            return
        }

        try {
            axios.post('https://woombat-general.azurewebsites.net/api/send_email?code=gQINMXkaynyL7uwN9PGA8Or72qA1n9YbE7Mb6HWKu/afpAdidkav3w==', {
                    "correo_emisor": "info@woombatcg.com",
                    "correo_receptor": "admin@woombatcg.com",
                    "asunto": "Contacto mediante el formulario de la pagina web",
                    "cuerpo": `
                            <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 0">
                                        <img style="padding: 0; display: block" src="https://woombatcg.s3.us-west-1.amazonaws.com/Woombatcg.png" width="100%">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #1b1e35; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #ce6d34; margin: 0 0 7px">Hola Woombat!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                                Soy <span style="font-weight: bold;">${name}</span>, en nombre de la compañia <span style="font-weight: bold;">${company}</span>, mi cargo es <span style="font-weight: bold;">${rank}</span>,
                                                el motivo de mi mensaje es el siguiente:
                                            </p>
                                            <p style="margin: 10px 2px; font-size: 15px">
                                                ${message}
                                            </p>
                                            <p style="margin: 5px 2px; font-size: 15px">
                                                Espero tu pronta respuesta, puedes contactarme a <span style="font-weight: bold;"> <a href="mailto:${email}">${email}</a>.</span>
                                            </p>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Woombat Consulting Group 2021 &copy;</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        `
                }
            )
            toast.success(t('notifiacion.formulario.enviado'))
            setFormData({
                name: '',
                company: '',
                email: '',
                rank: '',
                message: ''
            })
            setEncender(!encender)
        } catch (error) {
            console.log(error)
        }
        
    }

    return ( 
        <form
            onSubmit={ handleSubmit }
        >
            <label aria-disabled='true'>
                <input 
                    type="text"
                    name="name"
                    className='inputs' 
                    placeholder={t("contacto.formulario.nombre")} 
                    value={ name }
                    onChange={ handleChange }
                />
            </label>
            <label>
                <input 
                    type="text"
                    className='inputs' 
                    name="company"
                    placeholder={t("contacto.formulario.empresa")} 
                    value={ company }
                    onChange={ handleChange }
                />
            </label>
            <label>
                <input 
                    type="text"
                    name="email"
                    className='inputs' 
                    placeholder={t("contacto.formulario.email")} 
                    value={ email }
                    onChange={ handleChange }
                />
            </label>
            <label>
                <input 
                    type="text"
                    name="rank"
                    className='inputs' 
                    placeholder={t("contacto.formulario.cargo")} 
                    value={ rank }
                    onChange={ handleChange }
                />
            </label>
            <label>
                <textarea 
                    name="message"
                    className='area-text' 
                    placeholder={t("contacto.formulario.texto")} 
                    value={ message }
                    onChange={ handleChange }
                />
            </label>
            <div>
            <button disabled={!encender} className={encender ? 'btn-active' : "btn-none"}>{t("contacto.formulario.input")}</button>
            </div>
        </form>
     );
}
 
export default Form;