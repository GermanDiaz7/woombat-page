import { useTranslation } from "react-i18next";
import { Container } from "../style/Container";

import '../style/about.css';

import about from '../img/about-us/startup-launch.png'

const AboutUs = () => {

    const { t } = useTranslation("global")

    return ( 
        <div className="about">
            <h3 className="allies-subtitle">{t("nosotros.subtitulo")}</h3>
            <h2 className="about-title">{t("nosotros.titulo")}</h2>
            <Container>
                <div className="about-content">
                    <div className="about-content-left">
                        <div className="about-content-left-mision">
                            <h2 className="about-content-left-mision-title">{t("nosotros.mision.titulo")}</h2>
                            <p className="about-content-left-mision-text">{t("nosotros.mision.texto")}</p>
                        </div>
                        <div className="about-content-left-vision">
                            <h2 className="about-content-left-vision-title">{t("nosotros.vision.titulo")}</h2>
                            <p className="about-content-left-vision-text">{t("nosotros.vision.texto")}</p>
                        </div>
                    </div>
                    <img src={about} alt="About Us" className="about-content-right"/>
                </div>
            </Container>
        </div>
     );
}
 
export default AboutUs;