import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

//styles
import '../style/services.css'

const Services = () => {

    const { t } = useTranslation("global")


    return ( 
        <div className='services'>
            <h2 className="services-title">{t("servicios.titulo")}</h2>
                <Container>
                    <div className='services-container'>
                        <div className='services-container-section'>
                            <div className='section section-left'><h1>{t("servicios.consultoria.titulo")}</h1></div>
                            <div className='section section-right'>{t("servicios.consultoria.texto")}</div>
                        </div>
                    </div>
                </Container>
        </div>
     );
}
 
export default Services;