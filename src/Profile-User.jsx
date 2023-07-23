import './test.css';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from 'react'
import {UserNav} from "./UserNav"
import job_Info from './job_Info'
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export function Profile_User(props) {
    const userdata = props.userData;
   // const AboutUSer = props.AboutUser;
    console.log(userdata)
    //console.log(AboutUSer)
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    return(
        <>
            <Container fluid>
                <UserNav/>
                <Row>
                    <Col className="col-12 col-md-8">
                        <Row className="bg-light mt-3 ms-5 me-5 mb-3 square border border-primary border-2" id="profile">
                            <Col className="col-6 col-md-4">
                                <div className="mt-2 ms-3 "
                                    style={{
                                        width:"75%"
                                        
                                    }}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        ref={imageUploader}
                                        style={{
                                        display: "none",
                                        }}
                                    />
                                    <div
                                        className="m-5"
                                        style={{
                                        height: "200px",
                                        width: "200px",
                                        }}
                                        onClick={() => imageUploader.current.click()}
                                    >
                                        <img
                                            className="rounded-circle"
                                            ref={uploadedImage}
                                            style={{
                                                backgroundColor: "#E0E0E0",
                                                width: "200px",
                                                height: "200px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-6 col-md-4">
                                <div className='ms-4'>
                                    <div className="fs-4 text-start mt-5 fw-bold ">{userdata[0]} {userdata[1]} </div>
                                    <div className="mt-2 fs-5 opacity-75">Alexandria , Egypt</div>
                                    <div className="mt-2 fs-5 opacity-75">Developer</div>
                                </div>
                            </Col>
                            <Col className="col-6 col-md-4 d-flex align-items-center justify-content-center">
                                <Button className="mt-2 mb-2" variant="outline-secondary"> Update Profile </Button>
                            </Col>
                        </Row>
                        <Row className="bg-light ms-5 me-5 square border border-primary border-2" id="profile">
                            <Col className="bg-light mt-4 mb-4 col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6">
                                <div className="fw-bold fs-4 mb-1 ms-3">General Info:</div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                        Age: 22
                                    </div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                        Experience: No experience · Student
                                    </div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                        Minimum Salary: Confidential
                                    </div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                        Nationality: Egypt
                                    </div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                        Education Level: Bachelor's Degree
                                    </div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                        Gender: Female
                                    </div>
                            </Col>
                            <Col className="bg-light mt-4 mb-4 col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6">
                                <div className="fw-bold fs-4 mb-1 ms-3">Contact Info:</div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                    <i class="fa-solid fa-phone"></i> 0123456788
                                    </div>
                                    <div className=" ms-3 fs-5 opacity-75">
                                    <i class="fa-solid fa-envelope"></i> {userdata[2]}
                                    </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-6 col-md-4 text-light mt-5 mb-3">
                        <div className="fw-bold fs-4 mb-2"> Your Profile Visibility </div>
                        <div className="d-flex flex-row mb-4">
                            <Form>
                                <Form.Check 
                                    className="fs-2"
                                    type="switch"
                                    id="custom-switch"
                                    defaultChecked="active"
                                />
                            </Form>
                            <div className="mt-2">
                                Make my profile public
                            </div>
                            <div>
                                <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip>
                                        By activating this option, you can share your profile 
                                    </Tooltip>
                                }
                                >
                                    <Badge className="ms-3 mt-2 bg-secondary bg-opacity-100" pill>
                                        !
                                    </Badge>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <hr className="w-75"></hr>
                        <div className="d-flex flex-row mb-4">
                            <Form>
                                <Form.Check 
                                    className="fs-2"
                                    type="switch"
                                    id="custom-switch"
                                    defaultChecked="active"
                                />
                            </Form>
                            <div className="mt-2">
                                Let companies find me on <div className="fw-bold">Chance </div>
                            </div>
                            <div>
                                <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip>
                                        By activating this option, you will increase your chances of getting headhunted by companies searching our database
                                    </Tooltip>
                                }
                                >
                                    <Badge className="ms-3 mt-2 bg-secondary bg-opacity-100" pill>
                                        !
                                    </Badge>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <hr className="w-75"></hr>
                    </Col>
                </Row>
            </Container>
        </>
    ); 
}