//components
import { Container } from "../style/Container";
// import Navbar from "./NavBar";
import Presentation from "./Presentation";

//styles
import '../style/header.css'

const Header = () => {

    return ( 
        <div className='bg-Image'>
            <div className='bg'>
            <Container>
                {/* <BurgerMenu /> */}
                <Presentation />
            </Container>
            </div>
        </div>
     );
}
 
export default Header;