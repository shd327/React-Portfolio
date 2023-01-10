import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navbar, Container } from "react-bootstrap";
import logo from '../../assets/img/linkedIn.svg'

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
            window.addEventListener('scroll', onScroll)
            return () => window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value)
    }
    return (
        <Navbar bg="light" expand="lg" className={scrolled ? 'scrolled' : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={active === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={active === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={active === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={logo} alt="" /> </a>
                            <a href='#'><img src={logo} alt="" /> </a>
                            <a href='#'><img src={logo} alt="" /> </a>
                        </div>
                        <button className='' onClick={() => console.log('Contact us form')}><span>Let's Connect</span></button>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
