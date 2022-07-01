import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Carrito from './Carrito'

function BarraNavegacion() {

    
    return (
        <>
          <Navbar bg="danger" variant="dark">
            <Container>
            <Navbar.Brand href="/">Autoservicio Mas</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/agregarproducto">Agregar Producto</Nav.Link>
            </Nav>
            <Carrito/>
            </Container>
        </Navbar>
        </>
    )
}

export default BarraNavegacion