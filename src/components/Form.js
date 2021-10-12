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
                    "asunto": "Mensaje de contacto recibido por Formulario de Contacto WoombatCG",
                    "cuerpo": `Nombre Completo del emisor: ${name}<br><br>Correo Empresarial: ${email}<br><br>Nombre de la Empresa: ${company}<br><br>Cargo: ${rank}<br><br>Mensaje: ${message}`
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