import { Container } from "../../../style/Container";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import Header from "../../Header";
import Services from "../../Services";
import Allies from "../../Allies";
import Clients from "../../Clients";
import AboutUs from "../../AboutUs";
import FormSection from "../../FormSection";
import Footer from "../../Footer";

const Home = () => {
  return (
    <Fragment>
        <Helmet>
            <title>Woombat Consulting Group SAS</title>
        </Helmet>
        <Container fluid>
            <Header />
            <Services />
            <Allies />
            <AboutUs />
            <Clients />
            <FormSection />
            <Footer />
        </Container>
    </Fragment>
  );
};

export default Home;
