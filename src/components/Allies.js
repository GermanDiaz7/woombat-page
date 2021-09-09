import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

import '../style/allies.css';

import cloudera from '../img/allies/cloudera.png';
import azure from '../img/allies/azure.png';
import elastic from '../img/allies/elastic.png';
import confludent from '../img/allies/confludent.png';

const Allies = () => {

    const { t } = useTranslation("global")

    return ( 
        <div className="allies">
            <h3 className="allies-subtitle">{t("aliados.subtitulo")}</h3>
            <h2 className="allies-title">{t("aliados.titulo")}</h2>
                <Container>
                    <div className="allies-content">
                        <div className="allies-content-img">
                            <img src={cloudera} alt="Cloudera" />
                        </div>
                        <div className="allies-content-img">
                            <img src={azure} alt="Azure" />
                        </div>
                        <div className="allies-content-img">
                            <img src={elastic} alt="Elastic" />
                        </div>
                        <div className="allies-content-img">
                            <img src={confludent} alt="Confludent" />
                        </div>
                    </div>
                </Container>
        </div>
     );
}
 
export default Allies;