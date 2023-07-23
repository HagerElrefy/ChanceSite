import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import background from './images/photoPaint.jpg'
import linkedIn from './images/linkedin.png'
import facebook from './images/facebook.png'
import google from './images/google.png'
import {SginIn} from './sginIn_user'
import sticker from './images/sticker_4.png'
import './test.css';
import { useState } from 'react';
export function SginUp_Company() {
    let [ validPass, setValidPass] = useState("");
    let [ MatchedPass, setMatchedPass] = useState("");
    let [ Pass, setPass] = useState("");
   let handleValidPass =(e)=>{
    if(e.target.value.length > 0 && e.target.value.length < 6){
      console.log(e.target.value.length)
  
      setValidPass("password should be 6+ Characters !")
    }
    else{
      setValidPass("")
    }
      
    setPass(e.target.value)
  
   }
  
  
   let handleMatchPass =(e)=>{
    if(e.target.value > 0 && e.target.value !== Pass){
      console.log(e.target.value.length)
  
      setMatchedPass("Not matched with password !")
    }
    else{
      setMatchedPass("")
    }
      
    
  
   }
      return(
        
         <>
         <div className="container-fluid" >
              <div className="row">
                <div className="col-sm-12 d-none d-md-block col-md-4  col-lg-5 col-xlg-5 " style={{ height: '100vh'  }}>
                  <div className='fw-bolder fs-4 text-light mt-2 ms-2'>
                  <i class="fa-solid fa-briefcase"></i> chance
                  </div>
                  <div className='fw-bolder fs-1 text-light mt-5 ms-5 pt-5 ' >
                  <u>Wel</u>come ...
                  </div>
                <div  className='fw-bolder fs-5 text-light mt-2 ms-5'>
                  Let's get chance for better job opportunities for programmers.
                </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-7 col-xlg-7 bg-light" >
                  
                  <div className="" style={{ width: '50%' , margin:'1% auto' }}>
  
                  <div className='fw-bolder fs-3' >Create company account</div>
                  <div className='text-center '>
                    <a href='https://www.facebook.com/login/'><img src={facebook} className='m-2'/></a>
                    <a href='https://www.linkedin.com/login/ar'><img src={linkedIn} className='m-2'/></a>
                    <a href='https://myaccount.google.com/'><img src={google} className='m-2'/></a>
                  </div>
  
                  <div class="divider">OR</div>
  
    <Form >
        <Form.Group className="mb-2"  controlId="formBasicText">
          <Form.Label>The Company Name</Form.Label>
          <InputGroup className="mb-2">
        <Form.Control aria-label="First name" required="required" size="sm" placeholder="Enter company name"/>
      </InputGroup>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required="required" size="sm" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required="required" onChange={handleValidPass} size="sm" placeholder="Enter Password" />
          <div className='text-danger'>{validPass}</div>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPssword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" required="required" onChange={handleMatchPass} size="sm" placeholder="confirm Password" />
          <div className='text-danger'>{MatchedPass}</div>
        </Form.Group>
        <Form.Group className="mb-3 ms-2 mt-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remmember Me" />
        </Form.Group>
        <Button variant='outline-primary' type="submit" >
          craete account
        </Button>
    </Form>
                  <div className='text-center mt-2'>
                  <span>Already a have account? </span><a href=''>sgin In</a>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
  
  
         </>
      );
          
  }