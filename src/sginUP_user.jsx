import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import background from "./images/photoPaint.jpg";
import facebook from "./images/facebook.png";
import google from "./images/google.png";
import { SginIn } from "./sginIn_user";
import { useNavigate } from "react-router-dom";
import sticker from "./images/sticker_4.png";
import "./test.css";
import { useState } from "react";
export function SginUp(props) {
  let [second , setSecond] = useState("");
  let [validPass, setValidPass] = useState("");
  let [MatchedPass, setMatchedPass] = useState("");
  let [Pass, setPass] = useState("");
  let [name, setName] = useState("");
  let [email , setEmail] = useState("");
  let data = [name, second , email];
  let navigate = useNavigate();
  let goToPersonalInfo = () => {
    props.getData(data);
    navigate("/sginUp/user/personalInfo");
  };
  let updateEmailState = (e)=>{
    setEmail(e.target.value);
  }
  let handleValidPass = (e) => {
    if (e.target.value.length > 0 && e.target.value.length < 6) {
      console.log(e.target.value.length);

      setValidPass("password should be 6+ Characters !");
    } else {
      setValidPass("");
    }

    setPass(e.target.value);
  };

  let handleMatchPass = (e) => {
    if (e.target.value > 0 && e.target.value !== Pass) {
      console.log(e.target.value.length);

      setMatchedPass("Not matched with password !");
    } else {
      setMatchedPass("");
    }
  };
  let updateState =(e) =>{
    setName(e.target.value);
  }
  let updateSecondState = (e)=>{
    setSecond(e.target.value);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-12 d-none d-md-block col-md-4  col-lg-5 col-xlg-5 "
            style={{ height: "100vh" }}
          >
            <div className="fw-bolder fs-4 text-light mt-2 ms-2">
              <i class="fa-solid fa-briefcase"></i> chance
            </div>
            <div className="fw-bolder fs-1 text-light mt-5 ms-5 pt-5 ">
              <u>Wel</u>come ...
            </div>
            <div className="fw-bolder fs-5 text-light mt-2 ms-5">
              Let's get chance for better job opportunities for programmers.
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-7 col-xlg-7 bg-light pt-5 overflow-auto"
          style={{ height: "100vh" }}
          >
            <div className="" style={{ width: "50%", margin: "1% auto" }}>
              <div className="fw-bolder fs-2">Sgin up to Website</div>
              <div className="text-center ">
                <a href="https://www.facebook.com/login/">
                  <img src={facebook} className="m-2" />
                </a>
                <a href="https://myaccount.google.com/">
                  <img src={google} className="m-2" />
                </a>
              </div>

              <div class="divider">OR</div>

              <Form>
                <Form.Group className="mb-2" controlId="formBasicText">
                  <Form.Label>First & Last Name</Form.Label>
                  <InputGroup className="mb-2">
                    <Form.Control
                      aria-label="First name"
                      required="required"
                      size="sm"
                      placeholder="Enter first name"
                      onChange={updateState}
                      value={name}
                    />
                    <Form.Control
                      aria-label="Last name"
                      required="required"
                      size="sm"
                      onChange={updateSecondState}
                      placeholder="Enter last name"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    required="required"
                    size="sm"
                    placeholder="Enter email"
                    onChange={updateEmailState}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required="required"
                    onChange={handleValidPass}
                    size="sm"
                    placeholder="Enter Password"
                  />
                  <div className="text-danger">{validPass}</div>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPssword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    required="required"
                    onChange={handleMatchPass}
                    size="sm"
                    placeholder="confirm Password"
                  />
                  <div className="text-danger">{MatchedPass}</div>
                </Form.Group>
                <Form.Group
                  className="mb-3 ms-2 mt-3"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remmember Me" />
                </Form.Group>
                <Button variant="outline-primary" onClick={goToPersonalInfo} type="submit">
                  craete account
                </Button>
              </Form>
              <div className="text-center mt-2">
                <span>Already a member? </span>
                <a href="">sgin In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
