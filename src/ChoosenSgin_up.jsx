import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background from "./images/sgin_in_2.jpg";
import company from "./images/company.png";
import { useNavigate } from "react-router-dom";
import user from "./images/user.png";
import "./choosen.css";
export function ChooseSgin_up() {
  let navigate_1 = useNavigate();
  let goToSginIN_User = () => {
    navigate_1("/sginUp/user");
  };
  let navigate_2 = useNavigate();
  let goToSginIN_Company = () => {
    navigate_2("/sginUp/company");
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
                  onClick={goToSginIN_Company}
                >
                  Sgin UP
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
                  onClick={goToSginIN_User}
                >
                  Sgin UP
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
