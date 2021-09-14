import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

//images
import bigdata from "../img/services/bigData.png";
import analitic from "../img/services/analitic.png";
import avanced from "../img/services/avanced.png";
import inteligence from "../img/services/inteligence.png";
import cloud from "../img/services/cloud.png";

//styles
import "../style/services.css";

const Services = () => {
  const { t } = useTranslation("global");

  return (
    <div className="services">
      <h2 className="services-title">{t("servicios.titulo")}</h2>
      <Container>
        <div className="services-container">
          <div className="services-container-section">
            <div className="section section-left">
              <img className="image" src={bigdata} alt="big data" />
            </div>
            <div className="section section-right">
              <h1>{t("servicios.consultoria.titulo")}</h1>
              {t("servicios.consultoria.texto")}
            </div>
          </div>

          <div className="services-container-section">
            <div className="section section-right">
              <h1>{t("servicios.analitica-descriptiva.titulo")}</h1>
              {t("servicios.analitica-descriptiva.texto")}
            </div>
            <div className="section section-left">
              <img className="image" src={analitic} alt="big data" />
            </div>
          </div>

          <div className="services-container-section">
            <div className="section section-left">
              <img className="image" src={avanced} alt="big data" />
            </div>
            <div className="section section-right">
              <h1>{t("servicios.analitica-avanzada.titulo")}</h1>
              {t("servicios.analitica-avanzada.texto")}
            </div>
          </div>

          <div className="services-container-section">
            <div className="section section-right">
              <h1>{t("servicios.ingeligencia-artificial.titulo")}</h1>
              {t("servicios.ingeligencia-artificial.texto")}
            </div>
            <div className="section section-left">
              <img className="image" src={inteligence} alt="big data" />
            </div>
          </div>

          <div className="services-container-section">
            <div className="section section-left">
              <img className="image" src={cloud} alt="big data" />
            </div>
            <div className="section section-right">
              <h1>{t("servicios.consultoria-nube.titulo")}</h1>
              {t("servicios.consultoria-nube.texto")}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
