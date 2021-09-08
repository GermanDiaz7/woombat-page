import Container from "../../../style/Container";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

//styles css
import "../../../style/Header.css";

// Components
import Header from "../../Header";

const Home = () => {
  return (
    <Fragment>
        <div className="bg-Image">
          <div className="bg">
            <Container fluid={false}>
              <Helmet>
                <title>Woombat Consulting Group SAS</title>
              </Helmet>
              <Header />
            </Container>
          </div>
        </div>
    </Fragment>
  );
};

export default Home;
