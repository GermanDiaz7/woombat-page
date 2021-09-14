//styles
import '../style/presentation.css'

//translation
import { useTranslation } from "react-i18next";

const Presentation = () => {
    const {t} = useTranslation("global");
  return (
      <div className='presentation-container'>
          <div className='part'>
              <h1>{t("encabezado.titulo")}</h1>
              <h3>{t("encabezado.texto")}</h3>
          </div>
          <div className='part2'>

          </div>
      </div>
  )
};

export default Presentation;
