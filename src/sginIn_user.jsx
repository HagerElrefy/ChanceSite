import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import background from './images/photoPaint.jpg'
import facebook from './images/facebook.png'
import google from './images/google.png'
import './test.css';
export function SginIn() {
    return(
       <>
       <div className="container-fluid" >
            <div className="row">
            <div className="col-sm-12 d-none d-md-block col-md-4  col-lg-5 col-xlg-5 " style={{ height: '100vh'  }}>
                <div className='fw-bolder fs-4 text-light mt-2 ms-2'>
                <i class="fa-solid fa-briefcase"></i> chance
                </div>
                <div className='fw-bolder fs-1 text-light mt-5 ms-5 pt-5 ' >
                <u>Wel</u>come back ...
                </div>
              <div  className='fw-bolder fs-5 text-light mt-2 ms-5'>
                Let's get chance for better job opportunities for programmers.
              </div>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-7 col-xlg-7 bg-light " >
                
                <div className="" style={{ width: '50%' , margin:'2% auto' , padding: '.9%'}}>

                <div className='fw-bolder fs-2' >Log in to Website</div>
                <div className='text-center '>
                <a href='https://www.facebook.com/login/'><img src={facebook} className='m-2'/></a>
                <a href='https://myaccount.google.com/'><img src={google} className='m-2'/></a>
                </div>

                <div class="divider">OR</div>

                <Form >

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" size="sm" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" size="sm" placeholder="Enter Password" />
      </Form.Group>
      <div className='mt-3 mb-3 text-center'> 
            <a href=''  >Forget password ?</a>
      </div>
      <div className=' text-center'> 
      <Button variant='outline-primary' type="submit" >Log in</Button>
      </div>
      

      
      
                </Form>
                <div className='text-center mt-2'>
                <span>Create an account? </span><a href=''>sgin Up</a>
                </div>
                </div>
                
              </div>
            </div>
          </div>


       </>
    );
        
}