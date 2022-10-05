import { Navbar, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react';
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

    const onUpdateActiveLink = () => {

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
              <Nav.Link href="#link" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#link" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'> 
            
                <div className='navbar-text'> 
                    <a href='#'><img src={icon1} alt="" /></a>
                    <a href='#'><img src={icon2} alt="" /></a>
                    <a href='#'><img src={icon3} alt="" /></a>
                </div>
                <button className='vvd' onClick={()=> console.log('connect')}>
                    <span>Let's connect!</span>
                </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
