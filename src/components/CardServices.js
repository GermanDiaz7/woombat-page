import { useTranslation } from "react-i18next";

const CardServices = ({ref}) => {

    const { t } = useTranslation("global");

    return ( 
        <div>
            <p>{t("servicios.consultoria.texto")}</p>
        </div>
     );
}
 
export default CardServices;