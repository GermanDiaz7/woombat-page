import { useTranslation } from "react-i18next";
import { Container } from "../style/Container";

import '../style/about.css';

import about from '../img/about-us/bg.jpeg'

const AboutUs = () => {

    const { t } = useTranslation("global")

    return ( 
        <div className="about">
            <Container>
                <div className="about-content">
                    <div className="about-content-left">
                        <div className="about-title">
                            <p className="subtitle">{t("nosotros.subtitulo")}</p>
                            <h2 className="title">{t("nosotros.titulo")}</h2>
                            <p className="text">{t("nosotros.texto")}</p>
                        </div>
                        <div className="about-info">
                            <h3 className="title line-left">{t("nosotros.mision.titulo")}</h3>
                            <p className="text">{t("nosotros.mision.texto")}</p>
                        </div>
                        <div className="about-info">
                            <h3 className="title line-left">{t("nosotros.vision.titulo")}</h3>
                            <p className="text">{t("nosotros.vision.texto")}</p>
                        </div>
                    </div>
                    <div className="about-content-right">
                        <img src={about} alt="About Woombat" />
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default AboutUs;