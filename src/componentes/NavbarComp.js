import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HiCode } from "react-icons/hi";
function NavbarComp() {
  return (
    <Navbar
      sticky="bottom"
      expand="lg"
      className="navbar fixed-top navbar-light bg-light "
    >
      <Container className="container-fluid">
        <Navbar.Brand id="navbar-brand" href="http://localhost:3000">
          <HiCode />
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Sobre mi</Nav.Link>
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
