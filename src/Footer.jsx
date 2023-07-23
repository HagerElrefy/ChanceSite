import { Container, Row ,Col} from "react-bootstrap";

export function MyFooter() {
  return (
    <>
      <Container fluid >
        <Row>
          <Col className="text-center fw-bolder fs-4 mt-1 text-light" >
            all rights resolved <i class="fa-regular fa-copyright"></i>
          </Col>
        </Row>
        <Row>
          <Col className="text-center fw-bolder fs-4 mt-1 text-light">
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
