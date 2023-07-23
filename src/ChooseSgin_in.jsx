import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background from "./images/sgin_in_2.jpg";
import company from "./images/company.png";
import user from "./images/user.png";
import { useNavigate } from "react-router-dom";
import "./choosen.css";
export function ChooseSgin_in() {
    let navigate_1 = useNavigate();
  let goToSginUP_User = () => {
    navigate_1("/sginIn/user");
  };
  let navigate_2 = useNavigate();
  let goToSginUP_Company = () => {
    navigate_2("/sginIn/company");
  };
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
        }}
      >
        <Row className=" pt-4 pb-4">
          <Col className="col-12  col-sm-12 col-md-6 col-lg-6 col-xlg-6 text-center mt-1 ">
            <Card
              className="cards"
              style={{
                width: "20rem",
                height: "30rem",
                borderRadius: "30px",
                margin: "7% auto",
              }}
            >
              <Card.Img
                variant="top"
                src={company}
                style={{ height: "18rem", borderRadius: "50%" }}
                className="view overlay zoom"
              />

              <hr></hr>
              <Card.Body>
                <Card.Title
                  className="m-1"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  CAMPANIES
                </Card.Title>
                <hr></hr>
                <Button
                  variant="outline-warning"
                  className="mb-3"
                  style={{
                    fontSize: "20px",
                    borderRadius: "10px",
                    fontWeight: "bolder",
                  }}
                  onClick={goToSginUP_Company}
                >
                  Sgin IN
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-12  col-sm-12 col-md-6 col-lg-6 col-xlg-6 text-center mt-1">
            <Card
              className="cards"
              style={{
                width: "20rem",
                height: "30rem",
                borderRadius: "30px",
                margin: "7% auto",
              }}
            >
              <Card.Img
                variant="top"
                src={user}
                style={{ height: "18rem", borderRadius: "50%" }}
                className="view overlay zoom"
              />

              <hr></hr>
              <Card.Body>
                <Card.Title
                  className="m-1"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  USERS
                </Card.Title>
                <hr></hr>
                <Button
                  variant="outline-warning"
                  className="mb-3"
                  style={{
                    fontSize: "20px",
                    borderRadius: "10px",
                    fontWeight: "bolder",
                  }}
                  onClick={goToSginUP_User}
                >
                  Sgin IN
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
