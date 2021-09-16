import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import '../style/allies.css';
import '../style/slider.css';

import cloudera from '../img/allies/cloudera.png';
import azure from '../img/allies/azure2.png';
import elastic from '../img/allies/elastic.png';
import confludent from '../img/allies/confludent.png';

const Allies = () => {

    const { t } = useTranslation("global")

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true
      };

    return ( 
        <div className="allies" id="allies">
            <Container>
                <p className="subtitle text-center">{t("aliados.subtitulo")}</p>
                <h2 className="title text-center">{t("aliados.titulo")}</h2>
                <div className="allies-content">
                    <div className="allies-content-allie">
                        <img src={cloudera} alt="Cloudera" />
                    </div>

                    <div className="allies-content-allie">
                        <img src={azure} alt="Azure" />
                    </div>

                    <div className="allies-content-allie">
                        <img src={elastic} alt="Elastic" />
                    </div>

                    <div className="allies-content-allie">
                        <img src={confludent} alt="Confludent" />
                    </div>
                </div>
                <Slider {...settings} className="slider">
                    <img src={cloudera} alt="Cloudera" />
                    <img src={azure} alt="Azure" />
                    <img src={elastic} alt="Elastic" />
                    <img src={confludent} alt="Confludent" />
                </Slider>
            </Container>
        </div>
     );
}
 
export default Allies;