//components
import { Container } from "../style/Container";
import Navbar from "./NavBar";
import Presentation from "./Presentation";
import BurgerMenu from "./BurgerMenu";

//styles
import '../style/header.css'

const Header = () => {

    return ( 
        <div className='bg-Image'>
            <div className='bg'>
            <Container>
                <Navbar />
                <BurgerMenu />
                <Presentation />
            </Container>
            </div>
        </div>
     );
}
 
export default Header;