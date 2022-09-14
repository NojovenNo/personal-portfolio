import { Container, Nav, Navbar } from "react-bootstrap";
import { HiCode } from "react-icons/hi";
function NavbarComp() {
  return (
    <Navbar
      collapseOnSelect
      sticky="bottom"
      fixed="top"
      expand="lg"
      className="navbar navbar-expand-lg navbar-light bd-navbar sticky-top"
      // className="navbar navbar-light bg-light"
    >
      <Container>
        <Navbar.Brand id="navbar-brand" href="http://localhost:3000">
          <HiCode />
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Sobre mi / Tecnologias</Nav.Link>
            <Nav.Link href="#pricing">Portafolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
