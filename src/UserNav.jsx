import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
export function UserNav(props) {
  let [search, setSearch] = useState("");
  let  setProfileNavigate = useNavigate();
  let GotoProfile = () =>{
    setProfileNavigate("/sginUp/user/personalInfo/Professional/user_home/profile")
  }
  return (
    <>
      <Navbar style={{ color: "white" }} fill variant="tabs" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bolder fs-4 text-white">
            {" "}
            <i class="fa-solid fa-briefcase"></i> chance
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5 ">
              <Nav.Link className="text-white me-5" href="/sginUp/user/personalInfo/Professional/user_home" >
                EXPLORE
              </Nav.Link>
              <Nav.Link className="text-white me-5" href="/sginUp/user/personalInfo/Professional/Saved">
                SAVED
              </Nav.Link>
              <Nav.Link className="text-white me-5" href="/sginUp/user/personalInfo/Professional/Applications">
                APPLICATION
              </Nav.Link>

            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by job tilte"
              className="me-1"
              aria-label="Search"
              onChange={e =>{
                setSearch(e.target.value);
                props.searchFillter(search);
              }}
            />
            <Button variant="outline-warning"  className="me-5">Search</Button>
            <i className="fa-solid fa-circle-user fs-1 fw-bolder" style={{margin :'0px' , cursor:"pointer"}} onClick={GotoProfile}></i> 
          </Form>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>

        

    </>
  );
}
