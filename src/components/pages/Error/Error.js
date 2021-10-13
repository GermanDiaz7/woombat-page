import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import '../../../style/error.css'

const Error = () => {

    const { t } = useTranslation("global")

    const history = useHistory()

    setTimeout(() => {
        history.push('/')
    }, 4000);

    return ( 
        <div className="error">
            <Helmet>
                <title>Woombat Error</title>
            </Helmet>
            <div className="error-container">
                <p className="error-text">{t("error")}</p>
            </div>
        </div>
     );
}
 
export default Error;