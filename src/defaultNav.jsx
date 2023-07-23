import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink } from "react-router-hash-link";
export function DefaultNav() {
  return (
    <>
      <Navbar style={{ color: "white" }} variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bolder fs-4 text-white">
            {" "}
            <i class="fa-solid fa-briefcase"></i> chance
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5 ">
              <Nav.Link className="text-white me-5" href="/">
                HOME
              </Nav.Link>
              <HashLink
                className="text-white me-5 mt-2"
                style={{
                  textDecoration: "none",
                }}
                to="/#about"
              >
                ABOUT
              </HashLink>
              <HashLink
                className="text-white me-5 mt-2"
                style={{
                  textDecoration: "none",
                }}
                to="/#Contact"
              >
                CONTACT
              </HashLink>
              <Nav.Link
                className="text-white me-2"
                style={{
                  border: "1.5px solid gold",
                  background: "gold",
                  borderRadius: "15px",
                }}
                href="/sginUp"
              >
                SGIN UP
              </Nav.Link>
              <Nav.Link
                className="text-white "
                style={{
                  border: "1.5px solid gold",
                  opacity: "0.5",
                  borderRadius: "15px",
                }}
                href="/sginIn"
              >
                SGIN IN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
