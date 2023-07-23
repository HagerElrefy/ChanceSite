import { UserNav } from "./UserNav";
import {MyFooter} from './Footer';
import { useState } from "react";
import jobs from "./jobs.json";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Container, Row } from "react-bootstrap";
export function ApplicationPage (){
  let navigateToJob = useNavigate();
  let [USERsearch , setUSERsearch] = useState("");
  let  searchFillter = (search) =>{
    setUSERsearch(search);
    console.log(USERsearch);
  }
    return(
        <>
        <Container fluid className=" d-flex flex-column min-vh-100">
        <UserNav searchFillter = {searchFillter}/>
         {
            jobs
            .filter((e) =>{
                if (e.applied === "yes"){
                    return(e)
                }
            }).filter((e) =>{
                if(USERsearch == ""){
                  return e
                }else if(e.title.toLowerCase().includes(USERsearch.toLowerCase())){
                  return e
                }
              }) .map((el) =>{
                return(
                    <Row className="w-60 ms-5 me-5 mt-3">
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
                          <Button variant="primary"
                            onClick={() => {
                              navigateToJob(`/sginUp/user/personalInfo/Professional/saved/${el.id}`)
                          }}
                          >show Details</Button>
                          <Button variant="danger" className="ms-2" onClick={() => {
                            return(          el.save = "no"
                            )
                          }} >Unsaved</Button>
                          </div>
                          
                        </Card.Body>
                        
                               </Card>
                            </div>
                    </Row>
                )
            })
         }
          <div className="mt-auto" style={{marginBottom:'0px'}}><MyFooter/></div>
        </Container>
       
        </>
    )
}