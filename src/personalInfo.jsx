import { Container, Row ,Col} from "react-bootstrap";

export default function user_info() {
  return (
    <>
      <Container fluid className="bg-light">
        <Row>
          <Col className="text-center fw-bolder fs-1 mt-5" style={{color : '#00425A'}}>
            all rights resolved <i class="fa-regular fa-copyright"></i>
          </Col>
        </Row>
        <Row>
          <Col className="text-center fw-bolder fs-1 mt-2" style={{color : '#00425A'}}>
            <span className="me-2">
              <b>
                <i class="fa-brands fa-square-facebook"></i>
              </b>
            </span>
            <span className="me-2">
              <b>
                <i class="fa-brands fa-square-whatsapp"></i>
              </b>
            </span>
            <span className="me-2" >
              <b>
                <i class="fa-brands fa-square-twitter"></i>
              </b>
            </span>
            <span className="me-2">
              <b>
                <i class="fa-brands fa-telegram"></i>
              </b>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}




