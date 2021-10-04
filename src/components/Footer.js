import { Container } from '../style/Container';
import { useTranslation } from "react-i18next";
//styles
import '../style/footer.css'

const Footer = () => {

    const { t } = useTranslation("global");

    return ( 
        <div className='footer-content'>
            <Container>
                <div className='content-grid'>
                    <div className='footer div1'>
                        <h5>{t("contacto.datos.email")}</h5>
                        <h5>{t("contacto.datos.telefono")}</h5>
                        <h5>{t("contacto.datos.Direccion")}</h5>
                        <h5>{t("contacto.datos.ciudad")}</h5>
                    </div>

                    <div className='footer div2'>
                        <a href={t("informacion.politica.url")} target="_blank" rel="noopener noreferrer">{t("informacion.politica.privacidad")}</a>
                        <h4>{t("navegacion.servicios")}</h4>
                        <a href='#serivices'>{t("servicios.consultoria.titulo")}</a>
                        <a href='#serivices'>{t("servicios.analitica-descriptiva.titulo")}</a>
                        <a href='#serivices'>{t("servicios.analitica-avanzada.titulo")}</a>

                    </div>

                    <div className='footer div3'>
                        <a href='#serivices'>{t("servicios.ingeligencia-artificial.titulo")}</a>
                        <a href='#serivices'>{t("servicios.consultoria-nube.titulo")}</a>
                        <h4>{t("navegacion.nosotros")}</h4>
                        <a href='#about'>Mision</a>
                        <a href='#about'>Vision</a>
                    </div>

                    <div className='footer div4'>
                        <a href='#clients'>{t("navegacion.clientes")}</a>
                        <a href='#contact'>{t("navegacion.contacto")}</a>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default Footer;