import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import "../assets/css/Header.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
//
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from 'react';


import Collapse from 'react-bootstrap/Collapse'

const Header = () => {
  const [open, setOpen] = useState(false);

 
    return(
       <>
          <Navbar bg="light" data-bs-theme="light" className='navbar' >
        <Container>
          <Navbar.Brand href="#home"> 
          <img
            src="https://www.nlptrainingdubai.com/wp-content/uploads/2019/02/logo-nlpdubai2.png"
            className="NPL-logo" alt='logo'
          />
          </Navbar.Brand>
          <Nav classNameName="ml-auto">
            <Nav.Link href="#home" id="Home" >Home</Nav.Link>
            <Nav.Link href="#about Us" id='Features' >Features</Nav.Link>

            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
             <div classNameName='collapsible-nav-dropdown'>   
            <NavDropdown.Item href="#action/3.1">Certified NLP Practitioner & Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Emotional Intelligence Coach Practitioner
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Certified Diploma in NLP & Coaching</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Certified NLP Master Practitioner
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.5">Advanced Diploma in NLP & Coaching</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
              Certified Wellness coach
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
              Certified Life Coaching
              </NavDropdown.Item>
              </div>
             </NavDropdown>
            <Nav.Link href="#pricing" id='Training'  >Training</Nav.Link>
            <Nav.Link href="#pricing" id= "Events" >Events</Nav.Link>
            <Nav.Link href="#pricing" id='Blog' > Blog</Nav.Link>
            <Nav.Link href="#pricing" id= "Contant" >Contant </Nav.Link>
          </Nav>
        </Container>
      </Navbar>


  <div className='banner-section-bg-container'>
    
     <Carousel>
      <div className='img1 d-flex justify-content-center flex-column'>
        <div className='text-center'>
          <h1 className='banner-heading'>Emotional Intelligence Coach Practitioner</h1>
          <button className='banner-button' >Click Here</button>
        </div>
      </div>
      <div className='img2 d-flex justify-content-center flex-column'>
      <div className='text-center'>
          <h1 className='banner-heading'>Certified NLP Master Practitioner</h1>
          <button className='banner-button' >Click Here</button>
        </div>
      </div>
      <div className='img3  d-flex justify-content-center flex-column'>
      <div className='text-center'>
          <h1 className='banner-heading'>Certified Diploma in NLP & Coaching</h1>
          <button className='banner-button' >Click Here</button>
        </div>
      </div>
</Carousel>
 </div>
   
   <div className="about-npl-container p-5 d-flex justify-content-center flex-column">
 
     <h1 className='About-NLP-heading'>About NLP</h1>
     <p> “A Life Transformation Tool like no other” </p>
     <p> NLP – Neuro-Linguistic Programming, is a study of human psyche and how our mind responds to various life situations. 
      Study has revealed that, in any given situation, our mind has the capacity to comprehend and run ‘mental programs’ 
      referred to as ‘mental strategies’ in a perfectly ordered sequence of instructions (or set of internal representations) 
      in a highly organized and systematic manner. </p>

     <p>      
       In simple words, our mind has the capability to create and store personal instructions for success and failure, 
       which is later understood and utilised in similar situations. If one wants to break free of these self-defeating 
       patterns and imbibe patterns of thinking that will only attain excellence, then the answer lies in learning NLP 
       techniques and implementing the same. NLP has developed a well-researched, structured process that understands 
       self-defeating patterns and breaks them into fragments to create more successful patterns which can be utilised 
       in  <span className='Mindfulness-Wellbeing'> Mindfulness Wellbeing </span>,  and to decisively choose the level of success one wants to attain in life.
      </p>   

      <h2 className='ICF-ACC-Accredited-heading'>ICF ACC Accredited.</h2>
      <p>Highest quality, international programs, fully approved by the International Coach Federation.</p>
       <p> Certificates issued by: </p>
       <ul>
        <li>
        NLP Coaching Academy and their programs are approved by
         ABNLP – The American Board of Neuro-Linguistic Programming
        </li>
         <li>
            ICF – International Coach Federation
         </li>
        <li>
        IAPCCT – International Association of Professional Coaches, Counsellors and Therapists
         SOAL – School of Accelerated Learning
        </li>
       </ul>
       </div>
   
    <div className='section3 p-5   '>
      <div>
        <img src='https://www.nlptrainingdubai.com/wp-content/uploads/2017/08/about-one.png' alt='img' />
        </div>
        <div className='text-container'>
         <h1 className='section-3-heading'> Welcome To NLP Training  Dubai</h1>
          <div className='card-container-section-3'>
            <div className='card-1'>
              <button 
              className='collpase-button'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
            Certified NLP Practitioner & Coach
           </button>
          <Collapse in={open}>
         <div id="example-collapse-text">
          Whatever you may BE whatever you may DO, this program is <br/> beneficial to YOU! 
          Transforming the lives of Business Professionals to <br/> Home-makers.
        </div>
      </Collapse>
            </div>

            <div className='card-2'>
              <button 
              className='collpase-button'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
           Emotional Intelligence Coach Practitioner
           </button>
          <Collapse in={open}>
         <div id="example-collapse-text">
          Whatever you may BE whatever you may DO, this program is <br/> beneficial to YOU! 
          Transforming the lives of Business Professionals to <br/> Home-makers.
        </div>
      </Collapse>
            </div>
   
            <div className='card-3'>
              <button 
              className='collpase-button'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
            Certified Diploma in NLP
           </button>
          <Collapse in={open}>
         <div id="example-collapse-text">
          Whatever you may BE whatever you may DO, this program is <br/> beneficial to YOU! 
          Transforming the lives of Business Professionals to <br/> Home-makers.
        </div>
      </Collapse>
            </div>
   
            <div className='card-4'>
              <button 
              className='collpase-button'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
           Certified NLP Master Practitioner
           </button>
          <Collapse in={open}>
         <div id="example-collapse-text">
          Whatever you may BE whatever you may DO, this program is <br/> beneficial to YOU! 
          Transforming the lives of Business Professionals to <br/> Home-makers.
        </div>
      </Collapse>
            </div>

            <div className='card-5'>
              <button 
              className='collpase-button'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
           Advanced Diploma in NLP & Coaching
           </button>
          <Collapse in={open}>
         <div id="example-collapse-text">
          Whatever you may BE whatever you may DO, this program is <br/> beneficial to YOU! 
          Transforming the lives of Business Professionals to <br/> Home-makers.
        </div>
      </Collapse>
            </div>
   
            </div>         
      </div>
    </div>


       </>
    )
}


export default Header