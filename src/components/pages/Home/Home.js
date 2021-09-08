import { Fragment } from "react";
import { Helmet } from 'react-helmet';

// Components
import Header from "../../Header";

const Home = () => {

    return ( 
        <Fragment>
            <Helmet>
                <title>Woombat Consulting Group SAS</title>
            </Helmet> 
            <Header />
        </Fragment>
     );
}
 
export default Home;