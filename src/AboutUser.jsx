import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "./test.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export function AboutUser(props) {
  const userName = props.userName;
  const secondName = props.secondName;
  let navigate = useNavigate();
  let [city, setCity] = useState("select your City");
  let [national, setNational] = useState("select your Nationality");
  let [gender, setGender] = useState("");
  let [error_1, setError_1] = useState("");
  let [error_2, setError_2] = useState("");
  let [phone, setPhone] = useState("");
  let [Country , setCountry] = useState("Eygpt");
  let [birthYear, setBirthYear] = useState("");
  //let jobInfoDetails = [birthYear , national , gender , Country ,city, phone];
  let updateCity = (e) => {
    setCity(e.target.value);
    if (city == "select your City") {
      setError_1("");
    }
  };
  let updatePhone = (e) => {
    setPhone(e.target.value);
  };
  let updateGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };
  let updateNational = (e) => {
    setNational(e.target.value);
    if (national == "select your Nationality") {
      setError_2("");
    }
  };
  let updateBirthYear = (e) => {
    setBirthYear(e.target.value);
  };
  let handleSubmit = () => {
    if (
      city != "select your City" &&
      national != "select your Nationality" &&
      birthYear != "" &&
      phone != "" && 
      gender != ""
    ) {
      navigate("/sginUp/user/personalInfo/Professional");
    } else {
      if (city == "select your City") {
        setError_1("Please Select your city!");
      }
      if (national == "select your Nationality") {
        setError_2("Please select your Nationality!");
      }
    }
  };
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
          <Col className="text-end " style={{ color: "#ffc107" }}>
            <span
              style={{
                border: " 1px solid",
                borderRadius: "50%",
                background: "#ffc107",
              }}
              className="ps-4 pe-4 me-2 text-light fw-bolder "
            >
              1
            </span>
            <br></br>
            <span className="fs-5">
              <i class="fa-solid fa-check"></i> Step 1
            </span>
          </Col>
          <Col style={{ color: "#ffc107" }}>
            <div className="divider2">
              <span
                style={{
                  border: " 1px solid",
                  borderRadius: "50%",
                  background: "#ffc107",
                }}
                className="ps-4 pe-4 me-2 text-light fw-bolder "
              >
                2
              </span>
              <br></br>
            </div>
            <span className="fs-5">Personal Info</span>
          </Col>
          <Col className="text-start">
            <span
              style={{ border: " 1px solid", borderRadius: "50%" }}
              className="ps-4 pe-4 me-2 fw-bolder"
            >
              3
            </span>
            <br></br>
            <span className="fs-5">Job Info</span>
          </Col>
        </Row>
        <Row className="bg-light text-center">
          <div className="fw-bolder fs-2 mt-3">General Info</div>
          <div>Tell companies more about yourself.</div>
          <Form
            style={{
              width: "50%",
              margin: "4px auto",
              border: " .5px solid gray",
            }}
            className="text-start mt-4 p-4"
          >
            <span className="fw-bold fs-5 ms-5 mb-5">Personal Info</span>
            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">Your Name</Form.Label>
              <InputGroup className="w-75">
                <Form.Control
                  aria-label="First name"
                  required="required"
                  placeholder={userName}
                  value={userName}
                />
                <Form.Control
                  aria-label="Last name"
                  required="required"
                  placeholder={secondName}
                  value={secondName}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">Birth Year </Form.Label>
              <Form.Control
                onChangeCapture={updateBirthYear}
                className="w-75"
                type="number"
                id="tentacles"
                name="tentacles"
                min="1980"
                max="2002"
                required
              />
            </Form.Group>
            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">Nationality </Form.Label>
              <Form.Select
                className="w-75"
                aria-label="Default select example"
                required
                onChangeCapture={updateNational}
              >
                <option selected value="select your Nationality">
                  select your Nationality
                </option>
                <option value="Egyptian">Egyptian</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
            <p className="text-danger" style={{ marginLeft: "200px" }}>
              {error_2}
            </p>

            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">Gender </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="w-75 mt-2" >
                  <Form.Check
                    required
                    inline
                    label="Male"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value="Male"
                    onClickCapture={updateGender}
                  />
                  <Form.Check
                    required
                    inline
                    label="Female"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value="Female"
                    onClickCapture={updateGender}
                  />
                </div>
              ))}
            </Form.Group>
            <span className="fw-bold fs-5 ms-5 mb-5">Your Location</span>

            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">Country </Form.Label>
              <Form.Select
                className="w-75"
                aria-label="Default select example"
                required
              >
                <option disabled selected value="Egypt">
                  Egypt
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">City </Form.Label>
              <Form.Select
                className="w-75"
                aria-label="Default select example"
                required
                onChangeCapture={updateCity}
              >
                <option value="select your City" selected>
                  select your City
                </option>
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
            <p className="text-danger" style={{ marginLeft: "200px" }}>
              {error_1}
            </p>

            <span className="fw-bold fs-5 ms-5 mb-5">Contact Info</span>
            <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
              <Form.Label className="me-2 pt-2">Phone Number</Form.Label>
              <Form.Control
                className="w-75"
                type="text"
                id="tentacles"
                name="tentacles"
                required
                onChangeCapture={updatePhone}
              />
            </Form.Group>
            <Col md={{ offset: 5 }}>
              <Button
                style={{ background: "#ffc107", border: " 1px solid" }}
                className="w-25"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
}
