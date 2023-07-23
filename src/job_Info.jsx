
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "./test.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
export function job_Info(props) {
    const userName= props.userName;
    
    return (
      <>
        <Container fluid>
        <Row className=" text-white mt-1" style={{height :'1rem'}}>
          <Col className=" Col-10 fw-bolder fs-3 ms-4 mt-2">
            <i class="fa-solid fa-briefcase"></i> chance
          </Col>
          <Col className="Col-2 me-4 text-end ">
            <i class="fa-solid fa-circle-user fs-1 fw-bolder"></i> <div>{userName}</div>
          </Col>
        </Row>
          <Row className="bg-light mt-5 fs-2  pt-2 text-center">
            <Col className="text-end " style={{color: "#ffc107"}}>
              <span
                style={{ border: " 1px solid", borderRadius: "50%" , background:"#ffc107" }}
                className="ps-4 pe-4 me-2 text-light fw-bolder "
              >
                1
              </span>
              <br></br>
              <span className="fs-5">
                <i class="fa-solid fa-check"></i> Step 1
              </span>
            </Col>
            <Col style={{color: "#ffc107"}}>
              <div className="divider2">
              <span
                style={{ border: " 1px solid", borderRadius: "50%" , background:"#ffc107" }}
                className="ps-4 pe-4 me-2 text-light fw-bolder "
              >
                2
              </span>
              <br></br>
              </div>
              <span className="fs-5">
              <i class="fa-solid fa-check"></i> Personal Info
              </span>
            </Col>
            <Col className="text-start">
            <span
                style={{ border: " 1px solid", borderRadius: "50%" }}
                className="ps-4 pe-4 me-2 fw-bolder"
              >
                3
              </span>
              <br></br>
              <span className="fs-5">
                Job Info
              </span>
            </Col>
          </Row>
          <Row className="bg-light text-center">
              <div className="fw-bolder fs-2 mt-3" >General Info</div>
              <div>Tell companies more about yourself.</div>
              <Form style={{width:"50%" , margin:"4px auto" , border: " .5px solid gray" }} className="text-start mt-4 p-4">
                <span className="fw-bold fs-5 ms-5 mb-5">Personal Info</span>
                  <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Birth Year </Form.Label>
                    <Form.Control className="w-75" type="number" id="tentacles" name="tentacles" min="1980" max="2002" required />
                </Form.Group>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Nationality </Form.Label>
                    <Form.Select className="w-75" aria-label="Default select example" required>
                      <option disabled selected>select your Nationality</option>
                      <option value="Egyptian">Egyptian</option>
                      <option value="other">Other</option>
                    </Form.Select>
                
                
                </Form.Group>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Gender </Form.Label>
                    {['radio'].map((type) => (
          <div key={`inline-${type}`} className="w-75 mt-2" >
            <Form.Check
              inline
              label="Male"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Female"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
                </Form.Group>
              
                <span className="fw-bold fs-5 ms-5 mb-5">Your Location</span>
              
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Country </Form.Label>
                    <Form.Select className="w-75" aria-label="Default select example" required>
                      <option disabled selected value="Egypt">Egypt</option>
                    </Form.Select>
                </Form.Group>
  
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">City </Form.Label>
                    <Form.Select className="w-75" aria-label="Default select example" required>
                      <option value="select your City" selected>select your City</option>
                      <option value="Cairo">Cairo</option>
                      <option value="Alexandria">Alexandria</option>
                      <option value="Shubra El-Kheima">Shubra El-Kheima</option>
                      <option value="Giza">Giza</option>
                      <option value="Port Said">Port Said</option>
                      <option value="Suez">Suez</option>
                      <option value="Luxor">Luxor</option>
                      <option value="al-Mansura">al-Mansura</option>
                      <option value="El-Mahalla El-Kubra">El-Mahalla El-Kubra</option>
                      <option value="Asyut">Asyut</option>
                      <option value="Ismailia">Ismailia</option>
                      <option value="Fayyum">Fayyum</option>
                      <option value="Zagazig">Zagazig</option>
                      <option value="Aswan">Aswan</option>
                      <option value="Damietta">Damietta</option>
                      <option value="Damanhur">Damanhur</option>
                      <option value="Minoufia">Minoufia</option>
                      <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
                      <option value="Banha">Banha</option>
                      <option value="6th of October City">6th of October City</option>
                      <option value="Hurghada">Hurghada</option>
                      <option value="Sohag">Sohag</option>
                      <option value="Qena">Qena</option>
                      <option value="Beni Suef">Beni Suef</option>
                      <option value="al-Minya">al-Minya</option>
                      <option value="Marsa Matruh">Marsa Matruh</option>
                      <option value="Beheira">Beheira</option>
                    </Form.Select>
                </Form.Group>
               
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Educational level </Form.Label>
                    <Form.Select className="w-75" aria-label="Default select example" required>
                      <option disabled selected>select your Educational level </option>
                      <option value="B-S">Bachelor's Student</option>
                      <option value="B-D">Bachelor's Degree</option>
                      <option value="M-D">Master's Degree</option>
                      <option value="PHD">PHD Degree</option>
                    </Form.Select>
                    </Form.Group>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Faculty </Form.Label>
                    <Form.Select className="w-75" aria-label="Default select example" required>
                      <option disabled selected>select your Faculty</option>
                      <option value="FCI">Faculty of Computer & Information</option>
                      <option value="FCDS">Faculty of Computers & Data Science</option>
                      <option value="FCAI">Faculty of Computers & Artificial Intelligence</option>
                      <option value="FAI">Faculty of Artificial Intelligence</option>
                      <option value="FE">Faculty of Engineering</option>
                      <option value="FEE">Faculty of Electronic Engineering</option>
                      <option value="FS">Faculty of Science</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Department </Form.Label>
                    <Form.Select className="w-75" aria-label="Default select example" required>
                      <option disabled selected>select your Department</option>
                      <option value="CS">Computer Science</option>
                      <option value="IS">Information Science</option>
                      <option value="IT">Information Technology</option>
                      <option value="other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Graduation Year </Form.Label>
                    <Form.Control className="w-75" type="number" id="tentacles" name="tentacles" min="2000" max="2024" required />
                </Form.Group>
                <span className="fw-bold fs-5 ms-5 mb-5">Contact Info</span>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <Form.Label className="me-2 pt-2">Phone Number</Form.Label>
                    <Form.Control className="w-75" type="text" id="tentacles" name="tentacles" min="1980" max="2002" required />
                </Form.Group>
                <Col md={{ offset:5 }}>
                  <Button style={{background: "#ffc107" , border: " 1px solid"}} className="w-25" type="submit" >
                    Save
                  </Button>
                </Col>
              </Form>
          </Row>
        </Container>
      </>
    );
}