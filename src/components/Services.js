import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

//styles
import "../style/services.css";

const Services = () => {
  const { t } = useTranslation("global");

  return (
    <div className="services">
      <Container>
        <div class='services-container'>
          <div className='services-info left'>
              <div>
                <h2>{t("servicios.consultoria.titulo")}</h2>
              </div>
          </div>

          <div className='services-info rigth'>
              <h1>hola peter</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
