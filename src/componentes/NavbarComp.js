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
        <Navbar.Brand id="navbar-brand">
          <HiCode />
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>About Me / Technologys</Nav.Link>
            <Nav.Link>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
