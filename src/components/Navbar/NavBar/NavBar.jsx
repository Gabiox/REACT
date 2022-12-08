import React, { useState } from 'react'; 
import { Container, Navbar, Nav } from 'react-bootstrap'
import ItemListContainer from '../../../containers/ItemListContainer/ItemListContainer'
import './NavBar.css'

const NavBar = () => {
  const [useState, setCount] = useState(0)

    return(
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand class='brand' href="#home"><img class='logo' src="/public/img/Carcomany.jpg" alt="Carcomany" /></Navbar.Brand>
        <a class='Titulo' href="#home"><h2 class='Titulo'>Carcomany</h2></a>
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

    </div>
  
    )
}
export default NavBar
