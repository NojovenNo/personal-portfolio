import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaRssSquare } from "react-icons/fa";
function NavbarComp() {
  return (
    <Navbar
      sticky="bottom"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand id="navbar-brand" href="http://localhost:3000">
          <FaRssSquare />
          Prueba
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Biografia</Nav.Link>
            <Nav.Link href="#pricing">Tecnologias</Nav.Link>
            <NavDropdown title="Projectos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project #1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project #2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project #3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
