import { Container } from "../../../style/Container";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import Header from "../../Header";
import Allies from "../../Allies";
import Clients from "../../Clients";

const Home = () => {
  return (
    <Fragment>
        <Helmet>
            <title>Woombat Consulting Group SAS</title>
        </Helmet>
        <Container fluid>
            <Header />
            <Clients />
            <Allies />
        </Container>
    </Fragment>
  );
};

export default Home;
