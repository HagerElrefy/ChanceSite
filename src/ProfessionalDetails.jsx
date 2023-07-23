import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import languageArray from "./languageArray.json";
import departments from "./Departments.json";
import "./test.css";
import { useNavigate } from "react-router-dom";
import languages from "./languages.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export function ProfessionalDetails(props) { 
  const userName = props.userName;
  let navigate = useNavigate();
  let [language, setLanguage] = useState("");
  let [proficiency, setLanguageProficiency] = useState("");
  let [language_error, setLanguage_error] = useState("");
  let [experience_error, setExperience_error] = useState("");
  let [experience, setExperience] = useState("");
  let [educationalLevel_error, seteducationalLevel_error] = useState("");
  let [educationalLevel, setEducationalLevel] = useState("");
  let [file_error, setFile_error] = useState("");
  let [file, setFile] = useState("");
  let [faculty_error, setFaculty_error] = useState("");
  let [faculty, setFaculty] = useState("");
  let [depart_error, setDepart_error] = useState("");
  let [depart, setDepart] = useState("");
  let [jobType_error ,setJobType_error] = useState("");
  let [jobCategory_error ,setJobCategory_error] = useState("");
  let [Sallary_error ,setSallary_error] = useState("");
  let [jobCategory ,setJobCategory] = useState("");
  let [Sallary ,setSallary] = useState(0);
  let HandleJobCategoris = (e) =>{
    setJobCategory(e.target.value);
    if(jobCategory != "select"){
      setJobCategory_error("");
    }
  }
  let HandleSallary = (e)=>{
    setSallary(e.target.value);
    if(Sallary != 0){
      setSallary_error("");
    }
  }
  let HandleDepart = (e) => {
    setDepart(e.target.value);
    if (depart != "select department") {
      setDepart_error("");
    }
  };
  let HandleFaculty = (e) => {
    setFaculty(e.target.value);
    if (faculty != "select your Faculty") {
      setFaculty_error("");
    }
  };
  let handleFile = (e) => {
    setFile(e.target.value);
    if (file != "") {
      setFile_error("");
    }
  };
  let HandleEducationalLevel = (e) => {
    setEducationalLevel(e.target.value);
    if (educationalLevel != "select your Educational level") {
      seteducationalLevel_error("");
    }
  };
  let HandleExperience = (e) => {
    setExperience(e.target.value);
    if (experience != "select") {
      setExperience_error("");
    }
  };
  let HandleLanguages = () => {
    if (languageArray.length == 0) {
      languageArray = [
        ...languageArray,
        { language: language, proficiency: proficiency },
      ];
    } else {
      let flag = 0;
      languageArray.map((Element) => {
        if (Element.language == language) {
          flag = 1;
        }
      });
      if (flag == 1) {
        setLanguage_error("You enter this record before!");
      } else {
        languageArray = [
          ...languageArray,
          { language: language, proficiency: proficiency },
        ];
        setLanguage_error("");
      }
    }
  };
  let HandleLanguageProficiency = (e) => {
    setLanguageProficiency(e.target.value);
  };
  let [selected_1, setSelected_1] = useState(0);
  let [selected_2, setSelected_2] = useState(0);
  let [selected_3, setSelected_3] = useState(0);
  let [selected_4, setSelected_4] = useState(0);
  let [selected_5, setSelected_5] = useState(0);
  let [selected_6, setSelected_6] = useState(0);

  let HandleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  let handleSubmit = () => {

    if(experience == "" || educationalLevel == "" || file == "" || faculty == "" || depart == "" || (selected_1 == 0 && selected_2 == 0 && selected_3 == 0 && selected_4 == 0 && selected_5 == 0 && selected_6 == 0)  || Sallary == 0 || jobCategory == ""){
      if (experience == "") {
        setExperience_error("You should select one of these.");
      }
      if (educationalLevel == "") {
        seteducationalLevel_error("You should select your educational level.");
      }
      if (file == "") {
        setFile_error("Please upload your CV.");
      }
      if (faculty == "") {
        setFaculty_error("Please select your faculty.");
      }
      if (depart == "") {
        setDepart_error("You should select your department.");
      }
      if(selected_1 == 0 && selected_2 == 0 && selected_3 == 0 && selected_4 == 0 && selected_5 == 0 && selected_6 == 0){
        setJobType_error("Pealse select at LEAST one of these.")
      }
      if(Sallary == 0){
        setSallary_error("It is required...")
      }
      if(jobCategory == ""){
        setJobCategory_error("please select one.")
      }

    }
    else{
      navigate("/sginUp/user/personalInfo/Professional/user_home")
    }


  };
  let HandleStyle = (e) => {
    if (e.target.value == 1) {
      if(selected_1 === 0 ){
        setSelected_1(1);
        setJobType_error("");
      }else{setSelected_1(0);}
    }
    if (e.target.value == 2) {
      if(selected_2 === 0 ){
        setSelected_2(1);
        setJobType_error("");
      }else{setSelected_2(0);}
    }
    if (e.target.value == 3) {
      if(selected_3 === 0 ){
        setSelected_3(1);
        setJobType_error("");
      }else{setSelected_3(0);}
    }
    if (e.target.value == 4) {
      if(selected_4 === 0 ){
        setSelected_4(1);
        setJobType_error("");
      }else{setSelected_4(0);}
    }
    if (e.target.value == 5) {
      if(selected_5 === 0 ){
        setSelected_5(1);
        setJobType_error("");
      }else{setSelected_5(0);}
    }
    if (e.target.value == 6) {
      if(selected_6 === 0 ){
        setSelected_6(1);
        setJobType_error("");
      }else{setSelected_6(0);}
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
            <div className="divider3">
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
            <span className="fs-5">
              <i class="fa-solid fa-check"></i> Personal Info
            </span>
          </Col>
          <Col className="text-start" style={{ color: "#ffc107" }}>
            <span
              style={{
                border: " 1px solid",
                borderRadius: "50%",
                background: "#ffc107",
              }}
              className="ps-4 pe-4 me-2 text-light fw-bolder"
            >
              3
            </span>
            <br></br>
            <span className="fs-5">Job Info</span>
          </Col>
        </Row>
        <Row className="bg-light text-center">
          <Col className="col-sm-12">
            <div className="fw-bolder fs-2 mt-3">Job Info</div>
            <div>Tell some imformation to fast communication between you and companies .</div>
            <Form
              style={{
                width: "50%",
                margin: "4px auto",
                border: " .5px solid gray",
              }}
              className="text-start mt-4 p-4"
            >
              <div>
                <p className="fw-bold fs-5 text-center m-2 text-primary">
                  Section-1 : Career Interests
                </p>
                <p  className=" text-center m-2 text-primary">
                  Providing this information enables us to recommend better
                  opportunities to you.
                </p>

                <div className="fw-bold fs-5 mb-3">
                  What type(s) of job are you open to?
                </div>
                <div className="">
                  <Button
                    id="btn"
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_1 === 0 ? "outline-primary" : "primary"}
                    value="1"
                  >
                    Full Time
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_2 === 0 ? "outline-primary" : "primary"}
                    value="2"
                  >
                    Part Time
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_3 === 0 ? "outline-primary" : "primary"}
                    value="3"
                  >
                    Freelance/Project
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_4 === 0 ? "outline-primary" : "primary"}
                    value="4"
                  >
                    Internship
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_5 === 0 ? "outline-primary" : "primary"}
                    value="5"
                  >
                    Volunteering
                  </Button>
                  <Button
                    className="me-3 mb-3"
                    onClick={HandleStyle}
                    variant={selected_6 === 0 ? "outline-primary" : "primary"}
                    value="6"
                  >
                    Student Activity
                  </Button>
                  <p className="fs-5 text-danger">{jobType_error}</p>
                </div>

                <div className="fw-bold fs-5">
                  What job categories are you interested in?
                </div>
                <Form.Group className="me-5 mt-3">
                  <Form.Select required onChangeCapture={HandleJobCategoris}>
                    <option disabled selected value="select">
                      select
                    </option>
                    <option value="sw">Software Application Developing</option>
                    <option value="wd">Web Developing</option>
                    <option value="da"> Database Administration</option>
                    <option value="csa">Computer Systems Analysis</option>
                    <option value="md">Mobile Developing</option>
                    <option value="nsa"> Network System Administration</option>
                    <option value="isa">Information Security Analysis</option>
                    <option value="che">Computer Hardware Engineering</option>
                    <option value="cne">Computer Network Architecture</option>
                    <option value="tse">Technical Support Engineering</option>
                    <option value="nse">Network Security Engineering</option>
                    <option value="sa">Security Analysis</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="ml">Machine Learning</option>
                  </Form.Select>
                  <p className="fs-5 text-danger">{jobCategory_error}</p>
                </Form.Group>
                <div className="fw-bold fs-5">
                  What is the minimum salary you would accept?
                </div>
                <div className="d-flex flex-row">
                  <Form.Group className="mt-3">
                    <Form.Control className="w-50" min="1000" type="number" required onChangeCapture={HandleSallary}  />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Select required>
                      <option selected>Egyptian Pound (EGP)</option>
                      <option value="usd">United States Dollar (USD)</option>
                      <option value="kwd">Kuwaiti Dinar (KWD)</option>
                      <option value="sar">Saudi Arabian Riyal (SAR)</option>
                      <option value="aed">U.A. Emirates Dirham (AED)</option>
                      <option value="jpy">Japanese Yen (JPY)</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mt-3 m-3">
                    <Form.Select required>
                      <option value="day">Per Day</option>
                      <option selected>Per Month</option>
                      <option value="week">Per Week</option>
                      <option value="year">Per Year</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <p className="fs-5 text-danger">{Sallary_error}</p>
                <Form.Check
                  className="fw-bold opacity-75 fs-6 mt-2"
                  inline
                  label="Hide my minimum salary from companies."
                />
                <div className="opacity-25 fw-bold ms-4">
                  We'll only use your minimum salary to recommend jobs for you.
                </div>
              </div>
              <hr className="m-3"></hr>
              <div>
              <p className="fw-bold fs-5 text-center m-2 text-primary">
                  Section-2 : Professional Info
                </p>
                <p className="text-center m-2 text-primary">
                Tell companies about your professional experience.
                </p>

              <Form.Group className="me-5 ms-5 mb-3">
                <Form.Label className="fw-bold fs-5 me-2 pt-2">
                  How many years of experience do you have?{" "}
                </Form.Label>
                <Form.Select
                  className="w-100"
                  aria-label="Default select example"
                  required
                  onChangeCapture={HandleExperience}
                >
                  <option disabled selected value="select">
                    select
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="moreThan5Years">more than 5 Years</option>
                </Form.Select>
                <p className="text-danger fs-5">{experience_error}</p>
              </Form.Group>

              <Form.Group className="me-5 ms-5 mb-3">
                <Form.Label className="fw-bold fs-5 me-2 pt-2">
                  What is your current educational level?
                </Form.Label>
                <Form.Select
                  className="w-100"
                  aria-label="Default select example"
                  required
                  onChangeCapture={HandleEducationalLevel}
                >
                  <option
                    disabled
                    selected
                    value="select your Educational level"
                  >
                    select your Educational level
                  </option>
                  <option value="B-S">Bachelor's Student</option>
                  <option value="B-D">Bachelor's Degree</option>
                  <option value="M-D">Master's Degree</option>
                  <option value="PHD">PHD Degree</option>
                  <option value="no_degree">No Degree</option>
                </Form.Select>
                <p className="text-danger fs-5">{educationalLevel_error}</p>
              </Form.Group>
              <span className="fw-bold fs-5 ms-5 mb-5">Degree Details</span>
              <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                <Form.Label className="me-2 pt-2">Faculty </Form.Label>
                <Form.Select
                  className="w-75"
                  aria-label="Default select example"
                  required
                  onChangeCapture={HandleFaculty}
                >
                  <option disabled selected value="select your Faculty">
                    select your Faculty
                  </option>
                  <option value="Faculty of Computer & Information">
                    Faculty of Computer & Information
                  </option>
                  <option value="Faculty of Computers & Data Science">
                    Faculty of Computers & Data Science
                  </option>
                  <option value="Faculty of Computers & Artificial Intelligence">
                    Faculty of Computers & Artificial Intelligence
                  </option>
                  <option value="Faculty of Artificial Intelligence">
                    Faculty of Artificial Intelligence
                  </option>
                  <option value="Faculty of Engineering">
                    Faculty of Engineering
                  </option>
                  <option value="Faculty of Electronic Engineering">
                    Faculty of Electronic Engineering
                  </option>
                  <option value="Faculty of Science">Faculty of Science</option>
                </Form.Select>
              </Form.Group>
              <p className="text-danger fs-5 ms-1  text-center">
                {faculty_error}
              </p>
              <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                <Form.Label className="me-2 pt-2">Department </Form.Label>
                <Form.Select
                  className="w-75"
                  aria-label="Default select example"
                  required
                  onChangeCapture={HandleDepart}
                >
                  <option disabled selected value="select department">
                    select your department
                  </option>
                  {
                    //console.log(departments.findIndex((e) => e.name == faculty))
                    //setFacultyDepartIndex(departments.findIndex((e) => e.name == faculty))
                    departments.map((e) => {
                      if (e.name == faculty) {
                        return e.deprts.map((el) => {
                          return <option value={el}>{el}</option>;
                        });
                      }
                    })
                  }
                </Form.Select>
              </Form.Group>
              <p className="text-danger fs-5 ms-1  text-center">
                {depart_error}
              </p>
              <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                <Form.Label className="me-2 pt-2">Graduation Year </Form.Label>
                <Form.Control
                  className="w-75"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="2000"
                  max="2024"
                  required
                />
              </Form.Group>
              <span className="fw-bold fs-5 ms-5 mb-5">
                What languages do you know?
              </span>
              <span> — You can add more than one</span>
              <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                <div className="d-flex flex-column w-50">
                  <Form.Label>Language</Form.Label>
                  <Form.Select
                    onChangeCapture={HandleLanguage}
                    className="w-100"
                    aria-label="Default select example"
                    required
                  >
                    <option disabled selected>
                      select
                    </option>
                    {languages.map((items) => {
                      return (
                        <option value={items.language}>{items.language}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div className="d-flex flex-column w-50">
                  <Form.Label>Proficiency</Form.Label>
                  <Form.Select
                    onChangeCapture={HandleLanguageProficiency}
                    className="w-100"
                    aria-label="Default select example"
                    required
                  >
                    <option disabled selected>
                      select
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Fluent">Fluent</option>
                  </Form.Select>
                </div>
                <div className="d-flex flex-column w-50">
                  <div className="h-100"></div>
                  <Button
                    className="ms-2 me-5 bg-primary"
                    onClick={HandleLanguages}
                  >
                    Add{" "}
                  </Button>
                </div>
              </Form.Group>
              <p className="text-danger ms-5 fs-5">{language_error}</p>
              {languageArray.map((element) => {
                return (
                  <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                    <InputGroup className="w-100">
                      <Form.Control
                        required="required"
                        placeholder={
                          element.language + " - " + element.proficiency
                        }
                        value={element.language + " - " + element.proficiency}
                        disabled
                      />
                    </InputGroup>
                  </Form.Group>
                );
              })}
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Upload Your CV</Form.Label>
                <Form.Control
                  type="file"
                  size="lg"
                  onChangeCapture={handleFile}
                />
                <p className="text-danger fs-5">{file_error}</p>
              </Form.Group>
              </div>

              <Col md={{ offset: 5 }}>
                <Button
                  style={{ background: "#ffc107", border: " 1px solid" }}
                  className="w-25"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Col>
              {
                ////////////////////////////////////TEST /////////////////////////////////////
              }
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
