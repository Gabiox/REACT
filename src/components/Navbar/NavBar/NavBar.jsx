import { useState } from 'react'; 
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import CartWidget from '../../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = (  ) => {
  const [count, setCount] = useState(0)
 

  const addCart = () => {
    setCount(count + 1)
}

    return(
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand class='brand' href="#"><img class='logo' src="/public/img/Carcomany.jpg" alt="Carcomany" /></Navbar.Brand>
        <a class='Titulo' href="#"><h2 class='Titulo'>Carcomany</h2></a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
            to="/categoria/Autos"
            >
              Autos
           </Nav.Link>
           <Nav.Link className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
            to="/categoria/Motos"
            >
              Motos
           </Nav.Link>

            {/* <Link to="/autos">Autos </Link>
            <Link to="/motos">Motos </Link>   */}
          </Nav>
          <CartWidget addCart = { addCart } /> 
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    </div>
  
    )
}
export default NavBar
