import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import sticker from "./images/Vector.png";
import sticker_2 from "./images/sticker_8.png";
import sticker_3 from "./images/sticker_11.png";
import Form from "react-bootstrap/Form";
import { DefaultNav } from "./defaultNav";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { MyFooter } from "./Footer";
export function DefaultHome() {
  let navigate_1 = useNavigate();
  let goToSginUp = () => {
    navigate_1("/sginUp");
  };
  let navigate_2 = useNavigate();
  let goToSginIn = () => {
    navigate_2("/sginIn");
  };
  return (
    <>
      <DefaultNav />
      <Container fluid>
        <Row id="home">
          <Col className="col-12  col-sm-12 col-md-6 col-lg-6 col-xlg-6 ">
            <div className="fw-bolder fs-1 text-light mt-5 ms-5 pt-5 ps-5">
              {" "}
              GIVE CHANCE TO LINK BETWEEN THE CAMPANIES AND PROGRAMMERS.
            </div>
            <div className="fw-bolder fs-1 text-light mt-5 ms-5 ps-5">
              <Button
                className="text-white me-2"
                onClick={goToSginUp}
                variant="outline-warning"
              >
                SGIN UP
              </Button>
              <Button className="text-white" variant="outline-warning" onClick={goToSginIn}>
                SGIN IN
              </Button>
            </div>
          </Col>
          <Col className="col-12  col-sm-12 col-md-6 col-lg-6 col-xlg-6 ">
            <img
              src={sticker}
              className="mt-5 ms-5"
              style={{ height: "80vh", width: "80%" }}
            />
          </Col>
        </Row>
        <Row id="about" className=" bg-light" style={{ height: "100vh" }}>
          <Col className="col-12 col-sm-12 d-none d-md-block col-md-6 col-lg-6 col-xlg-6 ">
            <img
              src={sticker_3}
              className="mt-5 ms-5"
              style={{ height: "80vh", width: "80%" }}
            />
          </Col>
          <Col className="col-12  col-sm-12 col-md-6 col-lg-6 col-xlg-6 text-center mt-5">
            <div className="fw-bolder fs-3 ">ABOUT OUR COMMUNITY</div>
            <div className="fs-5 mt-2">
              Every day someone is looking for a job. Whether that person is a
              recent graduate, a person laid-off from work, or a person that
              wants a different job, their diligent search turns into a
              carefully planned search for employment. It is important that a
              person knows how to search effectively for a job.
            </div>
            <div className="fs-5 mt-3">
              Every resume you send out to a potential employer should be
              accompanied by a tailored, well-crafted cover letter. Most hiring
              managers will review cover letters to decide whether it’s worth
              their time to read the attached resumes. Thus, your cover letter
              is your “teaser,” the all-important first introduction that
              explains why you are the right candidate for the job.
            </div>
          </Col>
        </Row>
        <Row id="Contact" style={{ height: "100vh" }}>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 text-center mt-5">
            <div className="fw-bolder fs-3 mb-5 text-white">CONTACT US</div>
            <Form>
              <InputGroup className="mb-4">
                <InputGroup.Text className="fw-bolder">Name</InputGroup.Text>
                <Form.Control aria-label="name" placeholder="Your Name" />
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1" className="fw-bolder">
                  Email
                </InputGroup.Text>
                <Form.Control
                  placeholder="Enter Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroup.Text id="basic-addon1" className="fw-bolder">
                  comment
                </InputGroup.Text>
                <Form.Control as="textarea" rows={5} />
              </InputGroup>

              <Button
                variant="warning"
                type="submit"
                className="text-white fw-bolder "
              >
                Send
              </Button>
            </Form>
          </Col>
          <Col className="col-12 col-sm-12 d-none d-md-block  col-md-6 col-lg-6 col-xlg-6 text-center mt-5">
            <img
              src={sticker_2}
              className="mt-5 ms-5"
              style={{ height: "80vh", width: "80%" }}
            />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}
