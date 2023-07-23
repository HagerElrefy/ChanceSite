import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import jobs from "./jobs.json";
import { useState } from "react";
import { UserNav } from "./UserNav";
export function Job() {
  const { jobId } = useParams();
  console.log(typeof jobId);
  let jobAdv = jobs.filter((el) => el.id == jobId);
  console.log(jobAdv);
  //console.log(jobId);
  
  let SaveFUNC = ()=>{
    jobAdv.map( e => {
     
      //console.log(e.save)
        e.save = "yes"
       // console.log(e.save)
      
    })
  }
  let  ApplyFunc = () => {
    jobAdv.map( e => {
        e.applied = "yes"
    })
  }
  return (
    <>
      {jobAdv.map((e) => {
        return (
          <>
            <UserNav />
            <Container className="bg-light mt-5 mb-2 rounded">
              <Row>
                <Col
                  style={{
                    fontSize: "1.5vw ",
                    marginBlock: "3vw",
                    margin: "3vw",
                  }}
                  className="col-12 col-sm-12 col-md-12 col-lg-7 col-xlg-7 d-flex flex-row overflow-auto"
                >
                  <div style={{ width: "17vw" }}>
                    <img
                      src={e.img}
                      style={{ width: "15vw", height: "25vh" }}
                    ></img>
                    <div style={{ fontSize: "1.5vw" }}>
                      <span className="fw-bolder text-primary">{e.name}</span>
                      <span> - {e.jobPosition}</span>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      paddingLeft: "3vw",
                      paddingRight: "3vw",
                      paddingTop: "1vw",
                    }}
                  >
                    <div className="fw-bolder fs-5">
                      {e.title}
                    </div>
                    <div>
                      {
                          e.JobType.map((el)=>{
                            return(
                                <Badge bg="secondary" className="m-1">{el}</Badge>
                            )
                    })
                      }
                    </div>
                    <hr></hr>
                    <div className="fs-5">
                      <span className="text-muted">Open Positions : </span>
                      <span className="">{e.openPOS}</span>
                    </div>
                    <div className="fs-5">
                      <span className="text-muted">Deadline of this adv :</span>
                      <span className=""> {e.DeadlineOfADv}</span>
                    </div>

                  </div>
                </Col>
                <Col
                  
                  style={{ fontSize: "1.5vw " }}
                  className="col-12 col-sm-12 col-md-12 col-lg-4 col-xlg-4"
                >
                  <Card style={{ width: "100%" }} className="mt-3 mb-3">
                    <Card.Body>
                      <Card.Title>About : {e.name}</Card.Title>
                      <Card.Text className="overflow-auto">{e.aboutCom}</Card.Text>
                      <Button variant="primary" className="me-2">
                        Show Profile
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

            <Container className="bg-light  mb-5 rounded">
              <div className="ps-5 pt-3 fs-5 " >
                <p className="fw-bolder fs-3" > Job Details</p>
                <table class="table table-borderless table-responsive">
                  <tbody>
                    <tr>
                      <th className="text-muted" style={{ width: "17vw" }}>
                        <b>Experience Needed:</b>
                      </th>
                      <td className="ms-1">{e.minExpr} - {e.maxExpr} + Yrs of Exp</td>
                    </tr>
                    <tr>
                      <th className="text-muted">
                        <b>Career Level:</b>
                      </th>
                      <td className="ms-1">{e.CareerLevel}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">
                        <b>Education Level:</b>
                      </th>
                      <td className="ms-1">{e.EducationLevel}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">
                        <b>Salary: </b>
                      </th>
                      <td className="ms-1">{e.Salary}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">
                        <b>Job Categories: </b>
                      </th>
                      <td className="ms-1">{e.JobCategories}</td>
                    </tr>
                    <tr>
                      <th className="text-muted">
                        <b>Skills And Tools: </b>
                      </th>
                      <td className="ms-1">
                        {e.SkillsandTools.map((el) => {
                          return <Badge bg="secondary me-1">{el}</Badge>;
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="me-5"></hr>
                <div className="ps-3 pt-3 pe-5 fs-5" >
                <p className="fw-bolder fs-3" > Job Details</p>
                <div>
                {e.jobDescription}
                </div>      
                </div><hr className="ms-1 me-5"></hr>
                <div className="ps-3 pt-3 pe-5 pb-4 fs-5" >
                <p className="fw-bolder fs-3" > Skills and tools</p>
                <div>
                {e.SkillsandTools}
                </div>      
                </div>
                <div className="d-flex flex-row-reverse me-5">
                  <p  >
                  <Button variant={e.save == "no" ? "success" : "danger"} className="m-1" onClick={SaveFUNC}>{
                    e.save == "no" ? "Save" : "Unsave"
                  }</Button>
                  <Button variant="primary" className="m-1" onClick={ApplyFunc}>Apply for the job</Button>
                  </p>
                        {
                         
                        }
                </div>
              </div>
            </Container>
          </>
        );
      })}
    </>
  );
}
