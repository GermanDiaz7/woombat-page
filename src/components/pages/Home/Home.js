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
import BurgerMenu from "../../BurgerMenu"

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

//styles
import "../../../style/home.css"
import Navbar from "../../NavBar";

import { useEffect, useRef, useState } from "react";
const Home = () => {


    
  const [bgState, setBgState] = useState(false)


  useEffect(() => {
    const handleScrool = () => {
        const div = divRef.current
        const {y} = div.getBoundingClientRect()

        if(y < -77) {
          setBgState(true)
        }else{
            setBgState(false)
        }
    }

    window.addEventListener('scroll' , handleScrool)

    return () => {
      window.removeEventListener('scroll', handleScrool)
    }
  }, [])

  const divRef = useRef()


  return (
    <Fragment>
        <Helmet>
            <title>Woombat Consulting Group SAS</title>
        </Helmet>
        <Container fluid>
            <div className="icons-container">
              <a href="https://www.linkedin.com/company/woombat-consulting-group-s-a-s/" target="__blank" className="div-content"><FaLinkedinIn className="icon-component" /></a>
            </div>
            <div className="icons-container-two">
              <a href="https://www.facebook.com/woombatcg/" target="__blank" className="div-content"><FaFacebookF className="icon-component" /></a>
            </div>
            <div className="icons-container-three">
              <a href="https://www.instagram.com/woombatcg/" target="__blank" className="div-content"><FaInstagram className="icon-component" /></a>
            </div>
            <BurgerMenu />
            <Navbar bgState={bgState}/>
            <div ref={divRef}></div>
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
