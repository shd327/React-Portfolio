import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/img/linkedIn.svg";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
{
  /* <Navbar bg="light" variant="light">
    <Container>
        <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
        </Nav>
    </Container>
</Navbar> */
}

export default function NavBar({ currentPage, handlePageChange }) {
  // return (
  //     import React from 'react';

  // TODO: Add a comment explaining how we are able to extract the key value pairs from props

  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

// export default Navbar;

// )
// }
// <ul className="nav nav-tabs">
//     <li className="nav-item">
//         <a
//             href="#home"
//             onClick={() => handlePageChange('Home')}
//             //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

//             className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//             Home
//         </a>
//     </li>
//     <li className="nav-item">
//         <a
//             href="#about"
//             onClick={() => handlePageChange('About')}
//             //  TODO: Add a comment explaining what this logic is doing

//             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//             About
//         </a>
//     </li>
//     <li className="nav-item">
//         <a
//             href="#Skills"
//             onClick={() => handlePageChange('Skills')}
//             //  TODO: Add a comment explaining what this logic is doing

//             className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
//         >
//             Blog
//         </a>
//     </li>
//     <li className="nav-item">
//         <a
//             href="#contact"
//             //  TODO: Add a comment explaining what this logic is doing

//             onClick={() => handlePageChange('Contact')}
//             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//             Contact
//         </a>
//     </li>
//     <li className="nav-item">
//         <a
//             href="#Projects"
//             onClick={() => handlePageChange('Projects')}
//             //  TODO: Add a comment explaining what this logic is doing

//             className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
//         >
//             Projects
//         </a>
//     </li>
// </ul>
