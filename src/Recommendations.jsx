import './test.css';
import { Container, Row, Col } from "react-bootstrap";
import { useState , useEffect} from "react";
import Button from 'react-bootstrap/Button';
import technicalRoadmaps from './Technical-Roadmaps.json';
import nomTechnicalRoadmaps from './nonTechnical-Roadmaps.json';

import React from 'react'
export function Recommendations(props) {
    //const userName = props.userName;
    const[filteredData , setfilteredData ] = useState("");
    const [ShowClicked , setShowClicked] = useState(false);
    const handleSearch = () => {
        setShowClicked(true);
        console.log(ShowClicked)
    }
    return(
        <>
            <Container fluid >
                <Row className="bg-light mt-3 fs-2  pt-2 text-center">

                    <div className="fs-2 fw-bold mt-3 mb-1">FIND YOUR ROADMAP</div>
                    <div className="mb-5 fs-5 opacity-75 fst-italic">We are trying to help you finding the Roadmap</div>
                    
                </Row>
                <Row className=" bg-light mb-3">
                    <Col className=" bg-light col-12  col-sm-12 col-md-12 col-lg-12 col-xlg-12 text-center square border border-2 mb-2">
                        <div className="fw-bold fs-5 mt-3">Search about Roadmap for Technical OR Non-Technical Skills</div>
                            <div className="active-pink-3 active-pink-4 ms-5 m-5 d-flex justify-content-center">
                                <input className="form-control" type="text" placeholder="Search" onChange={e =>{
                                     if(filteredData == "" ){
                                        setShowClicked(false);
                                    }
                                        setfilteredData(e.target.value);
                                }} />
                                 <button className=" btn btn-outline-secondary w-40 " onClick={handleSearch}> Show Roadmap </button>

                            </div>
                        <div className="mt-5 mb-5 text-center me-5 ms-5">
                                {technicalRoadmaps.filter((e) => { 
                                    if (ShowClicked == true && filteredData == ""){
                                        
                                    }
                                    else if(ShowClicked == true && e.skill.toLowerCase() == filteredData.toLowerCase()){
                                        return e;
                                    }
                                }).map((item) => (
                                    <div key={item.id}>
                                        {item.roadmap.map(function(roadmap, i){
                                            return <Button className="w-100 mb-3" variant="outline-secondary" size="lg" obj={roadmap} key={i} >{roadmap}</Button> ;
                                        })}                               
                                    </div>
                                ))}                           
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    ); 
}