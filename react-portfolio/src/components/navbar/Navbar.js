import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assets/img/linkedIn.svg'

export default function NavBar({ currentPage, handlePageChange }) {

    // return (
    //     import React from 'react';

    // TODO: Add a comment explaining how we are able to extract the key value pairs from props


    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Skills"
                    onClick={() => handlePageChange('Skills')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                >
                    Blog
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    //  TODO: Add a comment explaining what this logic is doing

                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Projects"
                    onClick={() => handlePageChange('Projects')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>
            </li>
        </ul>
    );


}

    // export default Navbar;
        // <Navbar bg="light" expand="lg" className={scrolled ? 'scrolled' : ""}>
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img src={logo} alt="logo" />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
        //                 <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
        //                 <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
        //             </Nav>
        //             <span className='navbar-text'>
        //                 <div className='social-icon'>
        //                     <a href='#'><img src={logo} alt="" /> </a>
        //                     <a href='#'><img src={logo} alt="" /> </a>
        //                     <a href='#'><img src={logo} alt="" /> </a>
        //                 </div>
        //                 <button className='' onClick={() => console.log('Contact us form')}><span>Let's Connect</span></button>
        //             </span>

        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    // )
// }
