import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/img/cat_logp.png';

import icon1 from '../assets/img/nav-icon1.svg';
import icon2 from '../assets/img/nav-icon2.svg';
import icon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  

    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === "about" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#skill" className={activeLink === "skill" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skill')}>Technical Profile</Nav.Link>
  
            </Nav>
            <span className='navbar-text'> 
            
                <div className='social-icon'> 
                    <a href='https://www.linkedin.com/in/summira-hussain-b15181230/'><img src={icon1} alt="Linkedin Icon" /></a>
                    <a href='https://www.facebook.com/summira.hussain.3'><img src={icon2} alt="Facebook icon" /></a>
                    <a href='https://www.instagram.com/its.summira/'><img src={icon3} alt="Instagram Icon" /></a>
                </div>
               

                <Nav.Link href="#contact" className={activeLink === "contact" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}> <button className='vvd'>
                    <span>Contact me</span>
                </button></Nav.Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
