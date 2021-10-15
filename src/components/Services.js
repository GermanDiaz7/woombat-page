import { Container } from "../style/Container";
import { useTranslation } from "react-i18next";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";

//styles
import "../style/services.css";
import { useState } from "react";

const Services = () => {
  const { t } = useTranslation("global");

  const[consultoria, setConsultoria] = useState(false)
  const[descriptiva, setDescriptiva] = useState(false)
  const[avanzada, setAvanzada] = useState(false)
  const[artificial, setArtificial] = useState(false)
  const[nube, setNube] = useState(false)


  const consulting = () => {
    if(!consultoria) {
      setConsultoria(true)
      setDescriptiva(false)
      setAvanzada(false)
      setArtificial(false)
      setNube(false)
    }else{
      setConsultoria(false)
    }
  }

  const descriptive = () => {
    if(!descriptiva) {
      setConsultoria(false)
      setDescriptiva(true)
      setAvanzada(false)
      setArtificial(false)
      setNube(false)
    }else {
      setDescriptiva(false)
    }
  }

  const advanced = () => {
    if(!avanzada) {
      setAvanzada(false)
      setConsultoria(false)
      setDescriptiva(false)
      setAvanzada(true)
      setArtificial(false)
      setNube(false)
    }else {
      setAvanzada(false)
    }
  }

  const artificialy = () => {
    if(!artificial) {
      setConsultoria(false)
      setDescriptiva(false)
      setAvanzada(false)
      setArtificial(true)
      setNube(false)
    }else {
      setArtificial(false)
    }
  }

  const cloud = () => {
    if(!nube) {
      setConsultoria(false)
      setDescriptiva(false)
      setAvanzada(false)
      setArtificial(false)
      setNube(true)
    }else {
      setNube(false)
    }
  }

  return (
    <div className="services" id='serivices'>
      <Container>
        <div className='services-container'>
          <div className='services-info left'>
              <div className='container'>
                <div onClick={consulting}>
                  <div className={!consultoria ? "desbord-none" : "desbord-block"}>
                    <div className='card-services-deploy'>
                      <h2 className='card'>{t("servicios.consultoria.titulo")}</h2>
                      <BsChevronDown />
                    </div>
                    <p className='texto'>{t("servicios.consultoria.texto")}</p>
                  </div>
                  <div className={!consultoria ? "desbord-block" : "desbord-none"}>
                    <div className='card-services-deploy'>
                      <h2 className="card">{t("servicios.consultoria.titulo")}</h2>
                      <BsChevronUp />
                    </div>
                  </div>
                </div>


                <div onClick={descriptive}>
                  <div className={!descriptiva ? "desbord-none" : "desbord-block"}>
                    <div className='card-services-deploy'>
                      <h2 className='card'>{t("servicios.analitica-descriptiva.titulo")}</h2>
                      <BsChevronDown />
                    </div>
                    <p className='texto'>{t("servicios.analitica-descriptiva.texto")}</p>
                  </div>
                  <div className={!descriptiva ? "desbord-block" : "desbord-none"}>
                    <div className='card-services-deploy'>
                      <h2 className="card">{t("servicios.analitica-descriptiva.titulo")}</h2>
                      <BsChevronUp />
                    </div>
                  </div>
                </div>


                <div onClick={advanced}>
                  <div className={!avanzada ? "desbord-none" : "desbord-block"}>
                    <div className='card-services-deploy'>
                      <h2 className='card'>{t("servicios.analitica-avanzada.titulo")}</h2>
                      <BsChevronDown />
                    </div>
                    <p className='texto'>{t("servicios.analitica-avanzada.texto")}</p>
                  </div>
                  <div className={!avanzada ? "desbord-block" : "desbord-none"}>
                    <div className='card-services-deploy'>
                      <h2 className="card">{t("servicios.analitica-avanzada.titulo")}</h2>
                      <BsChevronUp />
                    </div>
                  </div>
                </div>


                <div onClick={artificialy}>
                  <div className={!artificial ? "desbord-none" : "desbord-block"}>
                    <div className='card-services-deploy'>
                      <h2 className='card'>{t("servicios.ingeligencia-artificial.titulo")}</h2>
                      <BsChevronDown />
                    </div>
                    <p className='texto'>{t("servicios.ingeligencia-artificial.texto")}</p>
                  </div>
                  <div className={!artificial ? "desbord-block" : "desbord-none"}>
                    <div className='card-services-deploy'>
                      <h2 className="card">{t("servicios.ingeligencia-artificial.titulo")}</h2>
                      <BsChevronUp />
                    </div>
                  </div>
                </div>


                <div onClick={cloud}>
                  <div className={!nube ? "desbord-none" : "desbord-block"}>
                    <div className='card-services-deploy'>
                      <h2 className='card'>{t("servicios.consultoria-nube.titulo")}</h2>
                      <BsChevronDown />
                    </div>
                    <p className='texto'>{t("servicios.consultoria-nube.texto")}</p>
                  </div>
                  <div className={!nube ? "desbord-block" : "desbord-none"}>
                    <div className='card-services-deploy'>
                      <h2 className="card">{t("servicios.consultoria-nube.titulo")}</h2>
                      <BsChevronUp />
                    </div>
                  </div>
                </div>


              </div>
          </div>

          <div className='services-info rigth'>
            <div className='container'>
              <p className='subtitle'>{t("servicios.subtitulo")}</p>
              <h2 className='title'>{t("servicios.titulo")}</h2>

              <p className='text-dark'>{t("servicios.informacion")}</p>
              <br />
              <p className='text-dark'>{t("servicios.subinformacion")}</p>
              <br />
              <a className='btn-services' href="#contact">{t("servicios.boton")}</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
