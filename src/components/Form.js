//styles
import '../style/form.css'
import { useTranslation } from "react-i18next";

const Form = ({encender}) => {

    const { t } = useTranslation("global");

    return ( 
        <form>
            <label aria-disabled='true'>
                <input className='inputs' placeholder={t("contacto.formulario.nombre")} />
            </label>
            <label>
                <input className='inputs' placeholder={t("contacto.formulario.empresa")} />
            </label>
            <label>
                <input className='inputs' placeholder={t("contacto.formulario.email")} />
            </label>
            <label>
                <input className='inputs' placeholder={t("contacto.formulario.cargo")} />
            </label>
            <label>
                <textarea className='area-text' placeholder={t("contacto.formulario.texto")} />
            </label>
            <div>
            <button disabled={!encender} className={encender ? 'btn-active' : "btn-none"}>{t("contacto.formulario.input")}</button>
            </div>
        </form>
     );
}
 
export default Form;