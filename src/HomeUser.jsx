import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {MyFooter} from './Footer';
import { useState } from "react";
import jobs from "./jobs.json";
import {Recommendations} from "./Recommendations"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from "react-bootstrap/Accordion";
import Badge from 'react-bootstrap/Badge';
import { UserNav } from "./UserNav";
export function HomeUser() {
  let navigateToJob = useNavigate();
  let [USERsearch , setUSERsearch] = useState("");
  let  searchFillter = (search) =>{
    setUSERsearch(search);
    console.log(USERsearch);
  }
  let [JobCategoriesArray, setJobCategoriesArray] = useState("");
  let HandleJobCategoriesFilter = (e) => {
    if (e.target.checked == false) {
        setJobCategoriesArray(  JobCategoriesArray.filter(a =>
            a !== e.target.value
          ))
    } else {
        setJobCategoriesArray(e.target.value)
    }
    console.log("JobCategoriesArray  => ");
    console.log(JobCategoriesArray);
  };
  let [careerLevelArray, setcareerLevelArray] = useState("");
  let HandleCareerLevelFilter = (e) => {
    if (e.target.checked == false) {
        setcareerLevelArray(  careerLevelArray.filter(a =>
            a !== e.target.value
          ))
      
    } else {
        setcareerLevelArray(e.target.value)
      
    }
   
    console.log("careerLevelArray  => ");
    console.log(careerLevelArray);
  };
  let [citiesArray,setcitiesArray] = useState("");
  let HandleCityFiltter = (e) => {
    if (e.target.checked == false) {
        setcitiesArray(citiesArray.filter(a =>
            a !== e.target.value
          )) 
        } else {
        setcitiesArray(e.target.value)
    }
    console.log("cities  => ");
    console.log(citiesArray);
    
  };
  let [MinExperienceYear, setMinExperienceYear] = useState(null);
  let HandleMinExperienceFiltter = (e) => {
    setMinExperienceYear(e.target.value);
    console.log(MinExperienceYear);
  };
  let [MaxExperienceYear, setMaxExperienceYear] = useState(null);
  let HandleMaxExperienceFiltter = (e) => {
    setMaxExperienceYear(e.target.value);
    console.log(MaxExperienceYear);
  };
  let [JobTypeArray, setJobTypeArray] = useState("");
  let HandleJobTypeFilter = (e) => {
    if (e.target.checked == false) {
        setJobTypeArray(  JobTypeArray.filter(a =>
            a !== e.target.value
          ))
    } else {
        setJobTypeArray(e.target.value)
    }  
    console.log("JobTypeArray  => ");
    console.log(JobTypeArray);
  };
  let careerLevel = [
    "Student",
    "Entry level",
    "Experienced",
    "Manager",
    "Senior Management",
  ];
  let cities = [
    "Cairo",
    "Alexandria",
    "Shubra El-Kheima",
    "Giza",
    "Port Said",
    "Suez",
    "Luxor",
    "al-Mansura",
    "6th of October City",
  ];
  let JobCategories = [
    "IT/Software Development",
    "Sales/Retail",
    "Customer Service/Support",
    "Engineering - Telecom/Technology",
    "Operations/Management",
    "Accounting/Finance",
    "Administration",
  ];
  let JopType = [
    "Full Time",
    "Work From Home",
    "Part Time",
    "Freelance Project",
    "Internship",
    "Shift Based",
    "Volunteering",
  ];
  return (
    <>
      <UserNav  searchFillter = {searchFillter}/>
      <Container className="mt-3">
        <Row>
          <Col className=" col-12 col-sm-12 col-md-12 col-lg-4 col-xlg-4 p-2 fs-5 ">
            <div className="bg-light p-5">
            <p className="fw-bolder fs-2 text-center">Filters</p>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="0" className="fs-5">
                <Accordion.Header>City</Accordion.Header>
                <Accordion.Body>
                {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3" onChange={HandleCityFiltter}>
          {
            cities.map((e) =>{
              return(
                <Form.Check
                              
                              name="group1"
                              type={type}
                              value={e}
                              label={e}
                            />
              )
            })
          }
        </div>
      ))}
                  {/* cities.map((element) => {
                    return (
                      <Form>
                        <Form.Group >
                        {["radio"].map((type) => (
                          <div
                            key={`default-${type}`}
                            className="mb-3"
                            onChange={HandleCityFiltter}
                          >
                            <Form.Check
                              inline
                              name="group1"
                              type={type}
                              value={element}
                              label={element}
                            />
                          </div>
                        ))}
                        </Form.Group>

                      </Form>
                    );
                  })*/}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="1" className="fs-5">
                <Accordion.Header>Career Level</Accordion.Header>
                <Accordion.Body>
                  
                 
                        {["radio"].map((type) => (
                          <div
                            key={`default-${type}`}
                            className="mb-3"
                            onChange={HandleCareerLevelFilter}
                          >
                            {
                              careerLevel.map((e =>{
                                return(
                                  <Form.Check
                                  name="group2"
                              type={type}
                              value={e}
                              label={e}
                            />
                                )
                              }))
                            }
                            
                          </div>
                        ))}

                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="1" className=" text-center fs-5">
                <Accordion.Header>Years of Experience</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row justify-content-start">
                    <Form.Group className=" m-2">
                      <Form.Control
                        type="number"
                        max="20"
                        min="0"
                        placeholder="Min"
                        onChange={HandleMinExperienceFiltter}
                      />
                    </Form.Group>
                    <Form.Group className=" m-2">
                      <Form.Control
                        type="number"
                        max="20"
                        min="0"
                        placeholder="Max"
                        onChange={HandleMaxExperienceFiltter}
                      />
                    </Form.Group>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="1" className="fs-5">
                <Accordion.Header>Job Categories</Accordion.Header>
                <Accordion.Body>
                {["radio"].map((type) => (
                          <div
                            key={`default-${type}`}
                            className="mb-3"
                            onChange={HandleJobCategoriesFilter}
                          >{
                            JobCategories.map((e)=>{
                              return(
                                <Form.Check
                                name="group3"
                                type={type}
                                value={e}
                                label={e}
                              />
                              )

                            })
                          }
                            
                          </div>
                        ))}

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="1" className="fs-5">
                <Accordion.Header>Job Type</Accordion.Header>
                <Accordion.Body>
                {["radio"].map((type) => (
                          <div
                            key={`default-${type}`}
                            className="mb-3"
                            onChange={HandleJobTypeFilter}
                          >
                            {
                              JopType.map((e) =>{
                               return(
                                <Form.Check
                                type={type}
                                value={e}
                                label={e}
                                name="group4"
                              />
                               )
                              })
                            }

                          </div>
                        ))}

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
            <Recommendations/>
          </Col>
          <Col  className="col-12 col-sm-12 col-md-12 col-lg-8 col-xlg-8 p-2 fs-5 p-4"  >
                  {
                    jobs.filter((e) =>{
                      if(USERsearch == ""){
                        return e
                      }else if(e.title.toLowerCase().includes(USERsearch.toLowerCase())){
                        return e
                      }
                    }).filter((el)=>{
                      if(citiesArray == ""){
                        return(el)
                      }
                      else if(el.jobPosition.toLowerCase().includes(citiesArray.toLowerCase())){
                        return(el)
                      }
                    }).filter((el)=>{
                      if(careerLevelArray == ""){
                        return(el)
                      }
                      else if(el.jobDes.toLowerCase().includes(careerLevelArray.toLowerCase())){
                        return(el)
                      }
                    }).filter((el)=>{
                      if(MinExperienceYear == null  && MaxExperienceYear == null){
                        return(el)
                      }
                      else if(MaxExperienceYear == null && el.minExpr <= MinExperienceYear){
                        return(el)
                      }
                      else if(MinExperienceYear == null && el.minExpr <= MaxExperienceYear){
                        return(el)
                      }
                      else if(el.minExpr <= MinExperienceYear || el.minExpr <= MaxExperienceYear){
                        return(el)
                      }
                    }).filter((el)=>{
                      if(JobCategoriesArray == ""){
                        return(el)
                      }
                      else if(el.jobDes.toLowerCase().includes(JobCategoriesArray.toLowerCase())){
                        return(el)
                      }
                    }).filter((el)=>{
                      if(JobTypeArray == ""){
                        return(el)
                      }
                      else if (el.JobType.includes(JobTypeArray)){
                        return(el)
                      }
                    })
                    
                    .map((el) =>{
                        return (
                            <div className="job" >
                                <Card className="mb-3" key={el.id}>
                        <Card.Body>
                          <Card.Title>{el.title}</Card.Title>
                          <Card.Text>
                            <div>
                                <p>{el.jobPosition}</p>
                                <p>{
                                    el.JobType.map((e)=>{
                                            return(
                                                <Badge bg="secondary">{e}</Badge>
                                            )
                                    })
                                    }</p>
                                <p>
                                    {el.jobDes}
                                </p>
                            </div>
                          </Card.Text>
                          <div className="text-end">
                          <Button variant="primary" onClick={() => {
                              //console.log(el.id);
                              navigateToJob(`/sginUp/user/personalInfo/Professional/user_home/${el.id}`)
                          }} >show Details</Button>
                          </div>
                          
                        </Card.Body>
                        
                               </Card>
                            </div>
                        )
                        
                    })
                }

          </Col>
        </Row>

      </Container>
      <Container className="bg-light" fluid style={{marginRight: '0px' , marginLeft: '0px' , marginBottom: '0px'}}>
      <Recommendations/>
      </Container>
      <MyFooter/>
    </>
  );
}
