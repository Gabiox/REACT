
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Transportes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Camiones">Camiones</Nav.Link>
            <Nav.Link href="#Autos">Autos</Nav.Link>
            <Nav.Link href="#motos">Motos</Nav.Link>
          </Nav>
          <Nav>
            <img class='Carrito' src="public/img/carrito.png" alt="Carrito"></img>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    

    )
}
export default NavBar
